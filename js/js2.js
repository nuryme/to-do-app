const listContainer = document.getElementById('list-container');
const inputField = document.getElementById('input-field')
function addTask() {
    if(inputField.value === '') {
        alert('You must write something')
    }
    else {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.innerHTML = inputField.value;
        li.appendChild(span)
        listContainer.appendChild(li);
    }
    inputField.value = '';
    saveData()
}
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}
function showData() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showData()