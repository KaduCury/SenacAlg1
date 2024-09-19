public class ContaBanco {
    
    // Atributos
    public int numConta;
    protected String tipo; 
    private String dono;
    private float saldo;
    private boolean status;

    // Métodos
    public void estadoAtual() {
        System.out.println("Conta: " + getNumConta());
        System.out.println("Tipo: " + getTipo());
        System.out.println("Titular: " + getDono());
        System.out.println("Saldo: " + getSaldo());
        System.out.println("Estado: " + getStatus());
    }

    public void abrirConta(String t) { //muda status para verdadeiro, CC+50 ou CP+150
        this.setTipo(t);
        this.setStatus(true);
        if (t == "CC") {
                this.setSaldo(50);
        } else if (t == "CP") {
                this.setSaldo(150);
        } else {
                System.out.println("Tipo inválido de conta");
        }
    }

    public void fecharConta() { //muda status para falso, tem que ter saldo zero
        if (this.getSaldo() > 0) {
                System.out.println("Retirar o saldo da conta antes de fechá-la");
        } else if (this.getSaldo() < 0) {
                System.out.println("Pague seus débitos antes de encerrar a conta");
        } else {
                System.out.println("Conta encerrada!");
                this.setStatus(false);
        }
    }

    public void depositar(float v) { //status verdadeiro
        if (this.getStatus()) { 
                this.setSaldo(this.getSaldo() + v);
                System.out.println(this.getDono() + " depositou " + v + " e seu saldo agora é de " + this.getSaldo());
        } else {
                System.out.println("Essa conta não existe");
        }
    }

    public void sacar(float v) { //saldo >= saque
        if (this.getStatus() && this.getSaldo() >= v) {
                this.setSaldo(this.getSaldo() - v);
                System.out.println(this.getDono() + " sacou " + v + " e seu saldo agora é de " + this.getSaldo());
        } else {
                System.out.println("Conta inexistente e/ou saldo insuficiente para saque");
        }
    }

    public void pagarMensal() { //CC-12 e CP-20
        float v = 0;
        if (this.getTipo() == "CC") {
                v = 12;
        } else if (this.getTipo() == "CP") {
                v = 20;
        }
        if (this.getStatus()) {
                this.setSaldo(this.getSaldo() - v);
                System.out.println(this.getDono() + "pagou a mensalidade de " + v + " e seu saldo agora é de " + this.getSaldo());
        } else {
                System.out.println("Essa conta não existe");
        }
    }

    // Métodos Especiais
    public ContaBanco() {
        this.setStatus(false);
        this.setSaldo(0);
    }

    public int getNumConta() {
            return this.numConta;
    }

    public void setNumConta(int n) {
            this.numConta = n;
    }

    public String getTipo() {
            return this.tipo;
    }

    public void setTipo(String t) {
            this.tipo = t;
    }

    public String getDono() {
            return this.dono;
    }

    public void setDono(String d) {
            this.dono = d;
    }

    public float getSaldo() {
            return this.saldo;
    }

    public void setSaldo(float s) {
            this.saldo = s;
    }

    public boolean getStatus() {
            return this.status;
    }

    public void setStatus(boolean e) {
            this.status = e;
    }
}
