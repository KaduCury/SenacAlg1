// Inicializando o objeto de contagem para cada categoria Kibbe
const kibbeScores = {
    Dramatic: 0,
    SoftDramatic: 0,
    FlamboyantNatural: 0,
    Natural: 0,
    SoftNatural: 0,
    DramaticClassic: 0,
    Classic: 0,
    SoftClassic: 0,
    FlamboyantGamine: 0,
    Gamine: 0,
    SoftGamine: 0,
    TheatricalRomantic: 0,
    Romantic: 0
};

// Função para fazer as perguntas e contar pontos
function askQuestion(question, options) {
    let answer = prompt(question + "\n" + options);
    
    // Condicionais para adicionar pontuação à categoria correspondente
    switch (answer) {
        case 'a':
            kibbeScores.Dramatic++;
            break;
        case 'b':
            kibbeScores.Romantic++;
            break;
        case 'c':
            kibbeScores.Classic++;
            break;
        case 'd':
            kibbeScores.SoftDramatic++;
            break;
        case 'e':
            kibbeScores.Natural++;
            break;
        default:
            console.log("Resposta inválida. Por favor, insira 'a', 'b', 'c', 'd' ou 'e'.");
            askQuestion(question, options); // Pergunta novamente se a resposta for inválida
            break;
    }
}

