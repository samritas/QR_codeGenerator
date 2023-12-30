var inputQR=document.getElementById("inputQR") 
var QRimg=document.getElementById("QRimg") 
var QRgenerator=document.getElementById("QRgenerator")
function generatQR(){
    QRimg.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputQR.value;
} 
QRgenerator.onclick=generatQR;