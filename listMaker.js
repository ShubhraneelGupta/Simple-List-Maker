const listNameInput = document.querySelector('input')
let listName = null;
listNameInput.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        listName = this.value
        this.value = ''
        makeList(listName)
    }
})

const container = document.querySelector('#lists')

function makeList(listName){
    const individualListDiv = document.createElement('div')
    individualListDiv.classList.add('individualList')
    const listUL = document.createElement('ul')
    const heading = document.createElement('h4')
    heading.innerText = listName
    const addItem = document.createElement('input')
    listUL.classList.add('listUL')
    addItem.placeholder = 'add item.....'
    addItem.addEventListener('keypress',function(e){
        if(e.key === 'Enter'){
            const listLI = document.createElement('li')
            listLI.innerText = this.value
            listUL.appendChild(listLI)
            this.value = ''
        }
    })
    individualListDiv.append(heading, addItem, listUL)
    container.append(individualListDiv)
}