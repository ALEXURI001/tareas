import { addTask } from "./components/addTask.js";
import { displayTask } from "./components/readTask.js";

const btn = document.querySelector('[data-form-btn]');


//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

displayTask();


/*sessionStorage mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).
localStorage hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.*/

/*JSON.parse()
Analice un fragmento de texto de cadena como JSON, transformando opcionalmente el valor producido y sus propiedades, y devuelva el valor.

JSON.stringify()
Retorna una cadena JSON correspondiente al valor especificado, incluyendo opcionalmente solo ciertas propiedades o reemplazando valores de propiedad de una manera definida por el usuario. */