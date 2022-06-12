'use strict'

const view = (obj, form) => {
    const todoItem = '#todoItems';
    const todoItemHtml = document.querySelector(todoItem);

    const divHtml = document.createElement('div');
    divHtml.classList.add('col-4');
    divHtml.innerHTML = `<div className="taskWrapper" style="background-color: #ccc; border-radius: 10px; box-shadow: 0 0 14px 1px rgba(0, 0, 0, .2); padding: 20px; margin-bottom: 20px;">
                                     <div className="taskHeading">${obj.title}</div>
                                     <div className="taskDescription">${obj.description}</div>
                                 </div>`;
    todoItemHtml.append(divHtml);
    return {
    }
}