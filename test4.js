const maSource ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function genererMonDePasse(listeDeCaracteres) {
    let motDePasse = "";
    for ( i = 0; i < 10; i++) {
        const indexAleatoire = Math.floor(Math.random() * listeDeCaracteres.length);
        
        const chiffreChoisit = listeDeCaracteres[indexAleatoire];
        motDePasse += chiffreChoisit;
    
    }
    return motDePasse;
}
const monMotDePasse = genererMonDePasse(maSource);
console.log("Voici votre mot de passe généré aléatoirement en string:", monMotDePasse);
console.log("Voici votre mot de passe généré aléatoirement en tableau:", monMotDePasse.split(""));
