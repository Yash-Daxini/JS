let name = 'abclet';
let surname='def';
console.log(name+' '+surname);

let h;
h="<h1>Heading</h1>"+"<p>para";
h=h.concat('</p','>');
console.log(h);
console.log(h.length);
console.log(h.toLowerCase());
console.log(h.toUpperCase());
console.log(h);
console.log(h.indexOf('1'));
console.log(h.lastIndexOf('<'));
console.log(h.charAt(2));
console.log(h.endsWith('>'));
console.log(h.includes('h'));
console.log(h.substring(0,4));
console.log(h.slice(0,4));
console.log(h.split('h'));
console.log(h.replace('1','2'));

let fruit1=`orange\n`;
let fruit2='apple';
let myhtml=`hello ${name}
            <h1>hello</h1>
            <p>fruit1 is ${fruit1} and fruit2 is ${fruit2}</p>`;
            // console.log(myhtml);
            document.body.innerHTML=myhtml;

