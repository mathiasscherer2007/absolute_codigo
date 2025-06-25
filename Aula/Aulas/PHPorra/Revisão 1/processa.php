<?php

    echo "<br>".$_POST["nacionalidade"];
    echo "<br>".$_POST["tipoGrupo"];

    function escolherMelhor() {
        
    }

    # bandas
    $raimundos = ["nome" => "Raimundos", "nacionalidade" => "nacional", "tipoGrupo" => "banda", "tipos" => ["1", "4"], "score" => 0, "imagem" => "Images/raimundos.jpg"];
    $brilhasom = ["nome" => "Brilha Som", "nacionalidade" => "nacional", "tipoGrupo" => "banda", "tipos" => ["2", "5"], "score" => 0, "imagem" => "Images/brilhasom.jpg"];
    $tonico = ["nome" => "Tonico e Tinoco", "nacionalidade" => "nacional", "tipoGrupo" => "banda", "tipos" => ["3", "6"], "score" => 0, "imagem" => "Images/tonico.jpg"];
    $primus = ["nome" => "Primus", "nacionalidade" => "internacional", "tipoGrupo" => "banda", "tipos" => ["4", "6"], "score" => 0, "imagem" => "Images/primus.jpg"];
    $cream = ["nome" => "Cream", "nacionalidade" => "internacional", "tipoGrupo" => "banda", "tipos" => ["3", "1", "5"], "score" => 0, "imagem" => "Images/cream.jpg"];
    $bts = ["nome" => "BTS", "nacionalidade" => "internacional", "tipoGrupo" => "banda", "tipos" => ["2"], "score" => 0, "imagem" => "Images/bts.jpg"];

    $bandasNacionais = [$raimundos, $brilhasom, $tonico];
    $bandasInternacionais = [$primus, $cream, $bts];

    # cantores
    $raulseixas = ["nome" => "Raul Seixas", "nacionalidade" => "nacional", "tipoGrupo" => "cantor", "tipos" => ["1", "5", "6"], "score" => 0, "imagem" => "Images/raulseixas.jpg"];
    $luansantana = ["nome" => "Luan Santana", "nacionalidade" => "nacional", "tipoGrupo" => "cantor", "tipos" => ["2", "3", "4"], "score" => 0, "imagem" => "Images/santana.jpg"];
    $hendrix = ["nome" => "Jimi Hendrix", "nacionalidade" => "internacional", "tipoGrupo" => "cantor", "tipos" => ["1", "5"], "score" => 0, "imagem" => "Images/hendrix.jpg"];
    $johnson = ["nome" => "Robert Johnson", "nacionalidade" => "internacional", "tipoGrupo" => "cantor", "tipos" => ["3"], "score" => 0, "imagem" => "Images/johnson.jpg"];
    $zappa = ["nome" => "Frank Zappa", "nacionalidade" => "internacional", "tipoGrupo" => "cantor", "tipos" => ["6"], "score" => 0, "imagem" => "Images/zappa.jpg"];
    $justin = ["nome" => "Justin Bieber", "nacionalidade" => "internacional", "tipoGrupo" => "cantor", "tipos" => ["2", "4"], "score" => 0, "imagem" => "Images/bieber.jpg"];

    $cantoresNacionais = [$raulseixas, $luansantana];
    $cantoresInternacionais = [$hendrix, $johnson, $zappa, $justin];

    if ($_POST["tipoGrupo"] === "banda") {
        if ($_POST["nacionalidade"] === "internacional") {
            for ($i=1; $i < 7 ; $i+1) { 
                if (isset($_POST[strval(i)])) {
                    for ($j=0; $j < sizeof($bandasNacionais); $j++) { 
                        if (in_array(strval(i), $bandasNacionais[i]["tipos"])) {
                            $bandasNacionais[i]["score"] += 1;
                        }
                    }
                }
            }
        } else {
            for ($i=1; $i < 7 ; $i+1) { 
                if (isset($_POST[strval(i)])) {
                    for ($j=0; $j < sizeof($bandasInternacionais); $j++) { 
                        if (in_array(strval(i), $bandasInternacionais[i]["tipos"])) {
                            $bandasInternacionais[i]["score"] += 1;
                        }
                    }
                }
            }
        }
    } else {
        if ($_POST["nacionalidade"] === "nacional") {
            for ($i=1; $i < 7 ; $i+1) { 
                if (isset($_POST[strval(i)])) {
                    for ($j=0; $j < sizeof($cantoresNacionais); $j++) { 
                        if (in_array(strval(i), $cantoresNacionais[i]["tipos"])) {
                            $cantoresNacionais[i]["score"] += 1;
                        }
                    }
                }
            }
        } else {
            for ($i=1; $i < 7 ; $i+1) { 
                if (isset($_POST[strval(i)])) {
                    for ($j=0; $j < sizeof($cantoresInternacionais); $j++) { 
                        if (in_array(strval(i), $cantoresInternacionais[i]["tipos"])) {
                            $cantoresInternacionais[i]["score"] += 1;
                        }
                    }
                }
            }
        }
    }

    

?>

