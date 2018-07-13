window.onload = () => {
    eventListeners();
};

const postingContainer = document.getElementById('publications'); // contenedor de publicaciones

eventListeners = () => {
     document.getElementById('postMessage').addEventListener('click', addPost); // evento click para enviar publicaciones
     document.addEventListener('click', deletePost); // ejecutar evento borrar local storage
     //document.addEventListener('DOMContentLoaded', savedInlocalStorage); // ejecutar evento de traer los elementos guardados en el dom
}

function postingMessages(message){
    // DOM
    const postingUser = document.createElement('div'); // creo un elemento div
    const paragraph = document.createElement('p'); // creo un elemento parrafo
    const textPost = document.createTextNode(message); // creo el texto de la publicacion obtenido del mensaje escrito del usuario

    // creo los iconos que irán en la publicación
    const likeHeart = document.createElement('i'); 
    const iconHeart = document.createTextNode('favorite_border')
    const editButton = document.createElement('i');
    const iconEdit = document.createTextNode('favorite_border')
    const commentButton = document.createElement('i');
    const iconComment = document.createTextNode('delete_forever')
    const deleteButton = document.createElement('i');
    const iconTrash = document.createTextNode('delete_forever')

    // atributos
    paragraph.setAttribute('class', 'col s12') // atributos de mi parrafo
    deleteButton.setAttribute('id', 'delete');
    deleteButton.setAttribute('class', 'btn');
    likeHeart.setAttribute('class', 'material-icons btn');
    deleteButton.setAttribute('class', 'material-icons btn');
    editButton.setAttribute('class', 'material-icons btn');
    commentButton.setAttribute('class', 'material-icons btn');

    // asigno los hijos al padre
    commentButton.appendChild(iconComment);
    editButton.appendChild(iconEdit);
    likeHeart.appendChild(iconHeart);
    deleteButton.appendChild(iconTrash);
    paragraph.appendChild(textPost);
    postingUser.appendChild(paragraph);
    postingUser.appendChild(commentButton);
    postingUser.appendChild(editButton);
    postingUser.appendChild(likeHeart);
    postingUser.appendChild(deleteButton);
    postingContainer.appendChild(postingUser);

}

function addPost() {
    const posts = document.getElementById('postBox').value;
    document.getElementById("postBox").value = "";
    postingMessages(posts);
    //addPostToLocalStorage(posts);
}


function deletePost(element) {
    if(element.target.id === 'delete') {
         element.target.parentElement.remove();
         //deletePostLocalStorage(element.target.parentElement.innerText);   
    }
}


/* Ejemplo para agregar efecto al hacer click en el icono de me gusta
    heart.addEventListener("click", ()=>{
        heart.classList.toggle("red");
    });
    trash.addEventListener("click", () => {
       cont.removeChild(newComments);
}); */

