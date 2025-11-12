// Elementu izveide ar JS


let picturesDiv = document.createElement('div');




let headingJS = document.createElement('h3');
headingJS.innerText = "Attēlu galerija";


// Pievienosim formas elementu
let picCountInput = document.createElement('input');
picCountInput.type = "number";
picCountInput.name = "picCount";
let picInputButton = document.createElement('button');

picInputButton.innerText = "Pievienot bildes";



picturesDiv.appendChild(headingJS);
picturesDiv.appendChild(picCountInput);
picturesDiv.appendChild(picInputButton);

picInputButton.onclick = function () {
    picCount = picCountInput.value;
    addPictures(picCount);


}


function addPictures(count) {
    let imagesJS = [];
        for(image of picturesDiv.querySelectorAll('.image')){
            image.remove();
        }    

    for (let y = 0; y < count; y++) {
        imagesJS.push(document.createElement('img'));
    }



    for (imageJS of imagesJS) {
        let picId = Math.trunc(Math.random() * 200);
        imageJS.classList.add('image');
        imageJS.style.width = "200px";
        imageJS.style.height = "200px";
        imageJS.src = `https://picsum.photos/id/${picId}/200/200`;
        picturesDiv.appendChild(imageJS);
    }

}

// document.body.appendChild(picturesDiv);


 let elem1 = document.querySelector('table+img');
    console.log(elem1);

elem1.insertAdjacentElement('afterend',picturesDiv);


// for(let y = 0;y<10;y++){
//     console.log(y);
//     picturesDiv.appendChild(imageJS);
// }



// BOM - Browser Object Model


console.log(window.history);
//  history.back();
// history.forward();

setTimeout(()=>{
    // alert("Reklāmas banneris");
},5000);
hue = 0;
setInterval(()=>{
    hue+=5;
    document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    
},5000);

setTimeout(()=>{
    // location.replace("https://ss.com");
},5000);

let milisec = 1000 * 3600 * 24 * 7*30;
localStorage.setItem("background","red");
// document.cookie = "language=lv;max-age="+milisec;
document.cookie = "language=lv;max-age=0";

// window.location.reload();


window.onscroll = (e)=>{
    // window.scrollTo(0,450);    
    console.log(screenY,screenX);
    console.log(window.scrollY);

    

}
document.body.ondblclick = function(){
    window.open("test.html","","left=400,top=400,width=500,height=500","popup");
}




