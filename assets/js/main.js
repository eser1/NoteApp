//================== TEXT EDITOR CODES ==================

  tinymce.init({
    selector: 'textarea#editor',
    skin: 'bootstrap',
    plugins: 'lists, link, image, media',
    toolbar: 'h2 bold strikethrough  bullist numlist color backcolor textcolor',
    menubar: false,
  });



  
  const writeNoteBtn = document.querySelector(".write-note-btn");
  const editorContainer = document.querySelector(".editor-container");

  writeNoteBtn.addEventListener("click", ()=>{
    
    if(editorContainer.classList.contains("d-none")){
      editorContainer.classList.remove("d-none")
    }
    else{
      editorContainer.classList.add("d-none")
    }
  })






//================== NAVBAR CODES ==================


document.addEventListener("DOMContentLoaded", function(event) {
   
  const showNavbar = (toggleId, navId, bodyId, headerId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  bodypd = document.getElementById(bodyId),
  headerpd = document.getElementById(headerId)

  // Validate that all variables exist
  if(toggle && nav && bodypd && headerpd){

    // nav.classList.toggle('show')
    // // change icon
    // toggle.classList.toggle('bx-x')
    // // add padding to body
    // bodypd.classList.toggle('body-pd')
    // // add padding to header
    // headerpd.classList.toggle('body-pd')
  toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
  })
  }}
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  showNavbar('header-toggle','nav-bar','body-pd','header')
  
  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')
  
  function colorLink(){
  if(linkColor){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
  }
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  
   // Your code to run since DOM is loaded and ready
  });


