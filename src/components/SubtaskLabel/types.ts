import { type Dispatch, type SetStateAction } from "react"
import { type Subtask } from "../TaskList/types"

export type SubtaskProps = {
  subtask: Subtask
  subtaskIsDone: boolean
  doneSubtasks: string[]
  setDoneSubtasks: Dispatch<SetStateAction<string[]>>
  deleteSubtask: (subtaskId: string) => void
}
