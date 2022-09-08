const nicknames = [
    "Mariii", "Marini", "Marinita",
    "Marinadorr", "Mira", "Marischkaa",
    "Marinade", "Marli", "Marina dor", 
    "Risha", "Marisabel", "Mariwis",
    "Maritrini", "Måřįņā", "Mari",
    "Marinah", "Maren", "Mariam",
    "Marian", "Mariana", "Marianna",
    "Marianne", "Marin", "Marine",
    "Marion", "Marnie", "Maryam",
    "Maryann", "Maryanne", "Maureen",
    "Miriam", "Mirren", "Myrna"
];

document.getElementById("generate").onclick = function() {
    const randomNick = nicknames[Math.floor(Math.random() * nicknames.length)];
    setTimeout(() => {
        document.getElementById("nick").innerHTML = `${randomNick}`;
    }, 300);
}


