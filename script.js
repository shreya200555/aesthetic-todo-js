document.addEventListener("DOMContentLoaded", ()=>{


let grab_text=document.getElementById("text-box")
let grab_btn=document.getElementById("btn")
let list=document.getElementById("l-list")
grab_text.addEventListener("keyup", (event)=>{
    if(event.key=="Enter"){
        addTask();
    }

})
function addTask(){
    const text=grab_text.value.trim();
    if(text==""){
        return;
    }
    const li=document.createElement("li")
    const checkbox=document.createElement("input")
    checkbox.type="checkbox"

    const span=document.createElement("span")
    span.textContent=text

    checkbox.addEventListener("change", ()=>{
        span.classList.toggle("completed")
    })

    li.appendChild(checkbox)
    li.appendChild(span)
    list.appendChild(li)

    grab_text.value=" ";
}

grab_btn.addEventListener("click", ()=>{
    list.innerHTML="";
})
})
