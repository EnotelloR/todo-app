import React, {useState} from 'react';
import {IBaseTask} from "../../types/types";
import Button from "../UI/Button/Button";

import styles from './TaskAdder.module.css'


interface TaskAdderProps{
    createTask: (task: IBaseTask) => void;
}

const TaskAdder: React.FC<TaskAdderProps> = ({createTask}) => {
    const [taskText, setTaskText] = useState("");
    return (
        <div className={styles.taskAdder}>
            <input className={styles.taskAdder__input}
                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskText(event.target.value)}
                   value={taskText}
                   placeholder={"Введите задание"}
            />
            <Button disabled={taskText === ""} onClick={() => createTask({text: taskText, completed: false})}>Добавить</Button>
        </div>
    );
};

export default TaskAdder;
