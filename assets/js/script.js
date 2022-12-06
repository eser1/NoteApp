const ui = new UI();


const submitEvent = function(){

    ui.textForm.addEventListener("submit",(e)=>{
  
        ui.editorContainer.classList.add("d-none");
    
        let noteText = tinymce.get("editor").getContent();
        let noteTitle = ui.title.value;
        let newDate = noteDate();
        let borderColor = "border-blue";
    
        let note = ui.getNote(borderColor,noteTitle,noteText,newDate);
    
        ui.notes.insertAdjacentHTML("afterbegin",  note );
        
        tinymce.get("editor").setContent("");
        document.querySelector("#title").value = "";

        e.preventDefault();
        
      });
}

submitEvent();

const noteDate = function(){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    var dateObj = new Date();
    var day = dateObj.getUTCDate();

    newdate =  monthNames[dateObj.getMonth()] + " " + day;
    return newdate;
}