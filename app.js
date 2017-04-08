let list = document.getElementById('list-item');
let addition = document.getElementById('add-note');
let del = document.getElementsByClassName('delete');
let editbut= document.getElementsByClassName('edit-but');
let edit= document.getElementById('edit');


function get_note(){
    let myArr= new Array();
    let list_item = localStorage.getItem('note');  /*global localStorage */
     if (list_item !== null) {
        myArr = JSON.parse(list_item); 
    }
    return myArr;
}


addition.addEventListener('click', add);

function add() {
    let x = list.value;
    let notes = get_note();
    notes.push(x);
    localStorage.setItem('note', JSON.stringify(notes));
    list.value="";
 
    display();
       
}

function display() {
    let notes = get_note();
 
    let y = '';
    for(let i=0; i<notes.length; i++) {
        y += '<li><button class="delete" id="' +i+ '" >X</button>' + notes[i] 
              +'<input type="text" name="edit" id="edit'+i+'" class="edit" placeholder="Edit"/><button class="edit-but" id="'+i+'">Edit</button></li>';
    };

 
    document.getElementById('mynotes').innerHTML = y;
 
    
    for (let i=0; i < del.length; i++) {
        del[i].addEventListener('click', del_item);
    };
    
    for (let i=0; i < editbut.length; i++) {
        editbut[i].addEventListener('click',edit_note);
    };
    
}
 
 display();
 
 
 
 function del_item() {
    let div = this.getAttribute('id');
    let notes = get_note();
    notes.splice(div, 1);
    localStorage.setItem('note', JSON.stringify(notes));
 
    display();
  }



function edit_note(){
    let div = this.getAttribute('id');
    let notes = get_note();
    let edit= document.getElementById('edit'+div);
    let x=edit.value;
    notes.splice(div,1,x);
    localStorage.setItem('note', JSON.stringify(notes));
    console.log(notes);
    console.log(div);
 
    display()
}


/*Reference for localStorage taken from https://code-maven.com/todo-in-html-and-javascript */
    