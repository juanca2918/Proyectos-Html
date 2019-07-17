/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}

inicializarSlider();

function AjaxReq(urlReq, dataSubmit, controlView="resultado", load=true, callback){
    callback = callback || function(){};
    $.ajax({
      method: "POST"
      ,url: urlReq
      ,data: dataSubmit
    })
      .done(function( rsp) {
        let $control = $( "#" + controlView );
        if(load){
          $control.html( rsp );
        }
        callback(rsp, $control);
      })
      .fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );
      });
}


$(document).ready(()=> {
	var insertOptions = function(rsp, control){ $(control).append(rsp).material_select(); };
    AjaxReq("ListaCiudad.php", {}, "selectCiudad", false, insertOptions);
    AjaxReq("ListaTipos.php", {}, "selectTipo", false, insertOptions);
	$("#mostrarTodos").click(function(){
		$.ajax({
			url:"mostrar.php",
			data:{},
			success: function(data){
		    	$(".itemMostrado").remove();
				$(".colContenido").append(data);
			}
		});
	});
	$("#submitButton").click((event)=>{
    	event.preventDefault();
      	var filtroAply = true;
      	var filtroCiudad = $("#selectCiudad").val();
      	var filtroTipo = $("#selectTipo").val();
      	var filtroPrecioIni = $("#rangoPrecio").val().split(";")[0];
      	var filtroPrecioFin = $("#rangoPrecio").val().split(";")[1];
      	AjaxReq("buscador.php", {fAply: filtroAply
                                    ,fCiudad: filtroCiudad
                                    ,fTipo: filtroTipo
                                    ,fPrecioIni: filtroPrecioIni
                                    ,fPrecioFin: filtroPrecioFin
                                  });
    });
})
