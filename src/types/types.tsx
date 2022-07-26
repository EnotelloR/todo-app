export interface IBaseTask {
    text: string;
    completed: boolean;
}

export interface ITask extends IBaseTask{
    id: number;
}

