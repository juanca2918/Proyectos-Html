<?php

$data = file_get_contents("data-1.json");
$propiedades = json_decode($data);
$filtroAply = (isset($_POST["fAply"]) && boolval($_POST["fAply"]));
$filtroCiudad = $_POST["fCiudad"];
$filtroTipo = $_POST["fTipo"];
$filtroPrecioIni = $_POST["fPrecioIni"];
$filtroPrecioFin = $_POST["fPrecioFin"];
$matchCiudad = true;
$matchTipo = true;
$matchPrecio = true;

try {
	foreach($propiedades as $key => $json) {
		$precio = str_ireplace(["$",","], "", $json->Precio);
		$precio = intval($precio);
		$ciudadf = str_ireplace(["$",","], "", $json->Ciudad);
		$tipof= str_ireplace(["$",","], "", $json->Tipo);
		$matchPrecio = ($precio >= intval($filtroPrecioIni) && $precio <= intval($filtroPrecioFin));
		if($filtroAply){
			$matchCiudad =  ($ciudadf==$filtroCiudad || $filtroCiudad=="" || (!empty($filtroCiudad) && $json->Ciudad == $filtroCiudad));
			$matchTipo = ($tipof==$filtroTipo || $filtroTipo=="" || (!empty($filtroTipo) && ($json->Tipo == $filtroTipo)));
		}
		if($filtroAply && !($matchCiudad && $matchTipo && $matchPrecio)){
			continue;
		}
?>
 <div class="row">
   <div class="col m12">
      <div class="card horizontal itemMostrado">
        <img src="img/home.jpg">
        <div class="card-stacked">
          <div class="card-content">
            <?php
              foreach($json as $keyProp => $prop){
                $class = ($keyProp=="Precio") ? 'class="precioTexto"' : null;
                if($keyProp=="Id"){ continue; }
                echo "<p><strong>$keyProp:</strong> <span $class>$prop</span><p>";
              }
             ?>
          </div>
          <div class="card-action">
            <a href="#" class="precioTexto">VER MÁS</a>
          </div>
        </div>
      </div>
    </div>
 </div>
<?php
  }
}catch (Exception $e) {
  echo $e->getMessage();
}
?>
