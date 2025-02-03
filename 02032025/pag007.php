<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 550px;
            font-family: Verdana;
            background-color: 10px 10px 5px #888888;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div>
        <?php
            $c = 0;
            do {
                echo "$c ";
                $c+=2;
            } while ($c <= 40);
        ?>
    </div>
</body>
</html>