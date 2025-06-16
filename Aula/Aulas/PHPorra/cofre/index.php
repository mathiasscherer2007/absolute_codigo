<?php
    if (!isset($_POST['tentativas'])) {
        $_POST['tentativas'] = 3;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <form action="process.php" class="cofre" method="POST">
            <div>
                <input type="number" name="dig1" value="dig1" min=0 max=9>
                <input type="number" name="dig2" value="dig2" min=0 max=9>
                <input type="number" name="dig3" value="dig3" min=0 max=9>
            </div>
            <?php
                echo "<p>{$_POST['tentativas']} tentativas restantes</p>"
            ?>
            <button>Tentar</button>
        </form>
    </div>
</body>
</html>