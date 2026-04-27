const etudiant= "Happy";
const pourcentage = 800;
if(pourcentage >=100 || pourcentage <=0){
    console.log("vous etes en dehors du cadre")

}
else if (pourcentage >= 75){
    console.log(`l'etudiant ${etudiant} a la mention grande distinction`);

}else if(pourcentage >= 50){
    console.log(`l'etudiant ${etudiant} a la mention assez bien`);

}else if(pourcentage >= 75){
    console.log(`l'etudiant ${etudiant} a la mention distintion`);
  
}else if(pourcentage>= 65){
    console.log(`l'etudiant ${etudiant} a la mention assez bien`);

}else if(pourcentage>= 45){
    console.log(`l'etudiant ${etudiant} a la mention echec`);
}
else{
    console.log(pourcentage)
}