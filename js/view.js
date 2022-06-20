'use strict'

const view = () => {
    return {
        form: null,
        toDoContainer: null,

        createToDoItem(data) {
            const div = document.createElement('div');
            div.classList.add('col-4');
            div.setAttribute( `data-todo-id`, `${data.id}`)
            div.innerHTML = `<div class="taskWrapper">
            <button type="button" class="btn-close" aria-label="Close"></button>
            <div class="taskHeading">${data.title}</div>
            <div class="taskDescription">${data.description}</div>
        </div>`;
            return div;
        },
        removeToDoItem(item) {
            item.remove();
        },
        resetForm(formElement) {
            formElement.reset();
        },

        addToDoItem(dataInput) {
            this.toDoContainer.append(this.createToDoItem(dataInput));
        },

        init(formElement, containerElement) {
            this.form = formElement;
            this.toDoContainer = containerElement;
        },
    }
}