const tableau1 = [1, 2, 3, 4, 5];
const tableau2 = [6, 7, 8, 9, 10];
const tableau3 = [11, 12, 13, 14, 15];
const tableauMoyenne =[];
const moyenneTableau = (tableau) => {
    const somme = tableau.reduce((acc, val) => acc + val, 0);
    return  somme / tableau.length;
};
tableauMoyenne.push(moyenneTableau(tableau1),moyenneTableau(tableau2),moyenneTableau(tableau3));
console.log('voici le tableau des moyennes:', tableauMoyenne);