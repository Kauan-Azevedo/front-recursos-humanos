const tbody = document.querySelector(".table-body");
const calcularButton = document.querySelector(".calcular-button");
const salarioBrutoInput = document.querySelector(".resultado-bruto")
const salarioLiquidoInput = document.querySelector(".resultado-liquido")
const salarioClear = document.querySelector(".salario-clear")

function calcular() {
    const valor_hora = document.querySelectorAll(".salario-form-input")[1];
    const hora_trabalho = document.querySelectorAll(".salario-form-input")[2];
    const salarioBruto = valor_hora.value * hora_trabalho.value;

    salarioBrutoInput.value = `R$ ${salarioBruto.toFixed(2)}`;

    calcularImpostoDeRenda(salarioBruto);
}

function calcularImpostoDeRenda(salarioBruto) {
    let impostoDevido = 0;
    let impostoinss = 0;

    if (salarioBruto <= 2112) {
        impostoDevido = 0;
    } else if (salarioBruto >= 2112.1 && salarioBruto <= 2640 ) {
        impostoDevido = (salarioBruto - 528);
    } else if (salarioBruto >= 2212.01 && salarioBruto <= 2826.65) {
        impostoDevido = salarioBruto * 0.075;
    } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        impostoDevido = salarioBruto * 0.15;
    } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        impostoDevido = salarioBruto * 0.225;
    } else {
        impostoDevido = salarioBruto * 0.275;
    }

    if (salarioBruto <= 1412) {
        impostoinss = salarioBruto * 0.075;
    } else if (salarioBruto >= 1412.01 && salarioBruto <= 2666.68 ) {
        impostoinss = salarioBruto * 0.09;
    } else if (salarioBruto >= 2666.69 && salarioBruto <= 4000.03) {
        impostoinss = salarioBruto * 0.12;
    } else if (salarioBruto >= 4000.04  && salarioBruto <= 7786.02) {
        impostoinss = salarioBruto * 0.14;
   }

    let salario_um = impostoDevido;
    let salario_dois = salario_um - impostoinss;

    console.log("salario bruto " + salarioBruto);
    console.log("imposto devido " + impostoDevido);

    console.log("salario um " + salario_um);
    console.log("imposto inss " + impostoinss);

    console.log("salario dois " + salario_dois  )

    salarioLiquidoInput.value = `R$ ${salario_dois.toFixed(2)}`;
}

function clear_form() {
    const inputs = document.querySelectorAll(".salario-form-input");

    for(let i=0;i <= inputs.length;i++) {
        inputs[i].value = "";
    }
}


const func_button = document.querySelector("btn-funcionario")
function valid_form() {
    const inputs = document.querySelectorAll("form-input");

    for(let input in inputs) {
        if(input.value == "" || input.value == undefined ) {
            alert("Preencha todos os campos!")
        } else {
            alert("Funcionario adicionado com sucesso")
        }
    }
}

if (func_button) {
    func_button.addEventListener("submit", (e) => {
        e.preventDefault();
        valid_form();
    });
}

calcularButton.addEventListener("click", calcular);
salarioClear.addEventListener("click", clear_form);