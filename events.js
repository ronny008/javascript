function popup()
{
    alert("you have cliked me!!")
}
    
var btn=document.getElementById("btn")
btn.addEventListener("click",function(){

        btn.textContent="changed"

})

var id1=document.getElementById("id1")
function changeColor(){
    id1.style.backgroundColor="green"
}
function hide()
{

    id1.style.backgroundColor="white"
}

    


