<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {

            border: 4px solid blue;
            border-radius: 25px;
            box-shadow: 10px 10px 15px #888888;
            width: 110px; 
            padding: 10px; 
        }


    </style>
</head>
<body>
    <div>
    <?php

        $numero = $_GET["numero"];

        echo "<h3> Tabuada do Nº $numero </h3>";

        for ($i = 1; $i <= 10; $i++) {
            echo "$i x $numero = ". ($i*$numero) . "<br>";

        }
   ?>
   </div><br>
   <a href="aula4_Tabuada.html"><button>Voltar</button></a>
</body>
</html>