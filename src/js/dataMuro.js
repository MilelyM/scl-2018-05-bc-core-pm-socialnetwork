window.onload = () => {
    eventListeners();
    showLocalStorage();
}; eventListeners = () => {
     document.getElementById('postMessage').addEventListener('click', addPost); // evento click para enviar publicaciones
     document.addEventListener('click', deletePost); // ejecutar evento click borrar publicación
     // Editar tareas
     document.addEventListener('click', editarTarea);
};
const postingContainer = document.getElementById('publications'); // contenedor de publicaciones

// función generadora de DOM de publicación usuario
function postingMessages(message){
    const postingUser = document.createElement('div'); // creo un elemento div
    const paragraph = document.createElement('p'); // creo un elemento parrafo
    const imagen = document.createElement("img");  //creo un elemento imagen
    const textPost = document.createTextNode(message); // creo el texto de la publicacion obtenido del mensaje escrito del usuario
//(document.getElementById("decrementar").addEventListener("click", decrementar);)
    // creo los iconos que irán en la publicación
    const likeHeart = document.createElement('i'); // creo un elemento icono
    const iconHeart = document.createTextNode('favorite') // le digo que es un texto para decirle que icono es
    
    const editButton = document.createElement('i');
    const iconEdit = document.createTextNode('border_color')
    const commentButton = document.createElement('i');
    const iconComment = document.createTextNode('insert_comment')
    const deleteButton = document.createElement('i');
    const iconTrash = document.createTextNode('delete_forever')

    // atributos de mis elementos    
    
    likeHeart.setAttribute('class', 'material-icons btn-flat heart');
    deleteButton.setAttribute('class', 'material-icons btn-flat delete');
    editButton.setAttribute('class', 'material-icons btn-flat ');
    commentButton.setAttribute('class', 'material-icons btn-flat ');
    postingUser.setAttribute('class', 'publicationDom')
    imagen.setAttribute('class', 'publicationDom');

    // asigno los hijos al padre. Los entre () son los hijos del primer elemento
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

    // evento para cambiar color de icono corazón
    likeHeart.addEventListener("click", () => {
        likeHeart.classList.add("red-text");
        //countHearts();
    });
};

const postBox = document.getElementById("postBox").value = ''; // mantener el input de publicación vacío
// función agregar publicación
function addPost() {
    const posts = document.getElementById('postBox').value;
    if(posts === ''){ // si ingresa un campo vacio que no se produzca
        // que se active recordar ingresar texto
        createMessageForEmptyField();
    } else {
    document.getElementById("postBox").value = '';
    postingMessages(posts);
    addPostToLocalStorage(posts);
    }
};

// función eliminar publicación DOM
function deletePost(element) {
    // con target me refiero al boton de eliminar que gatillo la acción por medio de su clase
    if(element.target.className === 'material-icons btn-flat delete')
    if(window.confirm("¿Estás segur@ de eliminar?")){ 
        // me refiero al elemento padre y lo elimino 
        element.target.parentElement.remove();
        //localStorage.removeItem(element.target.parentElement.innerText);
        //deletePostLocalStorage(element.target.parentElement.innerText);
    }
};
//funcion editar post
function editarTarea(element) {
    if(element.target.id === 'delete') {
         element.target.parentElement.remove(); 
    }
};
// función para crear mensaje de advertencia para que incluya texto en el input
function createMessageForEmptyField() {
    const message = document.createElement('a');
    message.setAttribute("id", "answer");
    const textAnswer = document.createTextNode('Recuerda que debes ingresar un texto')
    message.appendChild(textAnswer);
    postingContainer.appendChild(message);
};
// función para agregar elementos al localStorage
function addPostToLocalStorage(postsMessagesUsers) {
    let posts = getPostInLocalStorage();
    // console.log(posts);
    // agrego la nueva publicación al array
    posts.push(postsMessagesUsers);
    // guardar en local storage como una cadena JSON
    localStorage.setItem('posts', JSON.stringify(posts));    
};

// función para comprobar que hay elementos en localStorage con getItem
function getPostInLocalStorage() {
    let posts;
    // si el valor del dato guardado en la clave de posts del localStorage es igual a null d 
    if(localStorage.getItem('posts') === null) {
         posts = []; 
    } else {
        // devolver los valores del post guardados en el localStorage
         posts = JSON.parse(localStorage.getItem('posts'));
         //console.log(posts); // muestra las publicaciones guardadas en un array
     /*     posts.forEach(function(message) {
            //console.log(message);
            postingMessages(message);    
         }) */
    }
    return posts;
};

//funcion para cargar imagen
function init() {
    var inputFile = document.getElementById('inputFile1');
    inputFile.addEventListener('change', mostrarImagen, false);
  }
  
  function mostrarImagen(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      var img = document.getElementById('img1');
      img.src= event.target.result;
      
    }
    reader.readAsDataURL(file);
  }
  
  window.addEventListener('load', init, false);

// Mostrar datos de localStorage en la página
function showLocalStorage() {

    let posts;
    posts = getPostInLocalStorage();
    console.log(posts);
    posts.forEach(function(message) {
        //console.log(message);
        postingMessages(message);      
    });
  };

  
/* 
  function countHearts(){  
    const counter = document.createElement('p') 
    const counterNumber = document.createTextNode('0')
    counter.setAttribute('id', 'counterHearts');
    counter.appendChild(counterNumber);
    likeHeart.appendChild(counter);
    postingUser.appendChild(counter);
    var a = 0;
    function myFunction() {
      a = a + 1;
      document.getElementById("counterHearts").textContent = a;
    }
    } */ 