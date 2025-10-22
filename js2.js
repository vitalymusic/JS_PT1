// Cikli
let iteracija = 0;


while(iteracija < 10){
    if(iteracija==5){
        iteracija ++;
        continue;
    }
    if(iteracija==8){
            break;
    }
    document.write("Iterācijas skaitlis: "+(iteracija+1)+"<br>");
    iteracija ++;
}

let y = 50;
do{
    console.log("Iterācija "+ y);
    y-=5;
}
while(y>0);


for(let z=0;z<10;z++){
    document.body.innerHTML += `<img src="attels${z+1}.jpg" alt="attels${z+1}">`;
}

let months = [
    
    {
        nosaukums:"Janvāris",
        apsraksts:"ļoti auksti",
        attels:"janvaris.png"
    },
    {
        nosaukums:"Februāris",
        apsraksts:"vēl aukstāk",
        attels:"februāris.png"
    },
     {
        nosaukums:"Marts",
        apsraksts:"ir cerība",
        attels:"marts.png"
    },
     {
        nosaukums:"Aprīlis",
        apsraksts:"Nu jau cita lieta",
        attels:"aprilis.png"
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


months.forEach(function(menesis,numurs,arr){
        document.body.innerHTML +=`
            <div class="card">
                <h3>${numurs+1}). ${menesis.nosaukums} </h3>
                <p>${menesis.apsraksts}</p> 
                <img src="${menesis.attels}" width="300px">   
            </div>
        `;
});


// Funkcijas

function manaFunkcija(){
   document.body.innerHTML += 10+15;
}

let manaFunkcija2 = ()=>{
    document.body.innerHTML = 10*15;
    manaFunkcija();
}


// manaFunkcija2();
let rezultats = 0;
function saskaitit(sk1,sk2){

   let rezultats =  sk1+sk2;
   return rezultats+iteracija;
}
console.log(rezultats);
  
function showAlert(dati){
    alert("Jūsu atbilde ir "+dati);
}

// showAlert(saskaitit(123,567));

