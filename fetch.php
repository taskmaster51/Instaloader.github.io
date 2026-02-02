<?php
header('Content-Type: application/json');

if(!isset($_POST['url'])){
  echo json_encode(["status"=>false]);
  exit;
}

$url = urlencode($_POST['url']);

/*
Demo API (replace with premium API for stability)
*/
$api = "https://api.videodownloaderapi.com/instagram?url=".$url;

$response = @file_get_contents($api);
$data = json_decode($response,true);

if(isset($data['download_url'])){
  echo json_encode([
    "status"=>true,
    "link"=>$data['download_url']
  ]);
}else{
  echo json_encode(["status"=>false]);
}