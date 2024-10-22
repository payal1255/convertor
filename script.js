function convert(){
var convert=document.getElementById("convert");
var num=document.getElementById("number");

console.log(num.value)



var dol=document.getElementById("dol");
dol.innerHTML= num.value*0.012; 


var pon=document.getElementById("pon");
pon.innerHTML= num.value*0.0091; 

var eur=document.getElementById("eur");
eur.innerHTML= num.value*0.011; 

var pakistan=document.getElementById("pakistan")
pakistan.innerHTML=num.value*3.30;

}









