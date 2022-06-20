'use strict'

const model = () => {
    return {
        form: null,
        id: null,
        currentData: null,

        init (formName) {
            this.form = formName;
            const savedData = this.getData();
            this.id = savedData ? savedData[savedData.length-1].id + 1 : 1;
        },

        getData() {
            return JSON.parse(localStorage.getItem(this.form));
        },

        setData(data) {
            const  toDoItemData = structuredClone(data);
            const savedData = this.getData();
            const localStorageDataContainer = savedData ? savedData : [];

            if(savedData) this.id += 1;
            toDoItemData.id = this.id;
            localStorageDataContainer.push(toDoItemData);
            localStorage.setItem(this.form, JSON.stringify(localStorageDataContainer));
            return toDoItemData;
        },
        removeToDoItem(idRemoveItem) {
            const data = this.getData().filter((item) => item.id !== idRemoveItem);
            if(data.length !== 0) localStorage.setItem(this.form, JSON.stringify(data));
            else localStorage.clear();
        },
    }
}
