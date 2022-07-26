import React from 'react';
import cx from 'classnames'

import {ITask} from "../../types/types";
import Button from "../UI/Button/Button";

import styles from './Task.module.css'


interface TaskProps {
    task: ITask;
    changeTask: (task: ITask) => void;
}

const Task: React.FC<TaskProps> = (
    {task,
    changeTask}
) => {

    return (
        <div className={styles.taskBody}>
            <p className={cx(styles.taskText, {[styles.taskText_completed]: task.completed})}>
                {task.text}
            </p>
            <Button onClick={() => changeTask({...task, completed: !task.completed})}>
                {task.completed ? "Открыть задачу" : "Закрыть задачу"}
            </Button>
        </div>
    );
};

export default Task;
