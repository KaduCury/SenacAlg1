var fnd = 'n', res = 's'; 
age = [];

for (ind=0; res =='s'; ind++){
    age[ind] = prompt("Digite uma idade: ");
    res = prompt("Continuar? s/n"); 
}

idd = prompt("Qual idade quer encontrar no cadastro?");

for (ind=0; (fnd=='n' && ind<age.length); ind++){
    if (age[ind] == idd){
        fnd = 's';
    }
}

if (fnd == 'n'){
    alert("Não consta o cadastro da idade "+ idd +".");
} else {
    alert("A idade "+ idd +" está cadastrada na "+ ind +"ª posição.")
}
