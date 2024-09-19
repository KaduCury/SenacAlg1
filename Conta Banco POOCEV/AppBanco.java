public class AppBanco {
    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.setNumConta (1234);
        p1.setDono("Jubileu");
        p1.abrirConta("CC");
        p1.depositar(300);

        ContaBanco p2 = new ContaBanco();
        p2.setNumConta(5678);
        p2.setDono("Creuza");
        p2.abrirConta("CP");
        p2.depositar(500);
        p2.sacar(100);

        p1.estadoAtual();
        p2.estadoAtual();

        p1.sacar(350);
        p1.fecharConta();

        ContaBanco p3 = new ContaBanco();
        p3.setNumConta(91011);
        p3.setDono("Maria");
        p3.abrirConta("CP");
        p3.estadoAtual();

        //ContaBanco p2 = new ContaBanco(n, t, d, s)
    }
}
