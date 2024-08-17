function gets(){
var weight=0;
var earth=9.8;
weight=prompt("Enter your weight");
document.getElementById("ans").innerHTML=weight;
var sun=weight/(earth/274);
document.getElementById("Sun").innerHTML=parseFloat(sun).toFixed(1);
var mercury=weight/(earth/3.7);
document.getElementById("Mercury").innerHTML=parseFloat(mercury).toFixed(1);
var venus=weight/(earth/8.9);
document.getElementById("Venus").innerHTML=parseFloat(venus).toFixed(1);
var moon=weight/(earth/1.6);
document.getElementById("Moon").innerHTML=parseFloat(moon).toFixed(1);
var mars=weight/(earth/3.7);
document.getElementById("Mars").innerHTML=parseFloat(mars).toFixed(1);
var jupiter=weight/(earth/24.8);
document.getElementById("Jupiter").innerHTML=parseFloat(jupiter).toFixed(1);
var saturn=weight/(earth/10.4);
document.getElementById("Saturn").innerHTML=parseFloat(saturn).toFixed(1);
var uranus=weight/(earth/8.9);
document.getElementById("Uranus").innerHTML=parseFloat(uranus).toFixed(1);
var neptune=weight/(earth/11.2);
document.getElementById("Neptune").innerHTML=parseFloat(neptune).toFixed(1);
var pluto=weight/(earth/0.6);
document.getElementById("Pluto").innerHTML=parseFloat(pluto).toFixed(1);
}