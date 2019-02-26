// Pour cette fonction comme toutes les suivantes : exécute la fonction dans ton code JS en l'appelant en bas avec un changeTitles();. Dès que tu fais une modification sur la fonction, rafraîchis la page HTML dans ton navigateur pour voir si la modification apportée est OK.

// Modification n°1

// Écris une fonction changeTitles() qui va :
function changeTitles() {
//     Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
	let title = document.getElementsByClassName("jumbotron-heading")[0];
	title.innerHTML = "Ce que j'ai appris à THP"
	console.log(title);

//     Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
	let underTitle = document.getElementsByClassName("lead text-muted")[0];
	underTitle.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
	console.log(underTitle);
}


// Modification n°2

// Ecris une fonction changeCallToActions() qui va:
function changeCallToActions() {
//     Changer le texte du bouton "Main call to action" en "OK je veux tester !"
	let button1 = document.getElementsByClassName("btn btn-primary my-2")[0];
	button1.innerHTML= "OK je veux tester !"

//     Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
	button1.setAttribute("href", "http://www.thehackingproject.org");
	console.log(button1);

//     Changer le texte du bouton "Secondary action" en "Non Merci"
	let button2 = document.getElementsByClassName("btn btn-secondary my-2")[0];
	button2.innerHTML = "Non Merci";

//     Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"
	button2.setAttribute("href", "https://www.pole-emploi.fr/accueil/");
	console.log(button2);
}


// Modification n°3

// Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :
function changeLogoName() {
//     Change "Album" par "The THP Experience" ;
	let albumTitle = document.getElementsByTagName("strong")[0];
	albumTitle.innerHTML = "The THP Experience";
	
//     Change la taille du texte pour le passer en 2em.
	albumTitle.setAttribute("style", "font-size: 2em;");
	console.log(albumTitle);
}


// Modification n°4

// Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :
// Une petite boucle des familles va être utile ici.
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
function populateImages() {
	let imgs = document.getElementsByTagName("img");
	for (let i = 0; i < imgs.length; i++) {
		imgs[i].setAttribute("src", imagesArray[i]);
		console.log(imgs[i]);
	}

}


// Modification n°5

// Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle. 
// Je donne ci-dessous 2 coups de main sur cette modification : les plus à l'aise peuvent essayer de ne pas les lire.
function deleteLastCards() {
	let cards = document.getElementsByClassName("card mb-4 box-shadow");
	console.log(cards);
	console.log(cards.length);

	for (let j = 0; j < 3; j++) {
		for (let i = 0; i < cards.length; i++) {
			if (i == cards.length - 1) { 
				cards[i].remove();
			}
		}
		console.log(cards.length);
	}
}


// Modification n°6

// Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :
function changeCardsText() {
	let cardsValue = ["Carte HTML : \"L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web\"", "Carte CSS : \"Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML\"", "Carte JS : \"JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.\""];

	let cards = document.querySelectorAll("div.card.mb-4.box-shadow p.card-text");

	for (let i = 0; i < cards.length; i++) {
		if (i == 3) { break ;}

		cards[i].innerHTML = cardsValue[i];
		console.log(cards[i]);
	}
	console.log(cards.length);
}

//     Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
//     Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
//     Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."

// Essaye de mettre ça dans une boucle.


// Modification n°7

// Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards pour les passer en vert. 
function changeViewButtons() {
	let cards = document.querySelectorAll("div.card.mb-4.box-shadow div.btn-group");
	for (let i = 0; i < cards.length; i++) {
		viewButton = cards[i].getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
		viewButton.setAttribute("class", "btn-success");
		console.log(viewButton);
	}	
}
// En gros il faut leur mettre la classe btn-success et enlever btn-outline-secondary. Les boutons Edit ne doivent pas changer. Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !


// Modification n°8

// Allez, on finit sur une modification un peu tordue :
function addDiv() {
//     Rajoute une <div> portant la classe row juste après celle qui contient déjà les cards actuelle.
	let divContainer = document.getElementsByClassName("container")[3];
	console.log(divContainer);
	let div = document.createElement("div");
	div.setAttribute("class", "row");
	divContainer.appendChild(div);

//     Déplace la 3ème card (JS) de la première <div class="row"> vers la deuxième que tu viens de créer.
	let cards = divContainer.getElementsByClassName("row")[0];
	let thirdCard = cards.getElementsByClassName("col-md-4")[2];
	console.log(thirdCard);
	div.appendChild(thirdCard);
}

// Elle est pas belle cette pyramide inversée en front 👳? (comment ça "obsédés par les pyramides" ?).


changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();
addDiv();