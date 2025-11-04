let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

// Charger le son du clic
const clicSound = new Audio("sons/clic.mp3");
clicSound.volume = 0.3;

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        clicSound.currentTime = 0; // permet d’enchaîner les clics rapides
        clicSound.play();

        const valeur = e.target.innerHTML;

        if (valeur === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Erreur";
                string = "";
            }
        } else if (valeur === 'AC') {
            string = "";
            input.value = "";
        } else if (valeur === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += valeur;
            input.value = string;
        }
    });
});
