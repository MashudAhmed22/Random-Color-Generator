
//for making random background-color 
// const getColor=()=>{
//     const randomColor=Math.floor(Math.random()*16777215);
//     const tostring="#"+randomColor.toString(16);
//     document.body.style.backgroundColor=tostring;
//     colorId.innerHTML=tostring;
//     console.log(randomColor,tostring);
//     navigator.clipboard.writeText(tostring)
// }
// document.getElementById("btn").addEventListener("click",getColor);
// window.onload=getColor;



let textBox=document.getElementById("text-box");
let colorId=document.getElementById("colorId");
const getColor=() =>{
    let randomColor=Math.floor(Math.random()*16777215);
    let tostring="#"+randomColor.toString(16);
    textBox.style.backgroundColor=tostring;
    colorId.innerText=tostring;
    console.log(randomColor,tostring);
    textBox.style.transform="scale(1.5)";
    setTimeout(function(){
        textBox.style.transform="scale(1)";
    },300);
}

document.getElementById("btn").addEventListener("click",getColor)
window.onload=getColor;