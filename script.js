var head=document.getElementById("head1");
console.log(head);
head.style.color="blue";
head.textContent="text content";
head.innerHTML="<h6>changed in to h6"
var c=document.getElementsByClassName("list");
for(let i=0;i<c.length;i++)
{
    c[i].style.backgroundColor="yellow";
}

var t=document.getElementsByTagName("li");
t[1].style.color="red"


//using query selector
let val=document.querySelector("input");
val.value="name"
//queryselector using id
var savebtm=document.querySelector("#savebtm");
savebtm.style.backgroundColor="green";