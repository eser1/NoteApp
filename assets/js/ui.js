function UI(){
    this.textForm = document.querySelector("#text-form");
    this.notes = document.querySelector("#notes");
    this.writeNoteBtn = document.querySelector(".write-note-btn");
    this.editorContainer = document.querySelector(".editor-container");
    this.textArea = document.querySelector("#editor");
    this.editorBtn = document.querySelector("#editor-btn");
    this.title = document.querySelector("#title");
}

UI.prototype.clearAll = function(){

    
}

UI.prototype.getNote = function(borderColor, title, note, date){
    

    let newNote = `
    <!-- Start Card -->
    <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card ${borderColor}">
            <div class="card-header">
                <div class="dropdown dropdown-menu-end">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class='bx bx-dots-horizontal-rounded'></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li>
                            <a class="dropdown-item" href="#">
                                <i class='bx bx-pencil' ></i>
                                <span>Edit</span> 
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                <i class='bx bx-trash' ></i>
                                <span>Delete</span> 
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                <i class='bx bx-share'></i>
                                <span>Share</span> 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${note}</p>
            </div>
            <div class="card-footer text-muted">
                Saved on <strong>${date}</strong>  
            </div>
        </div>
    </div><!-- End Column -->`

    return newNote;
}

/*

//Tüm Elementlerimiz
function UI(){
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
}

//Sorulara getiren fonksiyon
UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri) {
        options += 
            `
                <div class="option"> 
                    <span><b>${cevap}</b>) ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }
    this.question_text.innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}


//Soru Sayısını Gösteren Fonksiyon

UI.prototype.soruSayisiniGoster = function (soruSirasi, toplamsoru){
    let tag = `<span class="badge bg-primary p-2">${soruSirasi + "/" + toplamsoru}</span>`;
    let questionIndex = ui.question_index;
    questionIndex.innerHTML = tag;
}

UI.prototype.skoruGoster = function(toplamsoru,dogruCevap){
    let tag = `Toplam ${toplamsoru} sorudan ${dogruCevap} soruya doğru cevap verdiniz.`;
    this.score_text.innerHTML = tag;
}









*/