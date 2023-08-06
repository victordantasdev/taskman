import { Plus, Trash } from "@phosphor-icons/react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useWindowSize } from "react-use";

import { type TaskLabelProps } from "./types";

export function TaskLabel({
  task,
  taskIsDone,
  doneTasks,
  setDoneTasks,
  deleteTask,
  toggleAddSubtask,
}: TaskLabelProps) {
  const { width } = useWindowSize();
  const isDesktop = width > 768;

  return (
    <div className="flex justify-between items-center w-[100%]">
      <div className="flex justify-center items-center">
        <input
          checked={taskIsDone}
          id={task.id}
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={() => {
            if (taskIsDone) {
              setDoneTasks(doneTasks?.filter((t) => t !== task.id))
            } else {
              setDoneTasks([...doneTasks ? doneTasks : [], task.id])
            }
          }}
        />

        <label
          htmlFor={task.id}
          className={`ml-2 text-sm font-medium text-gray-900 ${taskIsDone && 'line-through'}`}
        >
          {task.name}
        </label>
      </div>

      <div className="flex gap-2">
        <button
          className="rounded-full bg-blue-400 p-2"
          aria-label="Add subtask"
          data-tooltip-id={`add-subtask-${task.id}`}
          onClick={() => toggleAddSubtask(task.id)}
        >
          <Plus size={16} color="#fff" />
        </button>

        <button
          className="rounded-full bg-red-400 p-2"
          aria-label="Delete task"
          data-tooltip-id={`delete-task-${task.id}`}
          onClick={() => deleteTask(task.id)}
        >
          <Trash size={16} color="#fff" />
        </button>

        {isDesktop && (
          <>
            <ReactTooltip
              id={`add-subtask-${task.id}`}
              place="top"
              content={`Add to ${task.name} a subtask`}
            />

            <ReactTooltip
              id={`delete-task-${task.id}`}
              place="right"
              content={`Delete ${task.name} task`}
            />
          </>
        )}
      </div>
    </div>
  )
}
