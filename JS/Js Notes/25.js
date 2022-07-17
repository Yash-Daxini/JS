let container = document.querySelector('.container');
let div = document.createElement('div');
div.setAttribute('id','element');
div.setAttribute('class','element');
let id = document.getElementById('ul');
container.insertBefore(div,id);

let val = localStorage.getItem('text');
let text;
if(val == null)
{
    text = document.createTextNode('This is a Editable Division');    
}
else
{
    text = document.createTextNode(val);;
}
div.appendChild(text);

div.addEventListener('click',function() {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    let count;
    if(noTextAreas ==0 && count == 0){
    let html = "" ;
    div.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    count++ ;
    }
    else if(noTextAreas == 0){
    html = div.innerText;
    div.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        element.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    });
});

