"use client"

import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, type DropResult } from 'react-beautiful-dnd';

import { AddSubtaskModal } from "../AddSubtaskModal";
import { SubtaskLabel } from "../SubtaskLabel";
import { TaskLabel } from "../TaskLabel";

import { type Subtask, type Task } from "./types";

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [doneTasks, setDoneTasks] = useState<string[]>([]);
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);
  const [subtaskName, setSubtaskName] = useState('');
  const [doneSubtasks, setDoneSubtasks] = useState<string[]>([]);
  const [openAddSubtask, setOpenAddSubtask] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState('');

  const tasksDone = `${doneTasks?.length} / ${tasks?.length}`;

  const addTask = useCallback(() => {
    setTasks((prev) => [...(prev ? prev : []), { name: taskName, id: nanoid() }]);
    setTaskName("");
  }, [taskName]);

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setDoneTasks(doneTasks.filter((id) => id !== taskId));
    setSubtasks(subtasks.filter((subtask) => subtask.parent_task_id !== taskId));
  }

  const toggleAddSubtask = (taskId: string) => {
    setSelectedTaskId(taskId);
    setOpenAddSubtask(true);
  }

  const addSubtask = useCallback(() => {
    setSubtasks((prev) => [
      ...(prev ? prev : []),
      {
        name: subtaskName,
        id: nanoid(),
        parent_task_id: selectedTaskId
      }
    ]);

    setSubtaskName('');
    setOpenAddSubtask(false);
  }, [selectedTaskId, subtaskName]);

  const deleteSubtask = (subtaskId: string) => {
    setSubtasks(subtasks.filter((task) => task.id !== subtaskId))
  }

  const onDragEnd = (result: DropResult) => {
    const liArray = Array.from(document.querySelectorAll('li'));

    liArray.forEach((li) => {
      const newClassName = li.className
        .split(' ')
        .filter((cls) => !cls.includes('animate'))
        .join(' ');

      li.className = newClassName
    });

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result?.destination?.index ?? 0, 0, reorderedItem);

    setTasks(items);
  }

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();

        if (openAddSubtask) {
          addSubtask();
        } else {
          addTask();
        }
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [addTask, openAddSubtask, addSubtask]);

  return (
    <div>
      {!!tasks?.length && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <ul
                className="flex flex-col"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks?.map((task, index) => {
                  const taskIsDone = doneTasks?.includes(task.id);
                  const filteredSubtasks = subtasks
                    ?.filter((subtask) => subtask.parent_task_id === task.id);

                  return (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <li
                            className="bg-neutral-50 border-2 flex gap-1 p-2 items-center content-center shadow-sm rounded-md z-auto animate-fade-down mb-2"
                          >
                            <TaskLabel
                              task={task}
                              taskIsDone={taskIsDone}
                              doneTasks={doneTasks}
                              setDoneTasks={setDoneTasks}
                              deleteTask={deleteTask}
                              toggleAddSubtask={toggleAddSubtask}
                            />
                          </li>

                          <ol className="flex flex-col items-center justify-center">
                            {filteredSubtasks?.map((subtask, index) => {
                              const subtaskIsDone = doneSubtasks?.includes(subtask.id);

                              return (
                                <li
                                  key={subtask.id}
                                  className={`w-[80%] bg-white border-b-2 border-r-2 border-l-2 flex gap-1 p-2 items-center content-center shadow-sm animate-fade-down ${filteredSubtasks.length === 1 && 'rounded-b-md'} ${index > 0 && 'rounded-b-md'}`}
                                >
                                  <SubtaskLabel
                                    subtask={subtask}
                                    subtaskIsDone={subtaskIsDone}
                                    doneSubtasks={doneSubtasks}
                                    setDoneSubtasks={setDoneSubtasks}
                                    deleteSubtask={deleteSubtask}
                                  />
                                </li>
                              )
                            })}
                          </ol>
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

      )}

      {tasks.length > 0 && (
        <div className="flex content-end justify-end gap-1 mt-1">
          <p>Tasks done:</p>
          <strong>{tasksDone}</strong>
        </div>
      )}

      <div className="flex gap-2 mt-4">
        <div>
          <input
            type="text"
            id="task-name"
            value={taskName}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            className="border-2 p-2"
            autoFocus
          />
        </div>

        <div className="min-w-[105px]">
          <button
            type="button"
            className="bg-blue-500 h-[44px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addTask}
          >
            Add task
          </button>
        </div>
      </div>

      <AddSubtaskModal
        subtaskName={subtaskName}
        setSubtaskName={setSubtaskName}
        addSubtask={addSubtask}
        open={openAddSubtask}
        onClose={() => setOpenAddSubtask(false)}
      />
    </div>
  )
}
