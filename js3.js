// 1. Elementu atlase no lapas

let h1 = document.querySelector('h1');
let container = document.querySelector('.container');
let table = document.querySelector('#table');
let paragraphInDIV = document.querySelector('.container p');
let image = document.querySelector('img');
let body = document.body;
let head = document.head;
let title = document.title;

// OldSchool: document.getElementById('table');


// Vairāku elementu atlase
let headings = document.querySelectorAll('h1');
let paragraphs = document.querySelectorAll('p');

// Oldschool: document.getElementsByClassName(); 
// Oldschool: document.getElementsByTagName(); 

console.log(h1,container,table,image,headings,paragraphs,body,title);


// 2. Elementu satura maiņa

// innerHTML, innerText


h1.innerText = "Jauns teksts ar JS";

// Vairāku elementu pārlase
for(heading of headings){
    heading.innerText = "Visiem H1 vienāds teksts";
}

container.innerHTML += `
    <ul>
        <li>Pirmais</li>
        <li>Otrais</li>
        <li>Trešais</li>
    <ul>
`;
let tableData = "";
for(let i=0; i<10;i++){
    tableData+=`
        <tr>
            <td>${i}</td>
            <td>${i}</td>
            <td>${i}</td>
        </tr>    
    `;
}
table.innerHTML = tableData;

// Elementu stila atribūtu maiņa

table.style.border = "1px solid red";
table.style.width = "50%";
table.style.backgroundColor = "#343434";
table.style.display="none";

image.src = "https://picsum.photos/200/300";
image.width=200;

let attelaadrese = image.src;
console.log(attelaadrese, image.width);

for(heading of headings){
    heading.dataset.title = heading.innerText;
    heading.dataset.alternative = "cits teksts";
}

// Elementu ID atribūtu maiņa = attels.id = "";

const months = [
  'janvāris', 'februāris', 'marts', 'aprīlis',
  'maijs', 'jūnijs', 'jūlijs', 'augusts',
  'septembris', 'oktobris', 'novembris', 'decembris'
];

for(menesis of months){
    document.querySelector('.meneshi').innerHTML+=`
        <div>
            <h3>${menesis}</h3>
        </div>    
    `
}


// Elementu klases maiņa
h1.classList.add('red','danger','other');
h1.classList.remove('other');
h1.classList.replace('danger','blue');
h1.onclick = ()=>{
    h1.classList.toggle('blue');
}

// Elementu notikumi

// peles, klaviatūras, Window, formas

image.onclick = ()=>{
    image.style.width="100%"
}
image.ondblclick = ()=>{
    image.style.width=""
}

image.onmouseover = ()=>{
    image.style.cursor = "not-allowed"
}

image.onmouseleave = ()=>{
    image.style.cursor = "pointer";
}


let x = 0;y=0;
// code: 'ArrowRight'
document.body.onkeydown = (e)=>{
    console.log(e);
    if(e.code=="ArrowRight"){
        image.style.transform = `translate(${x+=10}px,${y}px)`;
    }
    if(e.code=="ArrowLeft"){
        image.style.transform = `translate(${x-=10}px,${y}px)`;
    }
    if(e.code=="ArrowUp"){
        image.style.transform = `translate(${x}px,${y-=10}px)`;
    }
    if(e.code=="ArrowDown"){
        image.style.transform = `translate(${x}px,${y+=10}px)`;
    }

}



// Modālais logs
// Accordeon, Tabs, Nav mobile


let dialog = document.querySelector('dialog');

let openDialogBtn = document.querySelector('.openDialog');

let closeDialogBtn = document.querySelector('.closeDialog');

openDialogBtn.onclick = ()=>{
    dialog.showModal();
}
closeDialogBtn.onclick = ()=>{
    dialog.close();
}



// Akordeons

let accBtns = document.querySelectorAll('.acc');
let accParagraphs = document.querySelectorAll('.accordeon p');


for(btn of accBtns){
    btn.onclick = (e)=>{
        for(parag of accParagraphs){
            parag.style.display="none";
        }    

        let currAcc = e.target.dataset.acc;
        document.querySelector('#'+currAcc).style.display="block";
    }
}
accBtns[0].click();