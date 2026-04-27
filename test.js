

const fonction = (a,b,c)=>{
    const delta = Math.pow(b, 2) - 4 * a * c;
    console.log(`la valeur de delta  pour la fonction ${a}x^2 + ${b}x + ${c} est: ${delta}`);
    if (delta > 0) {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      console.log(`voici les racine: ${x1} et ${x2}`);
    } else if (delta === 0) {
      const x = -b / (2 * a);
      console.log(`la racine est : ${x}`);
    } else {
      console.log("pas de racine");
    }

}
fonction(4,8,4);
