class Animal {
  nome: string;
  idade: number;
  som: string;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    this.som = "";
  }

  emitirSom(): void {
    console.log(this.som);
  }
}

abstract class AnimalQueCorre extends Animal {
  abstract corre(): void;
}

class Cachorro extends AnimalQueCorre {
  constructor(nome: string, idade: number) {
    super(nome, idade);
    this.som = "Auau";
  }
  corre(): void {
    console.log("O cachorro está correndo.");
  }
}

class Cavalo extends AnimalQueCorre {
  constructor(nome: string, idade: number) {
    super(nome, idade);
    this.som = "Relincho";
  }
  corre(): void {
    console.log("O cavalo está correndo.");
  }
}

class Preguica extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
    this.som = "Zzzz";
  }

  sobeEmArvore(): void {
    console.log("A preguiça está subindo na árvore.");
  }
}

class AnimalTeste {
  criarAnimais(): Animal[] {
    const cachorro = new Cachorro("Dog", 3);
    const cavalo = new Cavalo("Horse", 5);
    const preguica = new Preguica("Sloth", 2);

    return [cachorro, cavalo, preguica];
  }

  testarAnimais(): void {
    const animais = this.criarAnimais();

    animais.forEach((animal) => {
      animal.emitirSom();
    });
  }
}

class Veterinario {
  examinar(animal: Animal): void {
    console.log(`Examinando ${animal.nome}`);
    animal.emitirSom();
  }
}

class Zoologico {
  jaulas: Animal[];

  constructor() {
    this.jaulas = [];
  }

  adicionarAnimal(animal: Animal): void {
    this.jaulas.push(animal);
  }

  emitirSons(): void {
    this.jaulas.forEach((animal) => {
      try {
        animal.emitirSom();
        if (animal instanceof AnimalQueCorre) {
          (animal as AnimalQueCorre).corre();
        } else {
          throw new AnimalInvalidoException("Animal não pode correr", animal);
        }
      } catch (e) {
        // if AnimalInvalidoException
        if (e instanceof AnimalInvalidoException) {
          var animalType = e.animal.constructor.name;
          console.log(
            `O animal de nome ${e.animal.nome} não pode correr, pois é um ${animalType}.` 
          );
        }
      }
    });
  }
}
// AnimalInvalidoException
class AnimalInvalidoException extends Error {
  // Animal animal
  animal: Animal;
  constructor(mensagem: string, animal: Animal) {
    super(mensagem);
    this.animal = animal;
    this.name = "AnimalInvalidoException";
  }
}

const teste = new AnimalTeste();
teste.testarAnimais();
console.log("====================================");

const veterinario = new Veterinario();
veterinario.examinar(new Cachorro("Dog", 3));
veterinario.examinar(new Cavalo("Horse", 5));
veterinario.examinar(new Preguica("Sloth", 2));
console.log("====================================");

const zoologico = new Zoologico();
zoologico.adicionarAnimal(new Cachorro("Belinha", 3));
zoologico.adicionarAnimal(new Cachorro("Rex", 2));
zoologico.adicionarAnimal(new Cachorro("Mel", 8));
zoologico.adicionarAnimal(new Cachorro("Babá", 3));
zoologico.adicionarAnimal(new Cavalo("Tinoco", 5));
zoologico.adicionarAnimal(new Cavalo("Trovão", 5));
zoologico.adicionarAnimal(new Cavalo("Guilherme", 5));
zoologico.adicionarAnimal(new Cavalo("Estrela", 5));
zoologico.adicionarAnimal(new Preguica("Macaco", 2));
zoologico.adicionarAnimal(new Preguica("Soninho", 2));

zoologico.emitirSons();
