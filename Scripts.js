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



    
    
    
    
    //ajout d'une div ayant comme class "flex space-x-4 text-sm text-gray-500", 
    const commentItem = document.createElement("div");
    commentItem.className = "flex space-x-4 text-sm text-gray-500";
    commentList.appendChild(commentItem);

    //puis une autre avec "flex-1 py-10 border-t border-gray-200", 
    const commentItem2 = document.createElement("div");
    commentItem2.className = "flex-1 py-10 border-t border-gray-200";
    commentItem.appendChild(commentItem2);

    //une autre avec une h3 ayant comme class "font-medium text-gray-900" et il devra affiche le nom et prénom
    const commentItem3 = document.createElement("h3");
    commentItem3.className = "font-medium text-gray-900";
    commentItem3.textContent = firstName + " " + lastName;
    commentItem2.appendChild(commentItem3);

    //une dernière div ayant comme class "prose prose-sm mt-4 max-w-none text-gray-500" et contenant le commentaire 
    const commentItem4 = document.createElement("div");
    commentItem4.className = "prose prose-sm mt-4 max-w-none text-gray-500";
    commentItem4.textContent = commentText;
    commentItem2.appendChild(commentItem4);




    // Ajoute le nouvel élément à la liste des commentaires
    commentList.appendChild(commentItem);
    

    // Efface les champs de saisie
    firstNameInput.value = "";
    lastNameInput.value = "";
    commentTextInput.value = "";
  });
});
