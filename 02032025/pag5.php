<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h3 { 
            background-color: yellow;
            border: 2px solid red;
            width: 25px;
            padding: 7px;
        }

    </style>
</head>
<body>
    <?php 
    for ($i=10; $i<=50; $i+=5) { 
        echo "<h3> $i</h3>";
    }
    ?>
</body>
</html>