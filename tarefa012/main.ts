// Exercicio 1

class Sort {
  static quickSortRecursivo(
    arr: number[],
    start: number = 0,
    end: number = arr.length - 1
  ): number[] {
    if (start < end) {
      const pivotIndex = Sort.pedaco(arr, start, end);
      Sort.quickSortRecursivo(arr, start, pivotIndex - 1);
      Sort.quickSortRecursivo(arr, pivotIndex + 1, end);
    }
    return arr;
  }
  static quickSortIterativo(arr: number[]): number[] {
    const stack = [0, arr.length - 1];
    while (stack.length) {
      const endIndex = stack.pop() as number;
      const startIndex = stack.pop() as number;

      const pivotIndex = Sort.pedaco(arr, startIndex, endIndex);

      if (pivotIndex - 1 > startIndex) {
        stack.push(startIndex);
        stack.push(pivotIndex - 1);
      }

      if (pivotIndex + 1 < endIndex) {
        stack.push(pivotIndex + 1);
        stack.push(endIndex);
      }
    }
    return arr;
  }

  static pedaco(arr: number[], startIndex: number, endIndex: number): number {
    const pivotValue = arr[endIndex];
    let pivotIndex = startIndex;

    for (let i = startIndex; i < endIndex; i++) {
      if (arr[i] < pivotValue) {
        Sort.swap(arr, i, pivotIndex);
        pivotIndex++;
      }
    }

    Sort.swap(arr, endIndex, pivotIndex);
    return pivotIndex;
  }

  static swap(arr: number[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

class TestBenchmarkSortArray {
  main() {
    var tempoParaQuickSortIterativoArr100 = this.medirTempoFuncao(() => {
      Sort.quickSortIterativo(this.generateRandomArrayOfInts(100));
    });

    var tempoParaQuickSortRecursivoArr100 = this.medirTempoFuncao(() => {
      Sort.quickSortRecursivo(this.generateRandomArrayOfInts(100));
    });

    var tempoParaQuickSortIterativoArr1000 = this.medirTempoFuncao(() => {
      Sort.quickSortIterativo(this.generateRandomArrayOfInts(1000));
    });

    var tempoParaQuickSortRecursivoArr1000 = this.medirTempoFuncao(() => {
      Sort.quickSortRecursivo(this.generateRandomArrayOfInts(1000));
    });

    var tempoParaQuickSortIterativoArr10000 = this.medirTempoFuncao(() => {
      Sort.quickSortIterativo(this.generateRandomArrayOfInts(10000));
    });

    var tempoParaQuickSortRecursivoArr10000 = this.medirTempoFuncao(() => {
      Sort.quickSortRecursivo(this.generateRandomArrayOfInts(10000));
    });

    // para 100000
    var tempoParaQuickSortIterativoArr100000 = this.medirTempoFuncao(() => {
      Sort.quickSortIterativo(this.generateRandomArrayOfInts(100000));
    });

    var tempoParaQuickSortRecursivoArr100000 = this.medirTempoFuncao(() => {
      Sort.quickSortRecursivo(this.generateRandomArrayOfInts(100000));
    });

    // console table the results on table

    var tempoQuickSortIterativoAarr100 = "@".repeat(
      Math.round((tempoParaQuickSortIterativoArr100 * 1000) / 300)
    );
    var tempoQuickSortRecursivoAarr100 = "@".repeat(
      Math.round((tempoParaQuickSortRecursivoArr100 * 1000) / 300)
    );

    var tempoQuickSortIterativoAarr1000 = "@".repeat(
      Math.round((tempoParaQuickSortIterativoArr1000 * 1000) / 300)
    );
    var tempoQuickSortRecursivoAarr1000 = "@".repeat(
      Math.round((tempoParaQuickSortRecursivoArr1000 * 1000) / 300)
    );

    var tempoQuickSortIterativoAarr10000 = "@".repeat(
      Math.round((tempoParaQuickSortIterativoArr10000 * 1000) / 300)
    );
    var tempoQuickSortRecursivoAarr10000 = "@".repeat(
      Math.round((tempoParaQuickSortRecursivoArr10000 * 1000) / 300)
    );

    var tempoQuickSortIterativoAarr100000 = "@".repeat(
      Math.round((tempoParaQuickSortIterativoArr100000 * 1000) / 300)
    );
    var tempoQuickSortRecursivoAarr100000 = "@".repeat(
      Math.round((tempoParaQuickSortRecursivoArr100000 * 1000) / 300)
    );
    console.table([
      {
        "Quick Sort Iterativo 100": tempoParaQuickSortIterativoArr100,
        "Quick Sort Recursivo 100": tempoParaQuickSortRecursivoArr100,
      },
      {
        "Quick Sort Iterativo 100": tempoQuickSortIterativoAarr100,
        "Quick Sort Recursivo 100": tempoQuickSortRecursivoAarr100,
      },
    ]);

    console.table([
      {
        "Quick Sort Iterativo 1000": tempoParaQuickSortIterativoArr1000,
        "Quick Sort Recursivo 1000": tempoParaQuickSortRecursivoArr1000,
      },
      {
        "Quick Sort Iterativo 1000": tempoQuickSortIterativoAarr1000,
        "Quick Sort Recursivo 1000": tempoQuickSortRecursivoAarr1000,
      },
    ]);

    console.table([
      {
        "Quick Sort Iterativo 10000": tempoParaQuickSortIterativoArr10000,
        "Quick Sort Recursivo 10000": tempoParaQuickSortRecursivoArr10000,
      },
      {
        "Quick Sort Iterativo 10000": tempoQuickSortIterativoAarr10000,
        "Quick Sort Recursivo 10000": tempoQuickSortRecursivoAarr10000,
      },
    ]);

    console.table([
      {
        "Quick Sort Iterativo 100000": tempoParaQuickSortIterativoArr100000,
        "Quick Sort Recursivo 100000": tempoParaQuickSortRecursivoArr100000,
      },
      {
        "Quick Sort Iterativo 100000": tempoQuickSortIterativoAarr100000,
        "Quick Sort Recursivo 100000": tempoQuickSortRecursivoAarr100000,
      },
    ]);
  }

  medirTempoFuncao(callback: () => void): number {
    // meça o tempo 10 vezes
    const TEMPO_MAXIMO = 1;
    let soma = 0;
    for (let i = 0; i < TEMPO_MAXIMO; i++) {
      soma += this.medirTempoFuncaoUmaVez(callback);
    }
    return Number.parseFloat((soma / TEMPO_MAXIMO).toFixed(2));
  }

  medirTempoFuncaoUmaVez(callback: () => void): number {
    const startTime = process.hrtime.bigint();
    callback();
    const endTime = process.hrtime.bigint();

    return Number(endTime - startTime) / 1e6;
  }

  generateRandomArrayOfInts(size: number): number[] {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * size));
    }
    return arr;
  }
}

new TestBenchmarkSortArray().main();

// Exercicio 2

class Contato {
  nome: string;
  email: string;
  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}

class Agenda {
  contatos: Contato[];
  constructor() {
    this.contatos = [];
  }
  adicionarContato(contato: Contato): void {
    this.contatos.push(contato);
  }

  buscarContato(nomeOuEmail: string): Contato | null {
    for (let i = 0; i < this.contatos.length; i++) {
      if (
        this.contatos[i].nome === nomeOuEmail ||
        this.contatos[i].email === nomeOuEmail
      ) {
        return this.contatos[i];
      }
    }
    return null;
  }

  excluirContato(contato: Contato): void {
    const index = this.contatos.indexOf(contato);
    if (index > -1) {
      this.contatos.splice(index, 1);
    }
  }
}
