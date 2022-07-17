let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
// btn.addEventListener('mousedown',func2);
btn.addEventListener('dblclick',func3);


function func1(){
    console.log('Thanks');
}

function func2()
{
    console.log('Thanks for mousedown');
}

function func3()
{
    console.log('Thanks for double click');
}

document.querySelector('.red').addEventListener('mousemove',function func4() {
    console.log('It is a red class');
    document.body.style.color = 'red'
    document.body.style.backgroundColor = `rgb(15,15,15)`
})

document.querySelector('#h').addEventListener('mouseleave',function func5() {
    console.log('You leave hello');
})