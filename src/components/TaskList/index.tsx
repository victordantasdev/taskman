"use client"

import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";

import { TaskLabel } from "../TaskLabel";

import { type Task } from "./types";

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [doneTasks, setDoneTasks] = useState<string[]>([]);

  const addTask = useCallback(() => {
    setTasks((prev) => [...(prev ? prev : []), { name: taskName, id: nanoid() }]);
    setTaskName("");
  }, [taskName]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addTask();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [addTask]);

  return (
    <div>
      {!!tasks?.length && (
        <ol className="flex gap-2 flex-col">
          {tasks?.map((task) => {
            const taskIsDone = doneTasks?.includes(task.id);

            return (
              <li
                className="bg-neutral-50 border-2 flex gap-1 p-2 items-center content-center shadow-sm rounded-md z-auto animate-fade-down"
                key={task.id}
              >
                <TaskLabel
                  task={task}
                  taskIsDone={taskIsDone}
                  doneTasks={doneTasks}
                  setDoneTasks={setDoneTasks}
                />
              </li>
            )
          })}
        </ol>
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
    </div>
  )
}
