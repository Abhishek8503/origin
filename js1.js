// const headingObject = document.getElementById('heading')

// headingObject.innerHTML = 'Hello World'
// headingObject.style = 'color:red'

// console.log(headingObject)

// const headingObject = document.getElementById('heading')
// const listObject = document.getElementById('list')

// const arr  = ['element1','element2','element3','element4','element5']

// const textNode = document.createTextNode('Hello World')


// arr.forEach((element) => {
//     const li = document.createElement('li')
//     li.innerHTML = element
//     listObject.appendChild(li)
// })

// const listElement = document.getElementsByClassName('list-ele')

// console.log(listElement)


// const heading = document.querySelectorAll('ul')
// console.log(heading)

const body = document.querySelector('body')

const toggleTheme = () =>{
    if(body.classList.contains('dark'))
    {
        body.classList.remove('dark')
        body.classList.add('light')
    }
    else{
        body.classList.remove('light')
        body.classList.add('dark')
    }
}