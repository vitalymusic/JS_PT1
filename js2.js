// Cikli
let iteracija = 0;


while (iteracija < 10) {
    if (iteracija == 5) {
        iteracija++;
        continue;
    }
    if (iteracija == 8) {
        break;
    }
    document.write("Iterācijas skaitlis: " + (iteracija + 1) + "<br>");
    iteracija++;
}

let y = 50;
do {
    // console.log("Iterācija "+ y);
    y -= 5;
}
while (y > 0);


for (let z = 0; z < 10; z++) {
    // document.body.innerHTML += `<img src="attels${z+1}.jpg" alt="attels${z+1}">`;
}

let months = [

    {
        nosaukums: "Janvāris",
        apsraksts: "ļoti auksti",
        attels: "janvaris.png"
    },
    {
        nosaukums: "Februāris",
        apsraksts: "vēl aukstāk",
        attels: "februāris.png"
    },
    {
        nosaukums: "Marts",
        apsraksts: "ir cerība",
        attels: "marts.png"
    },
    {
        nosaukums: "Aprīlis",
        apsraksts: "Nu jau cita lieta",
        attels: "aprilis.png"
    }
];

// for(menesis of months){
//         document.body.innerHTML +=`
//             <div class="card">
//                 <h3>${menesis.nosaukums}</h3>
//                 <p>${menesis.apsraksts}</p> 
//                 <img src="${menesis.attels}" width="300px">   
//             </div>
//         `;
// }


// months.forEach(function(menesis,numurs,arr){
//         document.body.innerHTML +=`
//             <div class="card">
//                 <h3>${numurs+1}). ${menesis.nosaukums} </h3>
//                 <p>${menesis.apsraksts}</p> 
//                 <img src="${menesis.attels}" width="300px">   
//             </div>
//         `;
// });


// Funkcijas

function manaFunkcija() {
    document.body.innerHTML += 10 + 15;
}

let manaFunkcija2 = () => {
    document.body.innerHTML = 10 * 15;
    manaFunkcija();
}


// manaFunkcija2();
let rezultats = 0;
function saskaitit(sk1, sk2) {

    let rezultats = sk1 + sk2;
    return rezultats + iteracija;
}
console.log(rezultats);

function showAlert(dati) {
    alert("Jūsu atbilde ir " + dati);
}

// showAlert(saskaitit(123,567));

// function poga(){
//     console.log(this);
// }
// let poga =  (e)=>{
//     console.log(e);
// }



// Masīvi

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr1.push("Jauns elements");

arr1.pop();

arr1.shift();
arr1.unshift("jauns elements");

let result = arr1.slice(2, 4);

result = arr1.concat(arr2);
// result = {...arr1}
let result2 = result.map(function (item) {
    return item * 5;
});

result2 = result.sort();
result3 = result.sort(function (a, b) {
    return a - b;
});
//Sakārtot slaitliskās vērtības

result3 = result.find(function (item) {
    return item <= 5;
});
result3 = result.findIndex(function (item) {
    return item > "3";
});

// console.log(result);
// result3 = result.length;

result3 = result.filter(function (item) {
    return item == "jauns elements";
});
result3 = result.reverse();

// splice()
result3 = result.splice(4, 1, "May");

// console.log(result2);
// console.log(result3);



// Datumi

console.log(Date.now()); //Milisekundes no 1970.gada 01,janvāra 00:00;

function laiks() {
    let datums = new Date();
    let datumsPecNedeļas = new Date(Date.now() + (1000 * 3600 * 24 * 7));

    let datums3 = new Date("2025-10-5");

    console.log(datums);
    console.log(datums3.getMilliseconds());

    let datumi = {
        šodien: {
            diena: datums.getDate(),
            menesis: datums.getMonth() + 1,
            gads: datums.getFullYear(),
            stundas: datums.getHours()
        },
        pēcNedēļas: {
            diena: datumsPecNedeļas.getDate(),
            menesis: datumsPecNedeļas.getMonth() + 1,
            gads: datumsPecNedeļas.getFullYear(),
            stundas: datumsPecNedeļas.getHours()
        }
    }

     document.body.innerHTML = "";

    document.body.innerHTML += `Šodien ir: ${datumi.šodien.diena < 10 ? "0" + datumi.šodien.diena : datumi.šodien.diena}.${datumi.šodien.menesis}.${datumi.šodien.gads}`;
    document.body.innerHTML += "<br>";
    document.body.innerHTML += `Pēc nedēļas būs: ${datumi.pēcNedēļas.diena < 10 ? "0" + datumi.pēcNedēļas.diena : datumi.pēcNedēļas.diena}.${datumi.pēcNedēļas.menesis}.${datumi.pēcNedēļas.gads}`;
}

laiks();
setInterval(()=>{laiks()},1000*60*60);
setTimeout(()=>{
    alert("labrīt");
},5000)