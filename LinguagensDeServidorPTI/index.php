<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width"> 
        <title>PTI de Linguagens de Servidor - Cálculo do IMC</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>Cálculo de IMC</h1> 
        </header>
        <main>
            <section>
               <form action="calculoIMC.php" method="post">
                  <label for="peso">Insira o peso: </label>
                  <input type="number" name="peso_usuario" id="campo_peso" step="0.01" required/>
                  <label for="altura">Insira a altura: </label>
                  <input type="number" name="altura_usuario" id="campo_altura" step="0.01" required/>
                  <input type="submit" value="Enviar">
               </form>
            </section>
         </main>
    </body>
</html>
