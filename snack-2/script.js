const squadre = [
    {
        nome: "squadra1",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra2",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra3",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra4",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra5",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra6",
        punti: 0,
        falli: 0
    },
]

function casualNumber(min, max) {
    let numero = Math.floor((Math.random() * max) + min);
    return numero;
}

squadre.forEach(squadra => {
    squadra.punti = casualNumber(1, 100);
    squadra.falli = casualNumber(1, 30);
})
console.log(squadre);

