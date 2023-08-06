import { Trash } from "@phosphor-icons/react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { type SubtaskProps } from "./types";

export function SubtaskLabel({
  subtask,
  subtaskIsDone,
  doneSubtasks,
  setDoneSubtasks,
  deleteSubtask,
}: SubtaskProps) {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div className="flex justify-center items-center">
        <input
          checked={subtaskIsDone}
          id={subtask.id}
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={() => {
            if (subtaskIsDone) {
              setDoneSubtasks(doneSubtasks?.filter((t) => t !== subtask.id))
            } else {
              setDoneSubtasks([...doneSubtasks ? doneSubtasks : [], subtask.id])
            }
          }}
        />

        <label
          htmlFor={subtask.id}
          className={`ml-2 text-sm font-medium text-gray-900 ${subtaskIsDone && 'line-through'}`}
        >
          {subtask.name}
        </label>
      </div>

      <div className="flex gap-2">
        <button
          className="rounded-full bg-red-400 p-2"
          aria-label="Delete task"
          onClick={() => deleteSubtask(subtask.id)}
          data-tooltip-id={`delete-subtask-${subtask.id}`}
        >
          <Trash size={16} color="#fff" />
        </button>

        <ReactTooltip
          id={`delete-subtask-${subtask.id}`}
          place="right"
          content={`Delete ${subtask.name} subtask`}
        />
      </div>
    </div>
  )
}
