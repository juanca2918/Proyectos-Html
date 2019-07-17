<?php
try
{
  $data = file_get_contents("data-1.json");
  $propiedades = json_decode($data);
  $ciudades = [];
  foreach ($propiedades as $key => $json) {
    $ciudades[] = $json->Ciudad;
  }
  $ciudades = array_unique($ciudades);
  $ciudadesOpt = "";
  foreach ($ciudades as $ciudad) {
    $ciudadesOpt .= "<option value=\"$ciudad\">$ciudad</option>";
  }
  echo $ciudadesOpt;
}
catch(Exception $ex)
{
  echo $ex->getMessage();
}

?>