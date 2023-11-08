const bici = [
    {
        nome: "bicicletta1",
        peso: "13kg"
    },
    {
        nome: "bicicletta2",
        peso: "9kg"
    },
    {
        nome: "bicicletta3",
        peso: "8kg"
    },
    {
        nome: "bicicletta4",
        peso: "23kg"
    },
    {
        nome: "bicicletta5",
        peso: "16kg"
    },
    {
        nome: "bicicletta6",
        peso: "7kg"
    },
    {
        nome: "bicicletta7",
        peso: "14kg"
    },
    {
        nome: "bicicletta8",
        peso: "12kg"
    },
    {
        nome: "bicicletta9",
        peso: "8kg"
    },
]

const [  , , , , , leggera,] = bici;
console.log(leggera);

const biciElem = document.querySelector("div");
biciElem.innerHTML = `<h1>La bicicletta con peso minore è:</h1> 
                    <h3>${leggera.nome} ${leggera.peso}</h3>`;


