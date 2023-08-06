import { type Dispatch, type SetStateAction } from "react"
import { type Task } from "../TaskList/types"

export type TaskLabelProps = {
  task: Task
  taskIsDone: boolean
  doneTasks: string[]
  setDoneTasks: Dispatch<SetStateAction<string[]>>
  deleteTask: (taskId: string) => void
}
