/* exo 1 */
nVarNom = prompt("Quel est votre nom?");
textLimit(nVarNom, 10);
  console.log("bonjour", nVarNom);
  alert ("bonjour " + nVarNom);

function textLimit(field, maxlen) {
   if (field.length > maxlen) {
      field = field.substring(0, maxlen);
      alert('Votre texte est trop long!');
     return prompt("quel est votre nom?")
     alert("bonjour "+ nVarNom)
    
   }
}
/*correction*/
textLimit(10);

function textLimit(maxlen) {
  field = prompt("Quel est votre nom?");
  console.log(field);
   if (field.length > maxlen) {
      alert('Votre texte est trop long!');
     textLimit(maxlen);
     return;
   }
     alert("bonjour "+ field);
     return;
      }

/* exo 2 */


/* exo 3 */


/* exo 4 */


/* exo 5 */
/* calcul la moyenne de X note peut importe leur valeur  */
    var i=0;
            var somme=0;
            var moyenne=0;
            var nb_notes=0;
            nb_notes=prompt("Souhaitez-vous faire la moyenne de combien de notes ?","Nb de Notes");
            nb_notes=parseInt(nb_notes);
            notes = new Array(nb_notes);
            for(i=1;i<=nb_notes;i++)
            {
                 
                note_i=prompt("Entrez la note");
                notes[i-1]=parseInt(note_i);
                somme+=notes[i-1];
            }
            moyenne=(somme/nb_notes);
            alert("La moyenne des notes est : "+moyenne);
