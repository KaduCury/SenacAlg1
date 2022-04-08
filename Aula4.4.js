sexo = prompt("Qual o seu sexo? Responda com 'm' para masculino e 'f' para feminino.");
idade =  prompt("Qual a sua idade?");

if (sexo == 'f' && idade >= 16) {
    alert ("Venha participar da nossa campanha de saúde!");
} else if (sexo == 'm'){
    estado_civil = prompt("Qual o seu estado civil?");
    if (estado_civil == "casado"){
        alert ("Venha participar da nossa campanha para casais.");
    } else {
        alert ("Venha participar da nossa campanha de doação de sangue.");
    }
}
