const form = document.getElementById('myform');
const res = document.getElementById("result")
const User = document.getElementById("user");
form.addEventListener("submit", e=> {
    e.preventDefault();
})
User.addEventListener("keyup", ()=>{
    res.textContent= `${User.value}`
})