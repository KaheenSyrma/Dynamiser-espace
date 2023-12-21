document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("commentForm");
  const commentList = document.getElementById("commentList");

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs du prénom, du nom et du commentaire
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const commentTextInput = document.getElementById("message");

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const commentText = commentTextInput.value;

    // Crée un nouvel élément de liste pour le commentaire avec prénom et nom
    const commentItem = document.createElement("li");
    commentItem.textContent = `${firstName} ${lastName}: ${commentText}`;

    // Ajoute le nouvel élément à la liste des commentaires
    commentList.appendChild(commentItem);

    // Efface les champs de saisie
    firstNameInput.value = "";
    lastNameInput.value = "";
    commentTextInput.value = "";
  });
});
