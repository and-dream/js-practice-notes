
const connexionForm = document.querySelector('#connexion');

connexionForm.addEventListener('submit', function(e){
    e.preventDefault();
    removeMessage()
    isValidForm()

    const response = isValidForm()
    if (response == true){
        
    }
}
)

    // const messages = document.querySelectorAll('.erreur')
    // avant de re-creer les messages il faut qu'il les supprime

    // forEach est une méthode qui existe car on a utilisé un querySelector

    // c'est une méthode de l'obet NodeList
    // la fonction forEach me permet d'initialiser un argument, en guise d'argument chacune des lignes
    // c'est un paramètre donc on choisit le mot qu'on veut
    // pour chacun des messages qu'on veut

    // messages.forEach(function (message){
    //     message.remove()
    // })
    
    // appeler la méthode remove()



    // for(i = 0; i <messages.length; i++){
        // messages[i].remove()
    // };

    // console.log(messages[i]);
    // message [i] c'est chaque ligne, chaque élément du tableau

    // for (let error of messages){
    //     error.remove()     
    // }
    // pour chaque ligne du tableau il met dans une variable error (on lit un peu à l'envers)
    
    // messages.forEach(function(element){
    //     console.log(messages);
    // })
    




    function getMessageError(message, element){
        const elem = document.createElement('div')
        elem.innerText = message
        elem.classList.add('erreur')
        element.parentElement.append(elem) 
    }

 
    function removeMessage (){
        const messages = document.querySelectorAll('.erreur')
        for (let error of messages){
            error.remove()     
        }
    }


    
    // je sauvegarde une fonction fléchée dans une variable
    
    const isValidForm = ()=> {
        let response = false
        
        const userName = document.querySelector('#name');
        const userEmail = document.querySelector('#mail');
        const userPassword = document.querySelector('#pswd');
        const confirmPassword = document.querySelector('#confirm'); 
        
        
        if(userName.value == ""){       
            getMessageError('Veuillez entrer un nom', userName)  
            
        }  
    
    
        if(userEmail.value == ""){
            getMessageError('Veuillez entrer un email', userEmail)  
                
        }  
    
      
        if(userPassword.value == ""){
            getMessageError('Veuillez entrer un mot de passe', userPassword)   
               
        }  
        
        if(confirmPassword.value == ""){
            getMessageError('Veuillez confirmer le mot de passe', confirmPassword)  
               
        }  
    
        if(userPassword.value != confirmPassword.value){
            getMessageError('Les mots de passe ne correspondent pas', confirmPassword)     
        }else {
            response = true
        }
        return response 
    }
    

    // si je met la fonction à la fin il n'y a aucun message qui va s'afficher, JS va créé les messages et va les supprimer
    // on place la fonction au début

// Mettre un ecouteur sur le formulaire => submit
    // Sur chaque champ s'il est vide
        // creer un element => message d'erreur
        // si les mots de passe correspondent
        // creer un element => message d'erreur

// Creer une fonction pour Afficher les messages au lieu de refaire la même chose en boucle

// On mettra en fonction la verification du formulaire


    // on peut mettre la fonction dans une variable

    // const removeMessageError = function () {
    //     const messages = document.querySelectorAll('.erreur')
    //     for (let error of messages){
    //         error.remove()     
    //     
