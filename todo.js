/*
const todo = [{
    text: string,
    completed: boolean | false,
    id: string
}]
*/

const todoContainer = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const editbutton = document.querySelector('#edit')

editbutton.style = "display:none"

let idOfElementToEdit = null;

const todos = []

const handeEdit = (id) => {
    console.log(id)
    const element = todos.find((todo)=>todo.id===id)
    input.value = element.text
    button.style = "display:none"
    editbutton.style = "display:inline"
    idOfElementToEdit = id;

}
const renderList = () => {
    todoContainer.innerHTML = ''
    todos.forEach((todo) => {
        const li = document.createElement('li')
        const button = document.createElement('button')
        const editbutton = document.createElement('button')
        button.addEventListener('click', (e) => {
            li.remove()
            const id = todo.id
            const index = todos.findIndex((todo) => todo.id === id)
            todos.splice(index, 1)
        })

        editbutton.addEventListener('click', (e) => {
            handeEdit(todo.id)
        })

        editbutton.style = "background:cyan"
        button.style = "background:red"

        button.innerHTML = 'delete'
        editbutton.innerHTML = 'edit'
        li.innerHTML = `
        ${todo.text}
        `
        li.appendChild(button)
        li.appendChild(editbutton)
        todoContainer.appendChild(li)
    })
}

const handleAdd = (e) => {
        console.log(input.value)
        const itemToAdd = input.value
        if (itemToAdd !== null && itemToAdd !== '') {
            todos.push({
                text: itemToAdd,
                completed: false,
                id: Date.now()
            })
            renderList()
            return

        } else {
            return window.alert('Adding an empty item is not possible')
        }

}

const showEdit = (e)=>{
    const newValue = input.value
    const element = todos.find((todo)=>todo.id===idOfElementToEdit)
    element.text = newValue
    renderList()
    button.style = "display:inline"
    editbutton.style = "display:none" 
    input.value = ""
    console.log(todos)
}

button.addEventListener('click', handleAdd)
editbutton.addEventListener('click', showEdit)
