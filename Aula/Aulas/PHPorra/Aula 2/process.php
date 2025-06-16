<?php

    setcookie("cor", $_GET["cor"], time() + 120);

    header("Location: index.php")

?>