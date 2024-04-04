function calcularImpostoDeRenda(salarioBruto) {
    let impostoDevido = 0;

    if (salarioBruto <= 2640) {
        impostoDevido = 0;
    } else if (salarioBruto <= 2826.65) {
        impostoDevido = (salarioBruto - 528) * 0.075;
    } else if (salarioBruto <= 3751.05) {
        impostoDevido = (salarioBruto - 528) * 0.15;
    } else if (salarioBruto <= 4664.68) {
        impostoDevido = (salarioBruto - 528) * 0.225;
    } else {
        impostoDevido = (salarioBruto - 528) * 0.275;
    }

    return impostoDevido;
}