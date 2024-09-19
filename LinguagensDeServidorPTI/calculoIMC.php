<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PTI de Linguagens de Servidor - Cálculo do IMC</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>Cálculo de IMC</h1> 
        </header>
        <main>
            <section>
                <?php 
                    $peso_usuario = $_POST["peso_usuario"];
                    $altura_usuario = $_POST["altura_usuario"];
                    function calculoIMC($peso, $altura){
                        global $imc;
                        $imc = $peso / ($altura * $altura);
                        $imc = number_format($imc, 2, ',','.');
                    }
                    calculoIMC($peso_usuario, $altura_usuario);
                    function classificarIMC($imc, $altura, $peso) {
                        $altura = number_format($altura, 2);
                        $faixas = array(
                            array("faixa" => "como Magro", "min" => 0, "max" => 18.5),                            
                            array("faixa" => "como Saudável", "min" => 18.51, "max" => 24.9),
                            array("faixa" => "com Sobrepeso", "min" => 25, "max" => 29.9),
                            array("faixa" => "com Obesidade Grau 1", "min" => 30, "max" => 34.9),
                            array("faixa" => "com Obesidade Grau 2", "min" => 35, "max" => 39.9),
                            array("faixa" => "com Obesidade Grau 3", "min" => 40, "max" => PHP_INT_MAX)
                        );
                        foreach ($faixas as $faixa) {
                            if ($imc >= $faixa["min"] && $imc <= $faixa["max"]) {
                                echo "Atenção! Seu <strong>IMC</strong> é <strong>$imc</strong>.<br> 
                                A sua <em>altura</em> é <b>$altura</b>" . "<b>m</b> e o seu <em>peso</em> é <b>$peso</b>"
                                 . "<b>kg</b>. <br>Você está <em>classificado</em> " . "<strong>{$faixa["faixa"]}</strong>.";
                            }
                        }
                    }
                    classificarIMC($imc, $altura_usuario, $peso_usuario);
                ?> 
            </section>
            <button onclick="history.go(-1)">&#x2B05; Voltar</button> 
         </main>
    </body>
</html>