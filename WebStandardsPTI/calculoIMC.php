<?php 
    function calculoIMC($peso_usuario, $altura_usuario){
        if(isset($peso_usuario) && isset($altura_usuario) && $altura_usuario > 0){
            $imc = $peso_usuario / ($altura_usuario * $altura_usuario);
            return $imc;
        } else {
            return null; // Retornar um valor nulo caso os valores não sejam válidos
        }
    }

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $peso_usuario = $_POST["peso_usuario"];
        $altura_usuario = $_POST["altura_usuario"];

        $n = calculoIMC($peso_usuario, $altura_usuario);

        if($n !== null){
            $n = number_format($n, 2, ',','.');

            if($n < 18.5){
                $zzz = "magreza";
            } else if ($n >= 18.5 && $n <= 24.9){
                $zzz = "saudável";
            } else if ($n >= 25 && $n <= 29.9){
                $zzz = "sobrepeso";
            } else if ($n >= 30 && $n <= 34.9){
                $zzz = "obesidade grau 1";
            } else if ($n >= 35 && $n <= 39.9){
                $zzz = "obesidade grau 2";
            } else if ($n >= 40){
                $zzz = "obesidade grau 3";
            }

            echo "Atenção, seu IMC é $n, e você está classificado como $zzz.";
        } else {
            echo "Valores inválidos. Certifique-se de que o peso e a altura são válidos.";
        }
}

?>
