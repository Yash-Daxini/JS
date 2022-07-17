let headingSC1 = document.getElementById('headingSC1');

let headingSC2 = document.getElementById('headingSC2');

let tableDiv = document.getElementById('tableDiv');

let table1Div = document.getElementById('table1Div');

let table2Div = document.getElementById('table2Div');

let btn = document.querySelectorAll('.btncalc');

let display = document.getElementById('text');

table1Div.style.display = 'block';

display.style.border = '2px solid black';

let str = "";
for (const element of btn) {
    element.addEventListener('click', () => {

        if (element.innerText == 'X') {
            element.innerText = '*'
            str += element.innerText;
            display.value = str;
        }
        else if (element.innerText == '⟵') {
            str = str.slice(0, str.length - 1);
            display.value = str;
        }

        else if (element.innerText == '=') {
            if(str.includes('π')) {
                index = str.indexOf('π');
                str = str.replace(str.substring(index, index + 1), Math.PI);
                console.log(str);
                
            }
            if(str.includes('e')) {
                index = str.indexOf('e');
                str = str.replace(str.substring(index, index + 1), Math.E);
                console.log(str);
            }
            if (str.includes("sin(")) {
                index = str.indexOf("sin(");
                c = (str.substring(index + 4 , str.indexOf(')',index+1)));
                str = Math.sin(eval(c)).toFixed(9);
                display.value = str;
            }
            if (str.includes("cos(")) {
                index = str.indexOf("cos(");
                c = (str.substring(index + 4 , str.indexOf(')',index+1)));
                str = Math.cos(eval(c)).toFixed(9);
                display.value = str;
            }
            if (str.includes("tan(")) {
                index = str.indexOf("tan(");
                c = (str.substring(index + 4 , str.indexOf(')',index+1)));
                str = Math.tan(eval(c)).toFixed(9);
                display.value = str;
            }
            else if (str.substring(0, 3) == "sin" && str.includes("^-1")) {
                if (str.charAt(7) == 'π') {
                    var c = Math.PI + "";
                }
                else {
                    var c = str.charAt(7) + "";
                }

                c += (str.substring(8, str.length-1));

                str = Math.asin(eval(c)).toFixed(9);
                display.value = str;
            }
            else if (str.substring(0, 3) == "cos" && str.includes("^-1")) {
                if (str.charAt(7) == 'π') {
                    var c = Math.PI + "";
                }
                else {
                    var c = str.charAt(7) + "";
                }

                c += (str.substring(8, str.length-1));

                str = Math.acos(eval(c)).toFixed(9);
                display.value = str;
            }
            else if (str.substring(0, 3) == "tan" && str.includes("^-1")) {
                if (str.charAt(7) == 'π') {
                    var c = Math.PI + "";
                }
                else {
                    var c = str.charAt(7) + "";
                }

                c += (str.substring(8, str.length-1));

                str = Math.atan(eval(c)).toFixed(9);
                display.value = str;
            }
            else if (str.includes('^')) {
                index = str.indexOf('^');
                str = Math.pow(str.substring(0, index), str.substring(index + 1, str.length));
                display.value = str;
            }
            else if (str.substring(0, 2) == 'ln') {
                c = (str.substring(3, str.length-1));
                
                str = Math.log(eval(c)).toFixed(9);
                display.value = str;
            }
            else if (str.substring(0, 3) == 'log') {
                c = (str.substring(4, str.length-1));
                
                str = Math.log10(eval(c)).toFixed(9);
                display.value = str;
            }
            else {
                display.value = eval(str);
                str = display.value;
            }

        }
        else if (element.innerHTML == 'x<sup>y</sup>') {
            str += '^';
            display.value = str;
        }
        else if (element.innerHTML == 'x<sup>2</sup>') {
            str += `^2`;
            display.value = str;
        }
        else if (element.innerHTML == 'x<sup>3</sup>') {
            str += `^3`;
            display.value = str;
        }
        else if (element.innerHTML == '√') {
            str += `^0.5`;
            display.value = str;
        }
        else if (element.innerHTML == 'sin<sup>-1</sup>') {
            str += `sin^-1`;
            display.value = str;
        }
        else if (element.innerHTML == 'cos<sup>-1</sup>') {
            str += `cos^-1`;
            display.value = str;
        }
        else if (element.innerHTML == 'tan<sup>-1</sup>') {
            str += `tan^-1`;
            display.value = str;
        }
        else if (element.innerText == 'C') {
            str = "";
            display.value = str;
        }
        else if (element.innerText == 'D') {
            let body = document.querySelector('body');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            Array.from(btn).forEach(element => {
                if (element.innerHTML != '=' && element.id != 'headingSC1' && element.id != 'headingSC2') {
                    element.classList.add('btn-outline-warning');
                    element.classList.remove('btn-outline-primary');
                }
            });
            document.getElementById('modeBtn1').innerHTML = 'L';
            document.getElementById('modeBtn2').innerHTML = 'L';
            element.innerText = 'L';
        }
        else if (element.innerText == 'L') {
            let body = document.querySelector('body');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            Array.from(btn).forEach(element => {
                if (element.innerHTML != '=' && element.id != 'headingSC1' && element.id != 'headingSC2') {
                    element.classList.remove('btn-outline-warning');
                    element.classList.add('btn-outline-primary');
                }
            });
            document.getElementById('modeBtn1').innerHTML = 'D';
            document.getElementById('modeBtn2').innerHTML = 'D';
            element.innerText = 'D';
        }
        else {
            str += element.innerText;
            display.value = str;
        }
    })
}

let headingDiv = document.getElementById('headingDiv');
headingSC1.addEventListener('click', () => {
    table1Div.style.display = 'none';
    table2Div.style.display = 'block';
    headingDiv.innerHTML = "";
    display.style.width = '700px';

});

headingSC2.addEventListener('click', () => {
    table1Div.style.display = 'block';
    table2Div.style.display = 'none';
    headingDiv.innerHTML = "<h1>Basic Calculator</h1>";
    display.style.width = '500px';
});