// Perguntas (apenas exemplos, adicione as restantes da lista)
/*askQuestion("1. Como você descreveria sua estrutura corporal?", 
            "a) Longa e esguia\nb) Curvilínea e cheia\nc) Equilibrada e média\n" +
            "d) Longa com curvas suaves\ne) Atlética e natural");

askQuestion("2. Como você descreveria seus ossos faciais?", 
            "a) Marcantes e angulares\nb) Delicados e arredondados\nc) Proporcionais\n" +
            "d) Estrutura levemente marcada com suavidade\ne) Moderadamente largos");*/

            askQuestion("1. Como você descreveria sua estrutura corporal geral?", 
                "a) Alta e esguia - Sou alta (acima de 1,70m) e minha presença física é forte e marcante (Dramatic/Flamboyant Natural).\n" +
                "b) Moderada e equilibrada - Minha altura é mediana, nem alta, nem baixa, e tenho uma aparência equilibrada (Classic).\n" +
                "c) Pequena e delicada - Sou baixa (menos de 1,65m), com uma estrutura física pequena e delicada (Romantic/Soft Gamine).\n" +
                "d) Alongada com curvas - Sou alta ou de altura mediana, mas com curvas evidentes (Soft Dramatic/Theatrical Romantic).\n" +
                "e) Proporcional e equilibrada - Sou de altura mediana, com uma proporção geral equilibrada (Soft Classic/Soft Natural).");
    
    askQuestion("2. Como são os seus ombros?", 
                "a) Largos e angulares - Meus ombros são retos e largos, com linhas definidas (Dramatic/Flamboyant Natural).\n" +
                "b) Arredondados e suaves - Meus ombros têm uma forma arredondada e não são largos (Romantic/Soft Gamine).\n" +
                "c) Equilibrados e simétricos - Meus ombros são proporcionais e simétricos, sem grandes ângulos ou curvas (Classic/Soft Classic).\n" +
                "d) Delicados e estreitos - Meus ombros são pequenos e finos (Theatrical Romantic/Gamine).\n" +
                "e) Moderadamente largos e suaves - Meus ombros são mais amplos, mas com uma suavidade nas linhas (Soft Natural/Soft Dramatic).");
    
    askQuestion("3. Como você descreveria seus quadris?", 
                "a) Estreitos e retos - Meus quadris são retos e pouco curvilíneos, sem grande destaque (Dramatic/Flamboyant Natural).\n" +
                "b) Largos e arredondados - Meus quadris são cheios e arredondados, mais proeminentes que meus ombros (Romantic/Soft Gamine).\n" +
                "c) Moderados e equilibrados - Meus quadris são proporcionais ao resto do meu corpo, sem grande destaque (Classic/Soft Classic).\n" +
                "d) Estreitos com curvas - Meus quadris são relativamente estreitos, mas com curvas suaves (Theatrical Romantic/Soft Dramatic).\n" +
                "e) Moderadamente largos e curvilíneos - Meus quadris são mais largos, mas as curvas são suaves e proporcionais (Soft Natural).");
    
    askQuestion("4. Como você descreveria a proporção entre seu tronco e pernas?", 
                "a) Tronco mais longo que as pernas - Tenho o tronco mais longo e as pernas mais curtas em comparação (Flamboyant Natural/Dramatic).\n" +
                "b) Tronco e pernas proporcionais - Meu tronco e minhas pernas são equilibrados em comprimento (Classic/Soft Classic).\n" +
                "c) Pernas mais longas que o tronco - Minhas pernas são mais longas que o tronco (Romantic/Soft Gamine).\n" +
                "d) Tronco mediano com curvas - Meu tronco é mediano e curvilíneo (Soft Dramatic/Theatrical Romantic).\n" +
                "e) Tronco mais longo com curvas moderadas - Tenho um tronco um pouco mais longo, mas com curvas (Soft Natural).");
    
    askQuestion("5. Como você descreveria a forma dos seus braços e pernas?", 
                "a) Longos e angulosos - Meus braços e pernas são longos e têm uma aparência mais reta e angular (Dramatic/Flamboyant Natural).\n" +
                "b) Curtos e arredondados - Meus braços e pernas são curtos e têm uma aparência mais cheia e arredondada (Romantic/Soft Gamine).\n" +
                "c) Moderados e equilibrados - Meus braços e pernas são proporcionais e simétricos, sem grande destaque (Classic/Soft Classic).\n" +
                "d) Longos e curvilíneos - Meus braços e pernas são longos e com curvas evidentes (Soft Dramatic/Theatrical Romantic).\n" +
                "e) Moderadamente longos e suaves - Meus braços e pernas são moderadamente longos, mas com uma suavidade nas formas (Soft Natural).");
    
    askQuestion("6. Como você descreveria o formato do seu rosto?", 
                "a) Longo e angular - Meu rosto tem uma forma alongada, com ângulos definidos e poucas curvas (Dramatic/Flamboyant Natural).\n" +
                "b) Arredondado e cheio - Meu rosto é arredondado, com bochechas cheias e traços suaves (Romantic/Soft Gamine).\n" +
                "c) Simétrico e oval - Meu rosto tem um formato ovalado, bem proporcionado e equilibrado (Classic/Soft Classic).\n" +
                "d) Delicado com ângulos suaves - Meu rosto tem ângulos suaves, mas ainda mantém uma aparência delicada (Theatrical Romantic/Soft Dramatic).\n" +
                "e) Moderadamente largo com suavidade - Meu rosto é moderadamente largo e as linhas são suaves (Soft Natural).");
    
    askQuestion("7. Como você descreveria a forma dos seus olhos?", 
                "a) Pequenos e alongados - Meus olhos são pequenos e têm um formato mais estreito e alongado (Dramatic/Theatrical Romantic).\n" +
                "b) Grandes e arredondados - Meus olhos são grandes e arredondados, com uma aparência cheia e viva (Romantic/Soft Gamine).\n" +
                "c) Moderados e equilibrados - Meus olhos são de tamanho mediano, com uma proporção equilibrada em relação ao resto do rosto (Classic/Soft Classic).\n" +
                "d) Delicados e levemente inclinados - Meus olhos são pequenos, mas com uma leve inclinação que suaviza os traços (Soft Dramatic/Gamine).\n" +
                "e) Grandes com contornos suaves - Meus olhos são grandes, com um formato suave e expressivo (Soft Natural).");
    
    askQuestion("8. Como você descreveria suas maçãs do rosto?", 
                "a) Altas e definidas - Minhas maçãs do rosto são altas e bem marcadas, com contornos angulares (Dramatic/Flamboyant Natural).\n" +
                "b) Cheias e arredondadas - Minhas maçãs do rosto são cheias e arredondadas, dando uma aparência suave ao meu rosto (Romantic/Soft Gamine).\n" +
                "c) Proporcionais e simétricas - Minhas maçãs do rosto são equilibradas e proporcionais, sem grande destaque (Classic/Soft Classic).\n" +
                "d) Altas com contornos suaves - Minhas maçãs do rosto são altas, mas com um contorno suave e menos definido (Soft Dramatic/Theatrical Romantic).\n" +
                "e) Moderadamente definidas e largas - Minhas maçãs do rosto são moderadamente largas, com uma definição leve (Soft Natural).");
    
    askQuestion("9. Como você descreveria seu nariz?", 
                "a) Longo e afilado - Meu nariz é longo e fino, com linhas bem definidas (Dramatic/Theatrical Romantic).\n" +
                "b) Pequeno e arredondado - Meu nariz é pequeno, com uma ponta mais arredondada e suave (Romantic/Soft Gamine).\n" +
                "c) Moderado e simétrico - Meu nariz tem um tamanho e formato equilibrado, sem grande destaque (Classic/Soft Classic).\n" +
                "d) Longo e levemente curvado - Meu nariz é longo, mas com uma leve curva que suaviza sua aparência (Soft Dramatic/Flamboyant Natural).\n" +
                "e) Moderadamente largo com contornos suaves - Meu nariz é moderadamente largo, com um formato mais suave e menos definido (Soft Natural).");
    
    askQuestion("10. Como você descreveria sua boca?", 
                "a) Fina e alongada - Minha boca é fina e tem um formato mais estreito e alongado (Dramatic/Flamboyant Natural).\n" +
                "b) Grande e cheia - Minha boca é grande, com lábios cheios e traços suaves (Romantic/Soft Gamine).\n" +
                "c) Moderada e equilibrada - Minha boca é de tamanho médio, com uma forma proporcional e equilibrada (Classic/Soft Classic).\n" +
                "d) Pequena com curvas suaves - Minha boca é pequena, mas tem uma curva suave e delicada (Theatrical Romantic/Soft Dramatic).\n" +
                "e) Moderadamente cheia e larga - Minha boca é moderadamente larga, com lábios mais cheios e suaves (Soft Natural).");
    
    askQuestion("11. Como você descreveria sua cintura?", 
                "a) Retilínea e pouco definida - Minha cintura é pouco marcada e segue uma linha reta (Dramatic/Flamboyant Natural).\n" +
                "b) Bem definida e acentuada - Minha cintura é claramente marcada, criando uma silhueta curvilínea (Romantic/Soft Dramatic).\n" +
                "c) Levemente definida - Minha cintura é ligeiramente definida, sem ser um ponto focal acentuado (Soft Classic/Soft Natural).\n" +
                "d) Moderadamente definida e proporcional - Minha cintura é equilibrada, com uma definição sutil, mas harmônica (Classic/Dramatic Classic).\n" +
                "e) Sutilmente definida com suavidade - Minha cintura é suavemente marcada, sem grandes contrastes (Soft Gamine/Gamine).");
    
    askQuestion("12. Como você descreveria seus ombros?", 
                "a) Angulares e largos - Meus ombros são bem marcados, com uma estrutura angular e levemente larga (Dramatic/Flamboyant Natural).\n" +
                "b) Delicadamente arredondados - Meus ombros são arredondados e suaves, sem ângulos fortes (Romantic/Soft Gamine).\n" +
                "c) Proporcionais e equilibrados - Meus ombros são proporcionais ao meu corpo, nem largos, nem estreitos, e bem equilibrados (Classic/Soft Classic).\n" +
                "d) Angulares, mas suavizados - Meus ombros são levemente angulares, mas com uma suavidade que equilibra os traços (Soft Dramatic/Theatrical Romantic).\n" +
                "e) Largos com suavidade - Meus ombros são moderadamente largos, mas com uma suavidade no contorno (Soft Natural).");
    
                askQuestion("13. Como você descreveria a textura da sua pele?", 
                    "a) Firme e resistente - Minha pele é firme, com uma textura resistente e levemente grossa (Dramatic/Flamboyant Natural).\n" +
                    "b) Suave e macia - Minha pele é delicada, com uma textura suave e macia ao toque (Romantic/Soft Gamine).\n" +
                    "c) Equilibrada e refinada - Minha pele é uniforme, com uma textura equilibrada e refinada (Classic/Soft Classic).\n" +
                    "d) Firme com uma leve suavidade - Minha pele é firme, mas com uma leve suavidade que equilibra sua textura (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Moderadamente suave e natural - Minha pele é moderadamente suave, com uma textura natural (Soft Natural).");
        
        askQuestion("14. Como você descreveria seus quadris?", 
                    "a) Retos e pouco curvilíneos - Meus quadris têm uma linha reta, sem grande curvatura (Dramatic/Flamboyant Natural).\n" +
                    "b) Arredondados e cheios - Meus quadris são arredondados, com uma curva cheia e destacada (Romantic/Soft Gamine).\n" +
                    "c) Equilibrados e proporcionais - Meus quadris são proporcionais ao resto do corpo, sem grande destaque (Classic/Soft Classic).\n" +
                    "d) Curvilíneos com suavidade - Meus quadris são curvilíneos, mas com uma suavidade que equilibra a silhueta (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Moderadamente largos e suaves - Meus quadris são largos, mas com um contorno suave e menos acentuado (Soft Natural).");
        
        askQuestion("15. Como você descreveria a distribuição do peso no seu corpo?", 
                    "a) Distribuição uniforme, com uma silhueta reta - Meu peso é distribuído uniformemente, com uma silhueta mais reta e alongada (Dramatic/Flamboyant Natural).\n" +
                    "b) Distribuição nas curvas, especialmente no busto e quadris - Meu peso se concentra mais nas áreas curvilíneas, como busto e quadris (Romantic/Soft Dramatic).\n" +
                    "c) Distribuição equilibrada, sem áreas de destaque - Meu peso é distribuído de forma equilibrada, sem que uma área se destaque mais que a outra (Classic/Soft Classic).\n" +
                    "d) Distribuição suave, com foco nas curvas moderadas - Meu peso é distribuído de maneira suave, com destaque sutil para curvas moderadas (Theatrical Romantic/Soft Natural).\n" +
                    "e) Distribuição moderada nas áreas mais suaves - Meu peso tende a se concentrar em áreas como os quadris e a cintura de forma natural, sem exageros (Soft Natural/Soft Gamine).");
        
        askQuestion("16. Como você descreveria a estrutura do seu rosto?", 
                    "a) Longo e angular - Meu rosto é alongado e possui ângulos marcados, como uma mandíbula forte ou maçãs do rosto proeminentes (Dramatic/Flamboyant Natural).\n" +
                    "b) Redondo e suave - Meu rosto tem uma estrutura arredondada ou com traços muito suaves (Romantic/Soft Gamine).\n" +
                    "c) Equilibrado e oval - Meu rosto tem uma forma oval ou levemente equilibrada, sem traços marcantes (Classic/Soft Classic).\n" +
                    "d) Angular, mas com um toque de suavidade - Meu rosto tem traços angulares, mas há uma suavidade nas linhas (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Largo e naturalmente arredondado - Meu rosto é largo, mas tem um contorno suave e natural (Soft Natural).");
        
        askQuestion("17. Como você descreveria suas maçãs do rosto?", 
                    "a) Proeminentes e altas - Minhas maçãs do rosto são elevadas e bem definidas, criando uma aparência angular (Dramatic/Flamboyant Natural).\n" +
                    "b) Cheias e arredondadas - Minhas maçãs do rosto são arredondadas e criam uma aparência suave (Romantic/Soft Gamine).\n" +
                    "c) Equilibradas e levemente pronunciadas - Minhas maçãs do rosto são equilibradas, com uma leve proeminência, sem exageros (Classic/Soft Classic).\n" +
                    "d) Levemente angulares e elevadas - Minhas maçãs do rosto têm uma elevação angular suave, sem ser muito marcante (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Naturais e suaves - Minhas maçãs do rosto são suaves e têm uma aparência natural, sem grande destaque (Soft Natural).");
        
        askQuestion("18. Como você descreveria suas mãos?", 
                    "a) Longas e ossudas - Minhas mãos têm dedos longos, com uma aparência angular e ossuda (Dramatic/Flamboyant Natural).\n" +
                    "b) Pequenas e delicadas - Minhas mãos são pequenas, com uma aparência delicada e suave (Romantic/Soft Gamine).\n" +
                    "c) Proporcionais e equilibradas - Minhas mãos têm proporções equilibradas, sem serem grandes ou pequenas (Classic/Soft Classic).\n" +
                    "d) Longas, mas com suavidade - Minhas mãos são longas, mas com um toque de suavidade nos contornos (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Médias e naturais - Minhas mãos têm um tamanho médio e uma aparência natural, sem grande destaque (Soft Natural).");
        
        askQuestion("19. Como você descreveria seus pés?", 
                    "a) Longos e finos - Meus pés são longos, com uma aparência fina e angular (Dramatic/Flamboyant Natural).\n" +
                    "b) Pequenos e arredondados - Meus pés são pequenos e têm uma aparência arredondada e delicada (Romantic/Soft Gamine).\n" +
                    "c) Proporcionais e bem ajustados - Meus pés são proporcionais ao resto do corpo, sem características extremas (Classic/Soft Classic).\n" +
                    "d) Longos, mas suavemente arredondados - Meus pés são longos, mas com uma forma mais suavemente arredondada (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Moderadamente largos e naturais - Meus pés são moderadamente largos, com um contorno natural e confortável (Soft Natural).");
        
        askQuestion("20. Como você descreveria a estrutura das suas pernas?", 
                    "a) Longas e retas - Minhas pernas são longas, com uma linha reta e sem muitas curvas (Dramatic/Flamboyant Natural).\n" +
                    "b) Curvilíneas e arredondadas - Minhas pernas têm curvas suaves e são arredondadas, com volume (Romantic/Soft Gamine).\n" +
                    "c) Proporcionais e equilibradas - Minhas pernas são equilibradas, nem muito longas, nem curvilíneas demais (Classic/Soft Classic).\n" +
                    "d) Longas com uma leve suavidade nas curvas - Minhas pernas são longas, mas com uma leve suavidade nas linhas (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Moderadamente largas com linhas naturais - Minhas pernas são moderadamente largas e seguem uma linha natural (Soft Natural).");
        
        askQuestion("21. Como você descreveria a estrutura do seu pescoço?", 
                    "a) Longo e fino - Meu pescoço é visivelmente longo e tem uma aparência esguia (Dramatic/Flamboyant Natural).\n" +
                    "b) Curto e cheio - Meu pescoço é curto e tem uma aparência arredondada, com mais volume (Romantic/Soft Gamine).\n" +
                    "c) Moderado e equilibrado - Meu pescoço não é nem muito longo, nem muito curto, com proporções equilibradas (Classic/Soft Classic).\n" +
                    "d) Longo, mas com alguma suavidade - Meu pescoço é longo, mas tem contornos suaves (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Moderadamente largo e natural - Meu pescoço é de largura moderada, com uma aparência natural (Soft Natural).");
        
        askQuestion("22. Como você descreveria a proporção entre seu corpo e seu torso?", 
                    "a) Torso longo e pernas longas - Meu torso é alongado e minhas pernas são proporcionais ou também longas (Dramatic/Flamboyant Natural).\n" +
                    "b) Torso curto e pernas curtas - Meu torso é curto, e minhas pernas seguem o mesmo padrão (Romantic/Soft Gamine).\n" +
                    "c) Proporções equilibradas - Meu torso e pernas têm proporções equilibradas (Classic/Soft Classic).\n" +
                    "d) Torso longo, mas com curvas suaves - Meu torso é longo, mas há suavidade nas proporções (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Moderado e natural - Tenho proporções moderadas entre torso e pernas (Soft Natural).");
        
        askQuestion("23. Como você descreveria a estrutura dos seus ombros?", 
                    "a) Ombros angulares e largos - Meus ombros são largos e têm uma linha angular marcada (Dramatic/Flamboyant Natural).\n" +
                    "b) Ombros arredondados e estreitos - Meus ombros são arredondados e delicadamente estreitos (Romantic/Soft Gamine).\n" +
                    "c) Ombros equilibrados e proporcionais - Meus ombros são proporcionais ao resto do meu corpo, sem serem marcantes (Classic/Soft Classic).\n" +
                    "d) Ombros largos, mas com curvas suaves - Meus ombros são largos, mas têm um toque de suavidade nas linhas (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Ombros naturais e moderadamente largos - Meus ombros são naturais, com uma largura moderada (Soft Natural).");
        
        askQuestion("24. Como você descreveria a estrutura dos seus quadris?", 
                    "a) Quadris estreitos e retos - Meus quadris são estreitos e seguem uma linha reta (Dramatic/Flamboyant Natural).\n" +
                    "b) Quadris arredondados e cheios - Meus quadris são arredondados e têm volume, sendo bem marcantes (Romantic/Soft Gamine).\n" +
                    "c) Quadris equilibrados e proporcionais - Meus quadris são proporcionais ao restante do corpo, sem grande destaque (Classic/Soft Classic).\n" +
                    "d) Quadris suavemente arredondados - Meus quadris são largos, mas com contornos suaves (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Quadris moderadamente largos e naturais - Meus quadris têm uma largura moderada e um contorno natural (Soft Natural).");
        
        askQuestion("25. Como você descreveria sua estrutura de busto?", 
                    "a) Pequeno e reto - Meu busto é pequeno, com uma linha reta (Dramatic/Flamboyant Natural).\n" +
                    "b) Grande e arredondado - Meu busto é cheio e arredondado, criando uma forma curvilínea (Romantic/Soft Gamine).\n" +
                    "c) Moderado e equilibrado - Meu busto é moderado, sem ser muito grande nem pequeno (Classic/Soft Classic).\n" +
                    "d) Cheio, mas suavemente arredondado - Meu busto é cheio, mas tem contornos suaves (Soft Dramatic/Theatrical Romantic).\n" +
                    "e) Moderado e natural - Meu busto tem um tamanho moderado e uma forma natural (Soft Natural).");
// Adicione mais perguntas...

// Função para calcular o resultado
function calculateResult() {
    let highestScore = 0;
    let kibbeType = '';

    // Iterar sobre os resultados e encontrar a categoria com mais pontos
    for (let type in kibbeScores) {
        if (kibbeScores[type] > highestScore) {
            highestScore = kibbeScores[type];
            kibbeType = type;
        }
    }
    
    // Exibir o resultado
    console.log(`Você se encaixa no tipo de corpo Kibbe: ${kibbeType}`);
}

// Chamar a função de cálculo após todas as perguntas
calculateResult();