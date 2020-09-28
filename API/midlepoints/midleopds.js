function procentCoris(mas) {
    let counterA1 = 0;
    let counterA2 = 0;
    let counterA3 = 0;
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] == 'А1') {
            counterA1++;
        } else if (mas[i] == 'А2') {
            counterA2++
        } else if (mas[i] == 'А3') {
            counterA3++
        }
    }
    let procentA1 = (counterA1 / mas.length) * 100;
    let procentA2 = (counterA2 / mas.length) * 100;
    let procentA3 = (counterA3 / mas.length) * 100;
    return {procentA1: procentA1, procentA2: procentA2, procentA3: procentA3};
}


function procentNedolik(mas) {
    let counterB1 = 0;
    let counterB2 = 0;
    let counterB3 = 0;
    let counterB4 = 0;
    let counterB5 = 0;
    let counterB6 = 0;
    let none = 0;
    for (let i = 0; i < mas.length; i++) {

        if (mas[i] == 'Б1') {
            counterB1++
        } else if (mas[i] == 'Б2') {
            counterB2++
        } else if (mas[i] == 'Б3') {
            counterB3++
        } else if (mas[i] == 'Б4') {
            counterB4++
        } else if (mas[i] == 'Б5') {
            counterB5++
        } else if (mas[i] == 'Б6') {
            counterB6++
        }
        else none++;

    }
    let procentB1 = (counterB1 / mas.length) * 100;
    let procentB2 = (counterB2 / mas.length) * 100;
    let procentB3 = (counterB3 / mas.length) * 100;
    let procentB4 = (counterB4 / mas.length) * 100;
    let procentB5 = (counterB5 / mas.length) * 100;
    let procentB6 = (counterB6 / mas.length) * 100;
    let procentNone = (none / mas.length) * 100;
    return {
        procentB1: procentB1,
        procentB2: procentB2,
        procentB3: procentB3,
        procentB4: procentB4,
        procentB5: procentB5,
        procentB6: procentB6,
        procentNone: procentNone
    };
}


module.exports = async function (mas) {
    let newMasData = [];
    for (let i = 0; i < mas.length; i++) {
        let id = mas[i].id;
        let objProcesCoris =  procentCoris(mas[i].masCoris);
        let objProcesNedolik = procentNedolik(mas[i].masNedolik);
       /* console.log({id:id,procentCoris:objProcesCoris,procentNedolik:objProcesNedolik});*/
        newMasData.push({id:id,procentCoris:objProcesCoris,procentNedolik:objProcesNedolik});
    }
    return newMasData;
};