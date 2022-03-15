// console.log("This is working")
showNotes();

let addBtn = document.getElementsByClassName("addBtn")[0];

addBtn.addEventListener("click", () => {
    let addTxt = document.getElementsByClassName("addTxt")[0];
    if (addTxt.value == "") {
        alert("Textarea can not been empty")
    }
    else {
        let notes = localStorage.getItem("notes");
        if (notes === null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        // console.log(notesObj);
        showNotes();
    }
})
// function to show item
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
     html = ""
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card mx-2 my-3 noteCard" style="width: 18rem;">
        <div class="card-body">
          <h4>Note ${index + 1}</h4>
          <p class="card-text">${element}</p>
          <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)">Delete Note</button>
        </div>
      
      </div>`
    });
    let notesElm = document.getElementsByClassName('notes')[0];
    notesElm.innerHTML = html;
    if(notesObj.length == 0){
        notesElm.innerHTML = 'Nothing to show! Use "Add a Note" section above to add notes '
    }

    
}
// function to delete note

function deleteNote(index){
    // console.log('delete',index)
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Search todo 

let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal = search.value;
    // console.log("input event fire",inputVal)
    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText
       
        let notesElm = document.getElementsByClassName('notes')[0];
        
            
        
            
            if(cardTxt.includes(inputVal)){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
       
        
      
        
        // console.log(cardTxt)
    })
})

