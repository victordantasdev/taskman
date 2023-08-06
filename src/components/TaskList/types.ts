export type Task = {
  id: string
  name: string
}

export type Subtask = Task & {
  parent_task_id: string
}
