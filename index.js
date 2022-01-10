

function changed() {
    var x = document.getElementById("txtInsert").value;
    document.getElementById("demo").innerHTML = x;
    alert("Please read the Descripton หากไม่สามารถhover(เอาmouseไปวาง)ได้ กรุณาลองเปิดบน PC/Notebook หรือแสกน QR code ในส่วนของcode แล้วลองอ่านในไฟล์README.md");
}

let text = document.getElementById("txtInsert").value;
let length = text.length;

console.log(length);



var vardelay = getComputedStyle(document.documentElement)    
    console.log( vardelay.getPropertyValue('--delay'));






    