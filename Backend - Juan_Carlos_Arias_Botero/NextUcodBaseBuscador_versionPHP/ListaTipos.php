<?php
try
{
  $data = file_get_contents("data-1.json");
  $inmuebles = json_decode($data);
  $tipos = [];
  foreach ($inmuebles as $key => $json) {
    $tipos[] = $json->Tipo;
  }
  $tipos = array_unique($tipos);
  $tiposOpt = "";
  foreach ($tipos as $tipo) {
    $tiposOpt .= "<option value=\"$tipo\">$tipo</option>";
  }
  echo $tiposOpt;
}
catch(Exception $ex)
{
  echo $ex->getMessage();
}


?>