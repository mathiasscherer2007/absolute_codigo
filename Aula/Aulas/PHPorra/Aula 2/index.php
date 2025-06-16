<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        <?php

            if (isset($_COOKIE["cor"])) {
                echo "body {background-color: {$_COOKIE['cor']}}";
            } else {
                echo "body {background-color: white}";
            }

        ?>
    </style>
</head>
<body>
    <form class="container" method="GET" action="process.php">
        <h1>Lorem ipsum dolor sit amet</h1>
        <input type="text" name="cor">
        <button name="send">Enviar</button>
    </form>
</body>
</html>