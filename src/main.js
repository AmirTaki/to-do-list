const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

// storage 

const  save  = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}


const show = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}


// add Task  onClikc
const  addTask = () => {
    if (inputBox.value === ''){
        window.alert("You must write something!")
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML ="\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ''
    save()

}


// click
listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        save()

    }
    else if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        save()

    }
})

show()
