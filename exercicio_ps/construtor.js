const obj ={
    nome:"pedro"
}

const obj2 = {...obj}

console.log(obj)
console.log(obj2)



function Animal(Nome, especie, cor, peso) {
    this.Nome = Nome;
    this.especie = especie;
    this.cor = cor;
    this.peso = peso;
    this.emitirSom = function(){
        console.log(`${this.Nome} faz um som.` )
    }
}

const rex = new Animal("rex","cachorro","preto","20.3");
//rex.emitirSom()

const max = new Animal("max","gato","preto","20.3");
//max.emitirSom();

Animal.prototype.rolar = function(){
    console.log(`${this.Nome} está rolando`);
}

//max.rolar();

class Pessoa{
    constructor(paramNome, paramidade){
        this.Nome = paramNome;
        this.Idade = paramidade
        this.apresenstacao = function apresenstar(){
            console.log(`olá sou ${this.Nome} e tenho ${this.Idade}`);
        }
    }
}

class Crianca extends Pessoa {
      brincando(){
console.log(`${this.Nome} está brincando`);
      }
}

const pedro = new Pessoa ("pedro", "12");
pedro.apresenstacao()

//pedro.brincando() pedro.brincando is not a function


const joao = new Crianca("joao", "23" );
joao.apresenstacao()

joao.brincando()