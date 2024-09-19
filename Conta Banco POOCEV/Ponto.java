public class Ponto {
    private int x, y;
// Construtor da classe Ponto que recebe por paramêtros dois atributos inteiros x e y
    public Ponto (int x, int y) {
        this.x = x;
        this.y = y;
    }
// Outro construtor da classe Ponto que não recebe parâmetro e inicializa os atributos x e y com valor zero 
    public Ponto () {
        this.x = 0;
        this.y = 0;
    }
// Método que verifica se dois pontos são iguais no eixo x e y, um ponto passado de maneira implícita e outro como parâmetro
    public boolean ehIgual(Ponto pontoB) {
        if (this.x == pontoB.x && this.y == pontoB.y) {
            return true;
        } else {
            return false;
        }
    }
// Método que calcula a distância entre dois pontos, sendo um deles passado implicitamente e outro
    public double distanciaEntreOsPontos(Ponto pontoB) {
        return Math.sqrt(Math.pow(pontoB.x - this.x, 2) + Math.pow(pontoB.y - this.y, 2));
    }     

    //public void stts() {
    //    System.out.println("X: " + this.x);        
    //    System.out.println("Y: " + this.y);                
    //}
}
