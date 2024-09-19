public class PTIPOO {
    public static void main(String[] args) {
        Ponto pontoA = new Ponto(400, 300);
        Ponto pontoB = new Ponto();

        System.out.println("Os pontos são iguais? " + pontoB.ehIgual(pontoA));
        System.out.println("Qual a distância entre os pontos? " + pontoB.distanciaEntreOsPontos(pontoA)); 
        //pontoA.stts();
        //pontoB.stts();
    }
}
