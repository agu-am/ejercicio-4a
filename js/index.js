const MyArray = [
    { "name": "Jonh Smith", "title": "Newbie Programer", "buttontext": "Follow", "avatar": "https://reqres.in/img/faces/7-image.jpg" },
    { "name": "Alesha Doe", "title": "FullStack Programer", "buttontext": "Add Friend", "avatar": "https://reqres.in/img/faces/8-image.jpg" },
    { "name": "Jessica Jones", "title": "Copywriter", "buttontext": "View Text", "avatar": "https://reqres.in/img/faces/11-image.jpg" }
];

const MyDeformedArray = [
    { "firstName": "Juanse Laverde", "title": "Singer", "buttontext": "Sing", "icon": "https://reqres.in/img/faces/7-image.jpg" },
    { "firstName": "Alesha Doe", "title": "Newbie", "buttontext": "Add Oil", "icon": "https://reqres.in/img/faces/8-image.jpg" },
    { "firstName": "Jonas Uala", "title": "Lier", "buttontext": "View Text", "icon": "https://reqres.in/img/faces/11-image.jpg" }
];

const MyStudents = [
    ...MyArray,
    ...MyDeformedArray.map(({ firstName: name, title, buttontext, icon: avatar }) => ({ name, title, buttontext, avatar }))
];

const container = document.querySelector("#container")

const inputBuscar = document.querySelector("#inputBuscar");
inputBuscar.addEventListener("input", mostrarPersonas);

function mostrarPersonas() {
    const inputBuscar = document.querySelector("#inputBuscar");
    const resultadoBuscar = inputBuscar.value.toLowerCase();

    container.innerHTML = ""; 

    MyStudents.filter(student => {

        return student.name.toLowerCase().includes(resultadoBuscar);

    }).map(student => {
        const personaHtml = `
        <article>
            <div class="container-img">
                <img src="${student.avatar}">
            </div>
            <div class="container-info">
                <p class="nombre">${student.name}</p>
                <p class="titulo">${student.title}</p>
                <button class="btn"><i class="icon-btn"></i>${student.buttontext}</button>
            </div>
        </article>
        `;
        container.innerHTML += personaHtml;
    });
}

mostrarPersonas();


