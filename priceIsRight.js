// Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let form = document.querySelector('#formulaire');

// Cacher l'erreur
error.style.display = 'none';

//  Générer un nombre aléatoire
let randomNumber = Math.floor((Math.random() * 1000) + 1);
let tries        = 0;
let choosenNumber;
// console.log(randomNumber);

//  Créer la fonction vérifier

function verify(number) {
  let instruction = document.createElement('div');
  if (number < randomNumber) {
    //display it's more
    instruction.textContent = "# " + tries + ' ( '+(choosenNumber)+ ' )' + ", " + "it's more !! 👍🏻";
    //add #1 (choosernumber) c'est plus !
    //add css classes
    instruction.className = "instruction plus";
  }
  else if(number > randomNumber){
    // display it's less
    //add #1 (choosernumber) c'est moins !
    instruction.textContent = "# " + tries + ' ( '+(choosenNumber)+ ' )' + ", " + "it's less !! 👎🏻";

    //add css classes
    instruction.className = "instruction moins";
  }
  else {
    // display congratulation !
    instruction.textContent = "# " + tries + ' ( '+(choosenNumber)+ ' )' + ", " + "🏆 YAYYY you found the right price !! 😎 CONGRATULATIONS 🏆 !";

    //add #1 (choosernumber) you found !
    //add css classes instruction et fini
    instruction.className = "instruction fini";

    //user can not enter another value
    input.disabled = true;

  }
  // add the element in first plan to display it
  document.querySelector('#instructions').prepend(instruction);// mettre le dernier en premier
}


// Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
  if(isNaN(input.value)) {
    //display an error
    error.style.display = 'inline';
  }
  else {
    //cacher le message d'erreur
    error.style.display = 'none';
  }
});

//  Agir à l'envoi du formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault(); // annuler l'event de redirection, on garde l'info en DOM
  if (isNaN(input.value) || input.value == '') {
    // mettre la bordure du formulaire en rouge
    input.style.borderColor = "red";
  }
  else{
    tries ++;
    //bordure en gris
    input.style.borderColor = "silver";
    choosenNumber = input.value;
    input.value = '';
    verify(choosenNumber);
  }
});
