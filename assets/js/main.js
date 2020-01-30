document.addEventListener("DOMContentLoaded", function(event){
    console.log('loaded');

    const menus = [

        {
            titre: "Menu 1",
            id : 1,
            entre : "Carrottes rapés", 
            plat: "Pouletrotie" , 
            fromage : "Cantal", 
            dessert : "Tarte au fraise"
        },
        {
            titre: "Menu 2",
            id :2,
            entre : "Salade landaise", 
            plat: "Boeuf Bourgignon" , 
            fromage : "Saint Nectaire", 
            dessert : "Mousse au chocolat"
        },
        {
            titre: "Menu 3",
            id : 3,
            entre : "Saumon", 
            plat: "Pot au feu" , 
            fromage : "Beaufort", 
            dessert : "Compote maison"
        },
        {
            titre: "Menu 4",
            id :4,
            entre : "Foie Gras", 
            plat: "Dinde aux marrons" , 
            fromage : "Camenbert", 
            dessert : "Glaces"
        }
    ];

    []

        for(let i = 0 ; i < menus.length ; i++) {


        const menu = document.getElementById('menu')// récupération de l'élément menu
        const article = document.getElementsByClassName('article')[0]
        const clone = article.cloneNode(true)
        clone.id = 'member' + menus[i].id.toString()// bonus ajouter id unique a chaque clone
        const title = document.createElement("h2");// création nvlle element h2 ds variable
        title.innerHTML = menus[i].titre


        /*const elem = document.createElement("p");// créer nvelle element p ds variable
        elem.innerHTML = menus[i].entre + ' ' + menus[i].plat + ' ' + menus[i].fromage + ' ' + menus[i].dessert */// ajout contenu nvelle utilisateur en cours

         const elem2 = document.createElement("p");
         elem2.innerHTML = menus[i].entre 

         const elem3 = document.createElement("p");
         elem3.innerHTML = menus[i].plat // ajout contenu nvelle utilisateur en cours

         const elem4 = document.createElement("p");
         elem4.innerHTML = menus[i].fromage // ajout contenu nvelle utilisateur en cours  

         const elem5 = document.createElement("p");
         elem5.innerHTML = menus[i].dessert

        
        clone.appendChild(title);
        clone.appendChild(elem2);
        clone.appendChild(elem3);
        clone.appendChild(elem4);
        clone.appendChild(elem5);
        //clone.appendChild(elem);// injection de l'element ds le clone
        menu.appendChild(clone);//injection du clone ds DOM
        clone.classList.remove('hidden');//RETIRE HIDDEN AU CLONE

    } 
})
