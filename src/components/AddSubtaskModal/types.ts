import { type Dispatch, type SetStateAction } from "react"

export type AddSubtaskModalProps = {
  open: boolean
  subtaskName: string
  onClose: () => void
  setSubtaskName: Dispatch<SetStateAction<string>>
  addSubtask: () => void
}
