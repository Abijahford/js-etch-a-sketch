/* 

create a script to make 256 divs | .createElement - for creating an element
append each of them to .container div | <name>.appendChild(nodetoappend)
create a row of 16 divs, add it to the container

*/

createBoard(60)

function createBoard(numRow) {
    for (let a = 0; a < numRow; a++) {
        var row = document.createElement("div");
        document.getElementById("container").appendChild(row);
        row.className = 'row';
        for (let b = 0; b < numRow; b++) {
            var column = document.createElement("div");
            column.innerHTML = '';
            column.className = 'column';
            column.setAttribute('onmouseover', 'mouseOver(this)')
            row.appendChild(column);
        }
    }    
}
/*

*/
function mouseOver(e) {
    e.style.backgroundColor = "black"
}

const clearButton = document.querySelector('button');

clearButton.addEventListener("click", function () {
    const columns = document.getElementsByClassName("column")
    const container = document.getElementById("container")
    container.classList.add("shake")
    for (let index = 0; index < columns.length; index++) {
        columns[index].style.backgroundColor = "transparent";
    }
    let userInput = prompt("How many rows would you like?")
    document.getElementById("container").innerHTML = ''
    if(userInput <= 0 || userInput > 100){
        alert("Must be between 1 and 100")
        createBoard(60)
    } else {
        createBoard(userInput)
    }
    setTimeout(removeShake, 3000)
})

function removeShake() {
    const container = document.getElementById("container")
    container.classList.remove("shake")
}