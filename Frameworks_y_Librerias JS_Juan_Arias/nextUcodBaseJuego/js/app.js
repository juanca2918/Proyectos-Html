$(document).ready(function() {
  $("div.main-container>h1.main-titulo").mouseenter(function() {
    $(this).css("color","blue");
  });

  $("div.main-container>h1.main-titulo").mouseout(function() {
    $(this).css("color","yellow");
  });
  var state=true;
  $(".btn-reinicio").on("click",function(){
      if (state) {
        ImgAleatorias();
        ImgLiving();
        $(this).html("Reiniciar");
        state=false;
    }else{
      if (!state) {
        ImgReset();
        $(this).html("Iniciar");
        state=true;
      }
    }
  });
})

//Funcion Reinicio
function ImgReset(){
    $(".imgCol1").remove();
    $(".imgCol2").remove();
    $(".imgCol3").remove();
    $(".imgCol4").remove();
    $(".imgCol5").remove();
    $(".imgCol6").remove();
    $(".imgCol7").remove();
}

//Funcion Draggable and Droopable
function ImgLiving(){
  $(".imgCol1").sortable();
  $(".imgCol2").sortable();
  $(".imgCol3").sortable();
  $(".imgCol4").sortable();
  $(".imgCol5").sortable();
  $(".imgCol6").sortable();
  $(".imgCol7").sortable();
}
//Funcion Agregar Imagenes al tablero del juego
function ImgAleatorias() {
  for (var i = 0; i < 5; i++) {
    var numRandom = Math.floor(Math.random()*4+1);
    $(".col-1").append("<img class='imgCol1' src='image/"+numRandom+".png'>").css("justify-content","flex-start");
  }
  for (var i = 0; i < 5; i++) {
    var numRandom = Math.floor(Math.random()*4+1);
    $(".col-2").append("<img class='imgCol2' src='image/"+numRandom+".png'>").css("justify-content","flex-start");
  }
  for (var i = 0; i < 5; i++) {
    var numRandom = Math.floor(Math.random()*4+1);
    $(".col-3").append("<img class='imgCol3' src='image/"+numRandom+".png'>").css("justify-content","flex-start");
  }
  for (var i = 0; i < 5; i++) {
    var numRandom = Math.floor(Math.random()*4+1);
    $(".col-4").append("<img class='imgCol4' src='image/"+numRandom+".png'>").css("justify-content","flex-start");
  }
  for (var i = 0; i < 5; i++) {
    var numRandom = Math.floor(Math.random()*4+1);
    $(".col-5").append("<img class='imgCol5' src='image/"+numRandom+".png'>").css("justify-content","flex-start");
  }
  for (var i = 0; i < 5; i++) {
    var numRandom = Math.floor(Math.random()*4+1);
    $(".col-6").append("<img class='imgCol6' src='image/"+numRandom+".png'>").css("justify-content","flex-start");
  }
  for (var i = 0; i < 5; i++) {
    var numRandom = Math.floor(Math.random()*4+1);
    $(".col-7").append("<img class='imgCol7' src='image/"+numRandom+".png'>").css("justify-content","flex-start");
  }
}

//$(".col-1").append("<img src='image/"+numRandom+".png'>");
