//  alert("Hello Javascript");

// Datu izvade un ievade 
//  console.log("tests");
//  document.write("tests");
//  prompt("Uzraksti savu vārdu");
//  confirm("Vai tiešām???");   

// Vienkāršie datu tipi

const myNumber1 = 123;
let myNumber2 = 123.45;
let myText1 = "teksts 1";
let myText2 = '<h1 style="font-size:5rem">teksts 2</h1>';
let mytext3 = `<h2 style="font-size:3rem">${myNumber1}</h2>`;

let bool1 = true;
let bool2 = false;

// Saliktie datu tipi
let arr1 = [myNumber1,myText2,["balts","melns",[]]];

let obj1 = {
    istabas:4,
    adrese:"Rīga, Brīvības 130",
    cena:85000,
    sasveicinaties:function(){
        alert("Hello");
    },
    klienti:["Klients1","Klients 2"]
    // JSON
};

myText1 = "Izmainīts teksts";
myText2 = "Izmainīts teksts";
obj1.istabas = 3;
// myNumber1 = 321;

// document.write(mytext3,`<h3>${obj1.adrese}</h3>`,arr1[1]);


let skaitlis = Number(prompt("Ievadi jebkuru skaitli"));
document.write("<h1>",skaitlis.toFixed(2),"</h1>");
// Mat operatori: +,-,*,/,%,**, ^, += -=,*=,/=, ++, --
// Salīdzināšana: >,<,>=,<=, ==, ===,   

// Ģenerē skaitli no 0 līdz 10
console.log(Math.trunc(Math.random() * 10));


let vards = prompt("Ievadi savu vārdu");
if(vards.length < 5){
    document.write('Tu neesi ievadījis savu vārdu');
}

// String 


