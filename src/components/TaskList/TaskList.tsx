import React from 'react';
import Task from "../Task/Task";
import {ITask} from "../../types/types";

import styles from './TaskList.module.css'


interface TaskListProps{
    tasks: ITask[];
    taskUpdater: (task: ITask) => void;
}
const TaskList: React.FC<TaskListProps> = ({tasks, taskUpdater}) => {

    if (!tasks.length) {
        return (
            <div className={styles.taskListBody}>
                <h2>
                    Задачи не найдены!
                </h2>
            </div>
        )
    }

    return (
        <div className={styles.taskListBody}>
            {
                tasks.map((task: ITask) =>
                    <Task key={task.id} task={task} changeTask={taskUpdater}/>)
            }
        </div>
    );
};

export default TaskList;
