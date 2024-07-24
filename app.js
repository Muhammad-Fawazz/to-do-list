const btn = document.querySelector(".add-btn");

// const addClasses = (inpt,labl,buttn,li) => {
//     inpt.classList.add("todo-item");

//     inpt.type= "checkbox";
    

//     labl.classList.add("todo-item");
//     labl.classList.add("task1");

//     buttn.classList.add("todo-item");
//     buttn.classList.add("delete-btn");

//     li.classList.add("todo-item");

// }
const addClasses = (inpt, labl, buttn, li) => {
    // inpt.classList.add(".todo-item");
    inpt.type = "checkbox";
    inpt.classList.add("invisible");
    buttn.innerHTML = "&times;";
    

    labl.classList.add("task1");

    buttn.classList.add("delete-btn");


    
    li.classList.add("todo-item");
    
}



btn.addEventListener("click", () => {
    let search = document.querySelector(".add-search").value;
    if (search === "") {
        alert("Write something in search bar!");
        return;
    }
    const inpt = document.createElement("input");
    const labl = document.createElement("label");
    const buttn = document.createElement("button");

    const newItem = document.createElement("li");
    addClasses(inpt,labl,buttn,newItem);

    labl.innerText = search;
    
    search.innerText = "";
    
    newItem.appendChild(inpt);
    newItem.appendChild(labl);
    newItem.appendChild(buttn);

    const ul = document.querySelector(".todo-list");
    ul.appendChild(newItem);

    buttn.addEventListener("click", () => {
        newItem.remove(); // Remove the parent li element when the button is clicked
    });

});


