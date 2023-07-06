// cibler le bouton
// Ecouteur  => click
    // cibler le champ du formulaire pour récupérer sa valeur dans une variable
    // cibler ma liste
    // creer un élément que je rajoute à la liste


// console.log(envoyer);

// envoyer.addEventListener('click', function(){
//     const task = document.querySelector('#todo-text')
//     const listeTask = document.querySelector('#todo-list')
//     const element = document.createElement('li')
//     element.innertext = listeTask
//     element.

// })

const envoyer = document.querySelector('#submit')
const listTask = document.querySelector('#todo-list')  


   
envoyer.addEventListener('click', function(){
    const input = document.querySelector('#todo-text')
    
    if(input.value !=""){
        const elem = document.createElement('li')
        console.log(elem);
        elem.innerText = input.value
        elem.classList.add('list-item')
        listTask.append(elem)
    }
})


// mettre un écouteur sur le ul
// quand on clique sur la liste on affiche en console ok

// ça ne sert à rien de déclarer 2x le ul, autant la mettre dans le scope global
// grâce à l'event (e)on aura accès à chaque item, c'est le vrai élément html sur lequel on a cliqué


// je récupère la balise qui a vraiment été cliqué
// modifier le css de l'élément cliqué pour le barrer


// e.target permet de cibler l'élément qui est réellement cliqué

listTask.addEventListener('click', function(e){
    e.target.style.textDecoration ='line-through'
    // console.log(e.currentTarget);
})

// e.currentTarget
// cible l'élément que l'on écoute <ul>, l'élément dans lequel je me suis
// cible l'élément courant donc celui où on a mis l'écouteur

// 2ème paramètre on le nomme comme on veut

listTask.addEventListener ('dblclick', function(event){
    event.target.remove()
})












   

   



