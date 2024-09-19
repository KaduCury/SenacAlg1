<?php
function classificarIMC($imc) {
    $faixas = array(
        array('faixa' => 'Magreza', 'min' => 0, 'max' => 18.5),
        array('faixa' => 'Saudável', 'min' => 18.51, 'max' => 24.9),
        array('faixa' => 'Sobrepeso', 'min' => 25.0, 'max' => 29.9),
        array('faixa' => 'Obesidade Grau I', 'min' => 30.0, 'max' => 34.9),
        array('faixa' => 'Obesidade Grau II', 'min' => 35.0, 'max' => 39.9),
        array('faixa' => 'Obesidade Grau III', 'min' => 40, 'max' => PHP_INT_MAX)
    );

    foreach ($faixas as $faixa) {
        if ($imc >= $faixa['min'] && $imc <= $faixa['max']) {
            return "Atenção, seu IMC é $imc, e você está classificado como {$faixa['faixa']}.";
        }
    }
}

// Valor do IMC que você deseja classificar
$valorIMC = 25.30;

// Chama a função para classificar o IMC e exibe a mensagem
echo classificarIMC($valorIMC);
?>
