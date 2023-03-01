const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(h1);

console.log({
    h1,p,parrafito,pid,input
});

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";
// console.log(h1.getAttribute("class"));
// h1.setAttribute("class","rojo");

h1.classList.add("rojo");
h1.classList.remove("verde");
// h1.classList.toggle("verde");
// h1.classList.contains("verde");
input.value="456";

const img = document.createElement("img");
img.setAttribute("src","https://images.pexels.com/photos/11662238/pexels-photo-11662238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
console.log(img);
pid.innerHTML="";
pid.append(img);