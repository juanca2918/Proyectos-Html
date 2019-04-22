
var suma=document.getElementById('mas'),
    resta=document.getElementById('menos'),
    mult=document.getElementById('por'),
    dividir=document.getElementById('dividido'),
    pantalla=document.getElementById('display'),
    cero=document.getElementById('0'),
    uno=document.getElementById('1'),
    dos=document.getElementById('2'),
    tres=document.getElementById('3'),
    cuatro=document.getElementById('4'),
    cinco=document.getElementById('5'),
    seis=document.getElementById('6'),
    siete=document.getElementById('7'),
    ocho=document.getElementById('8'),
    nueve=document.getElementById('9'),
    on=document.getElementById('on'),
    igual=document.getElementById('igual'),
    signo=document.getElementById('sign'),
    punto=document.getElementById('punto'),
    num1,num2,total,simbO;

//FUNCIONES DE LA CALCULADORA
function PantallaImpr() {
  num1=0,num2=0,total=0,simbO='';
  on.addEventListener('mousedown',function(){
    pantalla.innerHTML='0';
    on.setAttribute("style","transform:scale(0.85,0.85)");
  })
  on.addEventListener('mouseup',function(){
    on.setAttribute("style","transform:scale(1,1)")
  })
  punto.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML=pantalla.innerHTML+',';
    }else if (pantalla.innerHTML!='0,' && pantalla.innerHTML==',,'){
      pantalla.innerHTML=pantalla.innerHTML+',';
    }
    punto.setAttribute("style","transform:scale(0.85,0.85)");
  })
  punto.addEventListener('mouseup',function(){
    punto.setAttribute("style","transform:scale(1,1)")
  })
  cero.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='0';
    }else {
      if (pantalla.innerHTML.length<=7) {
        pantalla.innerHTML=pantalla.innerHTML+'0';
      }
    }
    cero.setAttribute("style","transform:scale(0.85,0.85)");
  })
  cero.addEventListener('mouseup',function(){
    cero.setAttribute("style","transform:scale(1,1)")
  })
  uno.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='1';
    }else {
      if (pantalla.innerHTML.length<=7) {
        pantalla.innerHTML=pantalla.innerHTML+'1';
      }
    }
    uno.setAttribute("style","transform:scale(0.85,0.85)");
  })
  uno.addEventListener('mouseup',function(){
    uno.setAttribute("style","transform:scale(1,1)")
  })
  dos.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='2';
    }else {
      if (pantalla.innerHTML.length<=7) {
        pantalla.innerHTML=pantalla.innerHTML+'2';
      }
    }
    dos.setAttribute("style","transform:scale(0.85,0.85)");
  })
  dos.addEventListener('mouseup',function(){
    dos.setAttribute("style","transform:scale(1,1)")
  })
  tres.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='3';
    }else {
      if (pantalla.innerHTML.length<=7) {
        pantalla.innerHTML=pantalla.innerHTML+'3';
      }
    }
    tres.setAttribute("style","transform:scale(0.85,0.85)");
  })
  tres.addEventListener('mouseup',function(){
    tres.setAttribute("style","transform:scale(1,1)")
  })
  cuatro.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='4';
    }else {
      if (pantalla.innerHTML.length<=7) {
        pantalla.innerHTML=pantalla.innerHTML+'4';
      }
    }
    cuatro.setAttribute("style","transform:scale(0.85,0.85)");
  })
  cuatro.addEventListener('mouseup',function(){
    cuatro.setAttribute("style","transform:scale(1,1)")
  })
  cinco.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='5';
    }else {
      if (pantalla.innerHTML.length<=7) {
        pantalla.innerHTML=pantalla.innerHTML+'5';
      }
    }
    cinco.setAttribute("style","transform:scale(0.85,0.85)");
  })
  cinco.addEventListener('mouseup',function(){
    cinco.setAttribute("style","transform:scale(1,1)")
  })
  seis.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='6';
    }else {
      if (pantalla.innerHTML.length<=7) {
        pantalla.innerHTML=pantalla.innerHTML+'6';
      }
    }
    seis.setAttribute("style","transform:scale(0.85,0.85)");
  })
  seis.addEventListener('mouseup',function(){
    seis.setAttribute("style","transform:scale(1,1)")
  })
  siete.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='7';
    }else {
      if (pantalla.innerHTML.length<=7) {
        pantalla.innerHTML=pantalla.innerHTML+'7';
      }
    }
    siete.setAttribute("style","transform:scale(0.85,0.85)");
  })
  siete.addEventListener('mouseup',function(){
    siete.setAttribute("style","transform:scale(1,1)")
  })
  ocho.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='8';
    }else {
      if (pantalla.innerHTML.length<=7) {
        pantalla.innerHTML=pantalla.innerHTML+'8';
      }
    }
    ocho.setAttribute("style","transform:scale(0.85,0.85)");
  })
  ocho.addEventListener('mouseup',function(){
    ocho.setAttribute("style","transform:scale(1,1)")
  })
  nueve.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='9';
    }else {
      if (pantalla.innerHTML.length<=7) {
        pantalla.innerHTML=pantalla.innerHTML+'9';
      }
    }
    nueve.setAttribute("style","transform:scale(0.85,0.85)");
  })
  nueve.addEventListener('mouseup',function(){
    nueve.setAttribute("style","transform:scale(1,1)")
  })
  suma.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='0';
    }else {
      num1=pantalla.innerHTML;
      pantalla.innerHTML='';
      simbO='+';
    }
    suma.setAttribute("style","transform:scale(0.85,0.85)");
  })
  suma.addEventListener('mouseup',function(){
    suma.setAttribute("style","transform:scale(1,1)")
  })
  resta.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='0';
    }else {
      num1=pantalla.innerHTML;
      pantalla.innerHTML='';
      simbO='-';
    }
    resta.setAttribute("style","transform:scale(0.85,0.85)");
  })
  resta.addEventListener('mouseup',function(){
    resta.setAttribute("style","transform:scale(1,1)")
  })
  mult.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='0';
    }else {
      num1=pantalla.innerHTML;
      pantalla.innerHTML='';
      simbO='*';
    }
    mult.setAttribute("style","transform:scale(0.85,0.85)");
  })
  mult.addEventListener('mouseup',function(){
    mult.setAttribute("style","transform:scale(1,1)")
  })
  dividir.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='0';
    }else {
      num1=pantalla.innerHTML;
      pantalla.innerHTML='';
      simbO='/';
    }
    dividir.setAttribute("style","transform:scale(0.85,0.85)");
  })
  dividir.addEventListener('mouseup',function(){
    dividir.setAttribute("style","transform:scale(1,1)")
  })
  igual.addEventListener('mousedown',function() {
    num2=pantalla.innerHTML;
    operacion(num1,num2);
    igual.setAttribute("style","transform:scale(0.85,0.85)");
  })
  igual.addEventListener('mouseup',function(){
    igual.setAttribute("style","transform:scale(1,1)")
  })
  signo.addEventListener('mousedown',function(){
    if (pantalla.innerHTML=='0') {
      pantalla.innerHTML='0';
    }else {
      pantalla.innerHTML*=-1;
    }
    signo.setAttribute("style","transform:scale(0.85,0.85)");
  })
  signo.addEventListener('mouseup',function(){
    signo.setAttribute("style","transform:scale(1,1)")
  })
  function operacion(n1,n2) {
    n1=parseFloat(n1);
    n2=parseFloat(n2);
    if(simbO=='+'){
      total=n1+n2;
    } else if (simbO=='-') {
      total=n1-n2;
    } else if (simbO=='*') {
      total=n1*n2;
    } else if (simbO=='/') {
      total=n1/n2;
    }
    if (pantalla.innerHTML.length<=7) {
      return pantalla.innerHTML=total;
    }
  }
}

PantallaImpr();
