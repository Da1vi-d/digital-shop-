const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupération des informations du produit
  const productName = this.querySelector('[name="product_name"]').value;
  const productPrice = this.querySelector('[name="product_price"]').value;
  const quantity = this.querySelector('[name="quantity"]').value;

  // Récupération de l'adresse email
  const email = "doumassihenriette17@gmail.com"; // Modification ici pour définir l'adresse email destinataire

  // Création du corps du mail
  const body = `
    Produit : ${productName}
    Quantité : ${quantity}
    Prix unitaire : ${productPrice} €
  `;

  // Encodage du corps du mail pour l'envoi par email
  const encodedBody = encodeURIComponent(body);

  // Ouverture de l'application mail avec le corps du message et l'adresse email
  const mailtoUrl = `mailto:${email}?subject=Achat%20de%20${productName}&body=${encodedBody}`;
  window.open(mailtoUrl);

  // Affichage du message de succès
  alert('Envoi réussi !');

  // Réinitialisation du formulaire
  form.reset();
});

// En cas d'échec de l'envoi par email
form.addEventListener('error', function(event) {
  event.preventDefault();

  // Affichage du message d'échec
  alert("Échec de l'envoi. Veuillez réessayer.");
});
