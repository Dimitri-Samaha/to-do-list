let list = [];

function Add(){
    // Handle input
    let text = document.getElementById('input').value;
    if (text != ""){
        list[list.length] = text; // add input value to list
    }
    else{
        console.log("Please enter something")
    }
    // Write the list in the document
    AddElements(text, list.length-1)

    console.log(list)
}

function AddElements(_text, _index){
    let element = document.getElementById("list-div");
    let tag = document.createElement("div");
    let text = document.createTextNode(_text);

    let button = document.createElement("button");
    button.appendChild(document.createTextNode("X"));
    button.setAttribute("value", _index);
    button.setAttribute("id", _index);
    button.addEventListener("click", ()=> {XButton(button.getAttribute("value"))});

    tag.appendChild(text);    
    tag.appendChild(button);
    element.appendChild(tag);
}

function XButton(_index){   
    // remove from list
    list.splice(_index, 1);
    // remove div from document 
    let  button = document.getElementById(_index);
    let div = button.parentNode;
    div.remove();
}
