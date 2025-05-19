const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

const  adddTask = () => {
    if (inputBox.value === ''){
        window.alert("You must write something!")
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
    }
}
