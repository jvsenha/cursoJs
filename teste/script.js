function verifica() { 
    var inp1= document.getElementById('inp1')
    var inp2= document.getElementById('inp2')
    var btn = document.getElementById('btn1')
    if (inp1.value != '' && inp2.value != '' ) {
        btn.style.visibility='visible'; return; } 
 else if(inp1.value == '' || inp2.value == '' ){
    btn.style.visibility='hidden'; 
 }
}