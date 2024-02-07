//document.getElementById("count").innerText=5

let count=0
let countEl=document.getElementById("count-el");
let saveEl= document.getElementById("save-el")

function increment(){
    count+=1;
    countEl.innerText=count
}

function save(){
    let countStr= count + " - "
    saveEl.textContent += countStr
    countEl.tectContent=0
    count=0
   
}





