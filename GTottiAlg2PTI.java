import java.util.Scanner;
import java.util.Arrays;

class Main {
  public static void main(String[] args) {
    try (Scanner listaLength = new Scanner (System.in)) {
      System.out.println("Insira a quantidade de elementos em sua lista: ");
      int nElements = listaLength.nextInt();
      int[] elements = new int[nElements];
      for (int index=0; index<elements.length; index++) {
        System.out.println("Digite o número inteiro da " + (index+1) + "ª posição: ");
        elements[index] = listaLength.nextInt();
      }
      Arrays.sort(elements);
      System.out.println("Valores ordenados: " +
          Arrays.toString(elements));
      System.out.println(verificaOrdemCrescente(elements));
      System.out.println(maiorDiferenca(elements));
    }
  }
  
  public static boolean verificaOrdemCrescente(int elements[]) {
    for (int i=1; i<elements.length; i++) {
      if (elements[i-1]>elements[i]) {
        return false;
      }
    }
    return true;
  }

  public static int maiorDiferenca(int elements[]) {
    int smallerN = elements[0];
    int biggerN = elements[0];
    for (int i=1; i<elements.length; i++) {
      if (elements[i] > biggerN) {
        biggerN = elements[i];
      }
      if (elements[i] < smallerN) {
        smallerN = elements[i];
      }
    }
    int biggerDif = biggerN - smallerN;
    return biggerDif;
  }
}