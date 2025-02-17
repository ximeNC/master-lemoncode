console.log('----------------Ejercicio 5--------------------')

class SlotMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const [booleano1, booleano2, booleano3] = [this.randomBool(), this.randomBool(), this.randomBool()];
    console.log('Ejercicio 5:', `Booleanos: ${booleano1}, ${booleano2}, ${booleano3}`);

    if (booleano1 && booleano2 && booleano3) {
      console.log('Ejercicio 5:', `Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log('Ejercicio 5:', 'Good luck next time!!');
    }
  }

  randomBool() {
    return Math.random() < 0.5; 
  }
}

// Ejemplo:
const machine1 = new SlotMachine();
machine1.play();

