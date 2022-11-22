import { createTask } from './addTask.js';
import  dateElement  from './dateElement.js';
import { uniqueDates, orderDates } from '../services/date.js';

export const displayTask = () => {
    console.log(uuid.v4());
    const list = document.querySelector("[data-list]");

    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates =uniqueDates(tasksList);
    orderDates(dates); //modificador para que este en orden las fechas

    dates.forEach(date => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            if (diff === 0) {
                list.appendChild(createTask(task));
            }
           
    });

   
    });
};