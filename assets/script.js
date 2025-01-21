const input= document.getElementById("input");

input.oninput= () =>{
    const bg=input.value;
    input.parentElement.parentElement.style.backgroundColor=bg;
    
}