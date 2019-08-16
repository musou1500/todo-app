export interface Task {
  id: number;
  name: string;
  description: string;
  deadline: string;
  labels: Label[];
  done: boolean;
}

export interface Label {
  id: number;
  name: string;
}
