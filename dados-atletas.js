//Resumo do proejto:Crie uma aplicação capaz de receber informações de um atleta, bem como calcular parâmetros e exibi-los para o usuário.
//Especificações:Você deverá criar uma classe Atleta para concentrar os atributos e métodos dos atletas.
class Atleta {
  constructor(nome, idade,peso,altura,notas){
    this.nome=nome;
    this.idade=idade;
    this.peso=peso;
    this.altura=altura;
    this.notas=notas;
    this.categoria = this.calculaCategoria();
    this.imc = this.calculaIMC();
    this.mediaValida = this.calculaMediaValida();
  }
  //Para calcular a Categoria:Infantil: 9 a 11 anos,Juvenil: 12 e 13 anos,Intermediário: 14 e 15 anos,Adulto: 16 a 30 anos,Sem categoria: demais idades
  calculaCategoria(){
    if(this.idade >= 9 && this.idadade<= 11){
      return "Infantil"
    }
     else if (this.idade >=12 && this.idade<= 13){
       return "Juvenil"
     } 
    else if (this.idade >= 14 && this.idade<= 15){
      return "Intermediário"
    }
    else if (this.idade>= 16 && this.idade<= 30){
      return "Adulto"
    }
    else {
      return "Sem Categoria"
    }
  }
  //Para calcular o IMC:Fórmula: imc = peso / (altura x altura)
  calculaIMC(){
     return this.imc = this.peso / (this.altura * this.altura) ;
  }
  //Para calcular média válida: olhar Projeto 1
  calculaMediaValida(){
    let soma = 0;
       this.notas.sort(function(a, b) {
          return a - b; 
       });
       this.notasValidas = this.notas.slice(1, 4)
       this.notasValidas.forEach(function(nota) {
           soma = soma + nota;
       });
     return  this.media =  soma / this.notasValidas.length;
  }
  obtemNomeAtleta(){
    return this.nome;
  }
  obtemIdadeAtleta(){
    return this.idade;
  }
  obtemPesoAtleta(){
    return this.peso;
  }
  obtemAlturaAtleta(){
    return this.altura;
  }
  obtemNotasAtleta(){
    return this.notas;
  }
  obtemCategoria(){
    return this.categoria;
  }
    obtemIMC(){
    return this.imc;
  }
  obtemMediaValida(){
    return this.mediaValida;
  }
  }
// Entrada:
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: "+ atleta.obtemAlturaAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());

