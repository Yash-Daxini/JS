let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler() {
    console.log("You clicked");

    // Instantiate an xhr Object
    const xhr = new XMLHttpRequest();
    
    // Open the Object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',false);

    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json')


    // xhr.onreadystatechange = function () {
    //     console.log('Ready state is',xhr.readyState);
    // }

    // on progress
    xhr.onprogress = function () {
        console.log("on progress");
    }

    xhr.onload = function () {
        if(this.status === 200)
        {
            console.log(this.responseText);
        }
        else
        {
            console.log("Some error occured");
        }
    }
    // send request
    params = `{"name":"test3","salary":"123","age":"23"}`;
    xhr.send(params);
    console.log("done");
}

let populateBtn = document.getElementById('populateBtn');
populateBtn.addEventListener('click',popHandler);

function popHandler(){
    console.log("You clicked populateBtn");

    // Instantiate an xhr Object
    const xhr = new XMLHttpRequest();
    
    // Open the Object
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

    xhr.onload = function () {
        if(this.status === 200)
        {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            let str = "";
            for (key in obj)
            {
               str += `<li>${obj[key].employee_id}</li>`
            }
            list.innerHTML = str;
        }
        else
        {
            console.log("Some error occured");
        }
    }
    // send request
    xhr.send();
    console.log("done fetching Employee");
}