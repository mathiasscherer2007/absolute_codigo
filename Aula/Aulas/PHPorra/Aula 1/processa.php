<?php

    $val1 = intval($_POST["num1"]);
    $val2 = intval($_POST["num2"]);

    print_r($_POST);

    if (isset($val1) and isset($val2)) {
        if ($_POST["enviar"] == "somar") {
            $op = $val1 + $val2;
            echo "<hr>{$val1} + {$val2} = {$op}";
        } else if ($_POST["enviar"] == "subtrair") {
            $op = $val1 - $val2;
            echo "<hr>{$val1} - {$val2} = {$op}";
        } else if ($_POST["enviar"] == "multiplicar") {
            $op = $val1 * $val2;
            echo "<hr>{$val1} * {$val2} = {$op}";
        } else if ($_POST["enviar"] == "dividir") {
            $op = $val1 / $val2;
            echo "<hr>{$val1} / {$val2} = {$op}";
        } 
    } else {
        echo "<hr>define os valor direito fdp";
    }

?>