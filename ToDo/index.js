let arr = ["Check Email", "Do Laundry"]
const Container = document.querySelector('#container')
let TaskBox

function HomePage() {
    Container.innerHTML = '<h1>To-Do List</h1><div id="ListBox"></div> <div id="TaskBox"><button id="newTaskBtn">Add a New Task</button></div>'
    
    TaskBox = document.querySelector('#TaskBox')

    for( let index in arr) {

        if (arr[index] != null) {
            document.querySelector('#ListBox').innerHTML += `<div class='ListItem'> <button onclick='RmTask(${index})'>×</button> <p>${arr[index]}</p> </div>`
        }
    }

    document.querySelector('#newTaskBtn').onclick = AddNew

}

function RmTask(index){
    arr[index] = null
    HomePage()
}

function AddNew() {
    TaskBox.innerHTML = '<form><input autofocus type="text" id="newTaskInput" placeholder="Your New Task"><input id="submit" type="submit" value="Add"></form>'

    document.querySelector('form').onsubmit = (event) => {
        arr.push(document.querySelector('#newTaskInput').value)
        HomePage()
        return false
    }
}


document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#start').onclick = HomePage
    

})
 