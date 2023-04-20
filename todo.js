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

const todos = []

const renderList = ()=>{
    todoContainer.innerHTML = ''
    todos.forEach((todo)=>{
        const li = document.createElement('li')
        li.innerHTML = todo.text
        todoContainer.appendChild(li)
    })
}

const handleAdd = (e)=>{
    console.log(input.value)
    const itemToAdd = input.value
    if(itemToAdd!==null && itemToAdd!==''){
        todos.push({
            text: itemToAdd,
            completed: false,
            id: Date.now()
        })
        renderList()
        return

    }else
    {
        return window.alert('Adding an empty item is not possible')
    }
    
}
button.addEventListener('click', handleAdd)
