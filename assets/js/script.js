const botonCalculo = document.getElementById("calcular");
const inputAnio = document.getElementById("anio");
const inputMes = document.getElementById("mes");
const cargaFamiliarCheckbox = document.getElementById("cargaFamiliar");
const parrafoResultado = document.getElementById("resultado");

botonCalculo.addEventListener("click", () => {
    const anioActual = new Date().getFullYear();
    const anio = parseInt(inputAnio.value);
    const mes = parseInt(inputMes.value);
    const cargaFamiliar = cargaFamiliarCheckbox.checked;

    if (isNaN(anio) || isNaN(mes)) {
        parrafoResultado.innerText = "Ingrese un año y un mes válidos";
        return;
    }

    if (anio > anioActual || mes < 1 || mes > 12) {
        parrafoResultado.innerText = "Ingrese un año y un mes válidos";
        return;
    }

    const edadEnMeses = (new Date() - new Date(anio, mes - 1)) / 1000 / 60 / 60 / 24 / 30;
    const edadEnAnios = edadEnMeses / 12;
    let rangoEtario;

    if (edadEnMeses < 24) {
        rangoEtario = "Infante";
    } else if (edadEnMeses < 144) {
        rangoEtario = "Niño";
    } else if (edadEnMeses < 216) {
        rangoEtario = "Adolescente";
    } else if (edadEnAnios < 65) {
        rangoEtario = "Adulto";
    } else if (edadEnAnios < 85) {
        rangoEtario = "Adulto mayor";
    } else if (edadEnAnios >= 85) {
        rangoEtario = "Años dorados";
    } else {
        rangoEtario = "Nonato";
    }

    let mensaje = `La persona se encuentra en el rango etario de ${rangoEtario}.`;

    if (cargaFamiliar && (edadEnMeses < 216)) {
        mensaje += " Corresponde el pago de asignación familiar.";
    } else if (!cargaFamiliar && (edadEnMeses < 216)) {
        mensaje += " No corresponde el pago de asignación familiar.";
    }

    parrafoResultado.innerText = mensaje;

    const mesContrato = parseInt(prompt("Ingrese el mes de ingreso a la organización"));
    const anioContrato = parseInt(prompt("Ingrese el año de ingreso a la organización"));

    if (isNaN(anioContrato) || isNaN(mesContrato) || anioContrato > anioActual || mesContrato < 1 || mesContrato > 12) {
        return;
    }

    const aniosTrabajados = anioActual - anioContrato;
    const mesesTrabajados = 12 - mesContrato;

    if (mesesTrabajados === 12) {
        mensaje += " Ha trabajado durante " + aniosTrabajados + " años en la organización.";
    } else {
        mensaje += " Ha trabajado durante " + aniosTrabajados + " años y " + mesesTrabajados + " meses en la organización.";
        mensaje += " Faltan " + (12 - mesesTrabajados) + " meses para completar el próximo año de permanencia.";
    }

    parrafoResultado.innerText = mensaje;
});
