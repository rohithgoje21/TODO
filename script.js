
const container = document.querySelector(".container");
const addNote = document.querySelector("#addNote");
const clearAll = document.querySelector("#clearAll");
const lastdiv = document.querySelector("#lastdiv");
const tasks = document.querySelector("#tasks");



addNote.addEventListener("click", () => {
    let inputEles = document.getElementsByTagName('textarea');
    let newID = Number((typeof inputEles[0] === "undefined") ? 0 : inputEles[0].id);

    let textarea = document.createElement('textarea')
    textarea.setAttribute('id', newID + 1);
    textarea.setAttribute('rows',2)
    textarea.setAttribute('cols',30)
    textarea.setAttribute('placeholder',"Enter here")


    let div = document.createElement('div')
    div.setAttribute('id', newID + 1);
    div.append(textarea);
    div.innerHTML = div.innerHTML + `<i class="fa-solid fa-trash" id=${newID + 1} onclick="deleteNote(id)"></i></br> `;
    container.prepend(div);

    showtasks(container.childNodes.length);
})



clearAll.addEventListener("click", () => {
    let ch = prompt("Want to delete all TODO's...(y/N)")
    if (ch == "y" || ch == "Y")
        container.innerHTML = "";

    showtasks(container.childNodes.length);
})

function deleteNote(id) {
    let div = document.getElementById(id);
    container.removeChild(div);

    showtasks(container.childNodes.length);
}

function showtasks(len){
    tasks.innerHTML = `You have ${len} pending tasks`;
}

