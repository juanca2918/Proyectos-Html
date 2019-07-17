<?php
	$data = file_get_contents("data-1.json");
	$propiedades = json_decode($data, true);
	
	foreach ( $propiedades as $prop ) {
		$estructura = "<div class='itemMostrado card'>";
		$estructura .="<img src='img/home.jpg' alt='Demo'>";
		$estructura .="<div class='card-stacked'>";
		$estructura .="<strong>Dirección: </strong>".$prop["Direccion"]."</br>";
		$estructura .="<strong>Ciudad: </strong>".$prop["Ciudad"]."</br>";
		$estructura .="<strong>Teléfono: </strong>".$prop["Telefono"]."</br>";
		$estructura .="<strong>Código Postal: </strong>".$prop["Codigo_Postal"]."</br>";
		$estructura .="<strong>Tipo: </strong>".$prop["Tipo"]."</br>";
		$estructura .="<strong>Precio: </strong><span class='precioTexto'>".$prop["Precio"]."</span></br>";
		$estructura .="<div class='card-action'>VENTAS</div>";
		$estructura .="</div>";
		$estructura .= "</div>";
		echo $estructura;
	}


?>	