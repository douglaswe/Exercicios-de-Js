//Calculadora feita com função fábrica (Factory function)

function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode == 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (Number.isNaN(conta) || typeof conta !== "number") {
          alert("Conta invalida");
          return;
        }
        this.display.value = conta;
      } catch (e) {
        alert("Conta invalida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }
        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
      this.display.focus();
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();

// Calculadora feita com função construtora (constructor function)

function Calculadora2() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode == 13) {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (Number.isNaN(conta) || typeof conta !== "number") {
        alert("Conta invalida");
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert("Conta invalida");
      return;
    }
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };
  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.btnParaDisplay(el.innerText);
      }
      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }
      if (el.classList.contains("btn-del")) {
        this.apagaUm();
      }
      if (el.classList.contains("btn-eq")) {
        this.realizaConta();
      }
    });
  };
  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
    this.display.focus();
  };
}

const calculadora2 = new Calculadora2();
calculadora2.inicia();
