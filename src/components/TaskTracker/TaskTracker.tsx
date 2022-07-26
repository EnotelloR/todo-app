import React, {useMemo, useState} from 'react';
import {IBaseTask, ITask} from "../../types/types";
import TaskAdder from "../TaskAdder/TaskAdder";
import TaskList from "../TaskList/TaskList";

import styles from './TaskTracker.module.css'
import Button from "../UI/Button/Button";

enum TaskTypes {
    all = 'all',
    active = 'active',
    completed = 'completed'
}

const TaskTracker: React.FC = () => {
    const [tasks, setTasks] = useState([{id: 0, text: "Тестовое задание", completed: false}, {id: 1, text: "Прекрасный код", completed: true}, {id: 2, text: "Покрытие тестами", completed: false}]);
    const [selectedType, setSelectedType] = useState(TaskTypes.all);

    const sortedTasks = useMemo(() => {
        return tasks.sort((a: ITask,b: ITask) => a.id - b.id)
    }, [tasks]);

    const filteredAndSortedTasks = useMemo(() => {
        switch (selectedType) {
            case TaskTypes.all:
                return sortedTasks;
            case TaskTypes.active:
                return sortedTasks.filter((task: ITask) => !task.completed)
            case TaskTypes.completed:
                return sortedTasks.filter((task: ITask) => task.completed)
            default:
                return sortedTasks
        }
    }, [sortedTasks, selectedType]);

    const openTasksCount = useMemo(() => {
        return sortedTasks.filter((task: ITask) => !task.completed).length
    }, [sortedTasks]);

    const updateTask = (updatedTask: ITask) => {
        setTasks([...tasks.filter(task => task.id !== updatedTask.id), updatedTask])
    }

    const createTask = (newTask: IBaseTask) => {
        setTasks([...tasks, {...newTask, id: getID()}])
    }

    const getID = () => {
        return tasks?.length > 0  ? tasks[tasks.length - 1].id+1 :  0;
    }

    const clearCompleted = () => {
        setTasks([...tasks.filter(task => !task.completed)])
    }


    return (
        <div className={styles.taskTracker}>
            <div className={styles.taskTracker__creator}>
                <TaskAdder createTask={createTask}/>
            </div>
            <div>
                <div className={styles.taskTracker__controls}>
                    <p>Осталось задач: {openTasksCount}</p>
                    <div className={styles.taskTracker__controls__buttons}>
                        <Button active={selectedType === TaskTypes.all} onClick={() => setSelectedType(TaskTypes.all)}>Все</Button>
                        <Button active={selectedType === TaskTypes.active} onClick={() => setSelectedType(TaskTypes.active)}>Активные</Button>
                        <Button active={selectedType === TaskTypes.completed} onClick={() => setSelectedType(TaskTypes.completed)}>Завершённые</Button>
                    </div>
                    <Button onClick={clearCompleted}>Очистить выполненные задачи</Button>
                </div>
                <TaskList tasks={filteredAndSortedTasks} taskUpdater={updateTask}/>
            </div>
        </div>
    );
};

export default TaskTracker;
