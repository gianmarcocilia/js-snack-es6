const bici = [
    {
        nome: "bicicletta1",
        peso: 13
    },
    {
        nome: "bicicletta2",
        peso: 9
    },
    {
        nome: "bicicletta3",
        peso: 8
    },
    {
        nome: "bicicletta4",
        peso: 23
    },
    {
        nome: "bicicletta5",
        peso: 16
    },
    {
        nome: "bicicletta6",
        peso: 7
    },
    {
        nome: "bicicletta7",
        peso: 14
    },
    {
        nome: "bicicletta8",
        peso: 12
    },
    {
        nome: "bicicletta9",
        peso: 8
    },
]

let pesoMinore = bici[0];

bici.forEach((bicicletta) => {
    if (bicicletta.peso < pesoMinore.peso) {
        pesoMinore = bicicletta;
    }
})
console.log(pesoMinore);

const {nome, peso} = pesoMinore;
document.getElementById("result").innerHTML = `<h1>La bicicletta con peso minore è: ${nome} con peso di ${peso}kg</h1>`;

