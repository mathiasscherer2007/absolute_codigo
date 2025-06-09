<?php

    $diretorio = "./POST/";
    $fExplode = explode(".", $_FILES['arquivo']['name']);
    $extensao = end($fExplode);

    try {
        move_uploaded_file($_FILES['arquivo']['tmp_name'], $diretorio.uniqid().".".$extensao);
    } catch (Exception) {
        header("Location: index.html");
    }

    header("Location: index.html");

?>