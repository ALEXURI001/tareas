import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTask } from './readTask.js';

export const addTask = (evento) => {
    evento.preventDefault();
    //trae el elemento que se va llenando en la lista
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    //VALORES
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');  // FUNCION MOMENT ES DE UNA LIBRERIA DE UN API, EN LA FUNCION MOMENT LE PASAMOS LA FECHA Y LE PASAMOS EL FORMATO
    

    if( value === "" || date === "" ){
      return;
    }

    //VACIANO LOS VALORES AL ENVIAR DATOS
    input.value = '';
    calendar.value = "";

    const complete = false;

    const taskObj = {
      value,
      dateFormat,
      complete,
      id: uuid.v4()
    }

    list.innerHTML = "";
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //Objeto para alamacenar los valores 
    taskList.push(taskObj); //subiendo los datos a la variable objeto para tenerlo guardado
    localStorage.setItem('tasks', JSON.stringify(taskList)); //Funcion para guardar los datos

    displayTask();
  }
  

  
  
  export const createTask = ({value,dateFormat, complete, id}) => {
    const task = document.createElement('li');
    task.classList.add('card');
    //backticks
    const taskContent = document.createElement('div');

    const check = checkComplete(id);
  
    if (complete){ //nombra el relleno del cuadro al momento de recargar la pagina
      check.classList.toggle('fas');
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    }
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);

    //AGREGANDO LOS COMP0NENTES A LA LISTA
    task.appendChild(taskContent);
    task.appendChild(deleteIcon(id));
    return task;
  };


  /*Explicando un poco el método findIndex() ejecuta una función callback una vez 
  por cada índice del array hasta que encuentre uno donde devuelva un valor true. */
  