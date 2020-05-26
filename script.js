const url = 'https://blockchain.info/ticker';

function recupererPrix() {
    //Créer une requête
    let requete = new XMLHttpRequest();//Création d'un objet

    requete.open('GET', url);//Premier paramètre GET / POST, le deuxième paramètre c'est: url
    requete.responseType = 'json';
    requete.send();// On envoi notre requête


    //Dès que l'on reçoit une rpéponse, cette fonction est executée
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response; // On stock la réponse
                let prixEuros = reponse.EUR.last;
                document.querySelector('#price_label').textContent = prixEuros;
                console.log(reponse);
            }
            else {
                alert('Un problème est intervenu, merci de revenir ultérieurement !');
            }
        }
    }
}            
setInterval (recupererPrix,1000);
    console.log('Prix actualisé !');
            