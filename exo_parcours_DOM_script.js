	// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
	let nbrOfElementWichTagNameIsP = document.getElementsByTagName('p');
	console.log("Q1 : " + nbrOfElementWichTagNameIsP.length);

	// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
	let coucouElements = document.getElementById("coucou");
	console.log("Q2 : " + coucouElements.textContent);

	// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
	let urlOfTheFirstLink = document.getElementsByTagName('a')[2];
	console.log("Q3 : " + urlOfTheFirstLink.href);

	// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
	let compteMoiElements = document.getElementsByClassName("compte-moi");
	console.log("Q4 : " + compteMoiElements.length);

	// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
	let liCompteMoiElements = document.querySelectorAll("li.compte-moi");
	console.log("Q5 : " + liCompteMoiElements.length); 

	// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
	let liElements = document.querySelectorAll("ul li.compte-moi");
	console.log("Q6 : " + liElements.length);

	// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…
	// La page contient un seul élément <div>. 
	// Celui-ci contient 2 éléments "unordered list" ou <ul>. 
	// Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
	let secondUlElement = document.querySelectorAll("div ul")[1];
	let firstLiElement = secondUlElement.getElementsByTagName('li')[0];
	console.log("Q7 : " + firstLiElement.textContent);