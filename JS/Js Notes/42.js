let fetchBtn = document.getElementById('fetchBtn');

let content = document.getElementById('content');

fetchBtn.addEventListener('click', postData);

// function getData(){
//     // console.log('Function : starting');
//     url = "42.txt";
//     fetch(url).then((response)=>{
//         // console.log("Inside First Then");
//         return response.text();
//     }).then((data)=>{
//         // console.log("Inside Second Then");
//         content.innerHTML += `<h1>${data}</h1>`;
//         console.log(data);
//     })
// }

// function getData(){
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         data.forEach(element => {
//             content.innerHTML += `<h1>${element.id}</h1>`;
//         });
//         console.log(data);
//     })
// }

function postData() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = { "name": "t55es", "salary": "123", "age": "23" };
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }

    fetch(url, params).then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach(element => {
            content.innerHTML += `<h1>${element.id}</h1>`;
        });
        console.log(data);
    })

}
// getData();
// postData();