const calculateButton = document.getElementById("calculate");
const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const isDependentCheckbox = document.getElementById("is-dependent");
const resultParagraph = document.getElementById("result");

calculateButton.addEventListener("click", () => {
    const currentYear = new Date().getFullYear();
    const year = parseInt(yearInput.value);
    const month = parseInt(monthInput.value);
    const isDependent = isDependentCheckbox.checked;

    if (isNaN(year) || isNaN(month)) {
        resultParagraph.innerText = "Ingrese un año y un mes válidos";
        return;
    }

    if (year > currentYear || month < 1 || month > 12) {
        resultParagraph.innerText = "Ingrese un año y un mes válidos";
        return;
    }

    const ageInMonths = (new Date() - new Date(year, month - 1)) / 1000 / 60 / 60 / 24 / 30;
    const ageInYears = ageInMonths / 12;
    let ageRange;

    if (ageInMonths < 24) {
        ageRange = "Infante";
    } else if (ageInMonths < 144) {
        ageRange = "Niño";
    } else if (ageInMonths < 216) {
        ageRange = "Adolescente";
    } else if (ageInYears < 65) {
        ageRange = "Adulto";
    } else if (ageInYears < 85) {
        ageRange = "Adulto mayor";
    } else if (ageInYears >= 85) {
        ageRange = "Años dorados";
    } else {
        ageRange = "Nonato";
    }

    let message = `La persona se encuentra en el rango etario de ${ageRange}.`;

    if (isDependent && (ageInMonths < 216)) {
        message += " Corresponde el pago de asignación familiar.";
    } else if (!isDependent && (ageInMonths < 216)) {
        message += " No corresponde el pago de asignación familiar.";
    }

    resultParagraph.innerText = message;

    const hireYear = parseInt(prompt("Ingrese el año de ingreso a la organización"));
    const hireMonth = parseInt(prompt("Ingrese el mes de ingreso a la organización"));

    if (isNaN(hireYear) || isNaN(hireMonth) || hireYear > currentYear || hireMonth < 1 || hireMonth > 12) {
        return;
    }

    const yearsWorked = currentYear - hireYear;
    const monthsWorked = 12 - hireMonth;

    if (monthsWorked === 12) {
        message += " Usted ha trabajado durante " + yearsWorked + " años en la organización.";
    } else {
        message += " Usted ha trabajado durante " + yearsWorked + " años y " + monthsWorked + " meses en la organización.";
        message += " Faltan " + (12 - monthsWorked) + " meses para completar el próximo año de permanencia.";
    }

    resultParagraph.innerText = message;
});
