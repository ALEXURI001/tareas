export const uniqueDates = (tasks) => {
    console.log(tasks);
    const unique = [];

    tasks.forEach( task => {
        if( !unique.includes(task.dateFormat) )unique.push(task.dateFormat);
    });
    return unique;
}

export const orderDates = (dates) => {
    return dates.sort( (a,b)  => { // cuando la funcion tiene dos parametros de necesita que esten en dos parentesis
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firstDate - secondDate;
    });
}

/* .sort //para ordenar los arregles de menor a mayor */