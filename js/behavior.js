const toggleBtn = document.getElementById('navbar-toggler');
const aboutBtn = document.getElementById('about-button');
const worksBtn = document.getElementById('works-button');
const contactBtn = document.getElementById('contact-button');

const navLinks = document.getElementsByClassName('navbar-list');
const sectionArray = document.getElementsByTagName('section');

const form = document.querySelector('#form');
const alert = document.getElementById('alert');

toggleBtn.addEventListener('click', function () {
    for (let index = 0; index < navLinks.length; index++) {
        const element = navLinks[index];
        element.classList.toggle("active");
    }
});

aboutBtn.addEventListener('click', function () {
    changeView('about');
});

worksBtn.addEventListener('click', function () {
    changeView('works');
});

contactBtn.addEventListener('click', function () {
    changeView('contact');
});

form.addEventListener('submit', submitHandler);


function changeView(viewId) {
    for (const section of sectionArray) {
        if (section == sectionArray.namedItem(viewId)) {
            section.classList.remove('hidden-section');
        } else { 
            section.classList.add('hidden-section');
        }
    }
    toggleBtn.click();
}

function setActive(idWork) {
    const modal = document.getElementsByClassName('modal')[0];
    const titulo = document.getElementById('titulo-modal');
    let texto;
    while (modal.children[0].children[1].firstChild) {
        modal.children[0].children[1].removeChild(modal.children[0].children[1].firstChild);
    }
    switch (idWork) {
        case 0:
            titulo.textContent = "Web institucional de Ente Tucuman Turismo";
            texto = ["En abril del 2021 fui contratado por el Ente Tucumán Turismo para desarrollar una pagina web dinámica en la cual se mostraría información institucional a ser cargada por personal de la institución, sin conocimiento técnico, por lo cual en paralelo debió desarrollar un sistema de creación, modificación y borrado de la misma.",
                "Entonces con el equipo de IT del Ente diseñamos la base de datos con los requerimientos del area encargada de gestionar la información, luego implementamos el frontend del diseño hecho y acordado con otra area y por ultimo diseñamos e implementamos el sistema de carga de información",
                "La base de datos sea diseño según el modelo relacional, en el motor MySQL, ademas de los respectivos usuarios de lectura, escritura y administración, se generaron vistas y procedimientos almacenados para la obtención de los datos",
                "El frontend fue desarrollado con Bootstrap y Jquery como únicos frameworks y el backend con PHP nativo, ambos mediante la arquitectura cliente-servidor, basados en el patron de diseño Modelo, vista, controlador (MVC)."
            ];
            texto.forEach(parrafo => {
                const p = document.createElement('p');
                p.textContent = parrafo;
                modal.children[0].children[1].appendChild(p);
            });
            break;
        case 1:
            titulo.textContent = "Aplicación para exposiciones";
            texto = ["A pedido de la presidencia del Ente Tucumán Turismo, se desarrollo la siguiente aplicacion a fin de presentar videos promocionales de algunas areas de la provincia, con la posibilidad de elegir entre 6 temas a desarrollar en cada conferencia",
                "Debido al corto tiempo dado para el desarrollo y el requisito de ser soportado en todas las plataformas, se opto por desarrollarla mediante el motor de videojuegos Unity, encargandome personalmente del mismo",
                "Durante el desarrollo del proyecto, asumí un rol central en la implementación y gestión del motor subyacente en el que se basaba nuestra aplicación. Esta responsabilidad surgió naturalmente debido a mi experiencia previa con el motor y mi profundo conocimiento de su funcionamiento. Trabajar en estrecha colaboración con mis compañeros de equipo, me dediqué en un 95% a esta tarea específica, lo que nos permitió avanzar de manera eficiente en esta área crítica del proyecto.",
                "Cabe destacar que este enfoque no se debió a una falta de confianza en el equipo, sino más bien a la sinergia que creamos al aprovechar nuestras habilidades individuales. La distribución de tareas se basó en la especialización de cada miembro y en la necesidad de cumplir los plazos (10 días) y requisitos del proyecto de manera efectiva. Mi objetivo siempre fue apoyar a mis colegas y garantizar que cada uno pudiera destacar en sus áreas de experiencia."
            ];
            texto.forEach(parrafo => {
                const p = document.createElement('p');
                p.textContent = parrafo;
                modal.children[0].children[1].appendChild(p);
            });
            break;
        default:
            break;
    }
    modal.classList.toggle('active');

}

async function submitHandler(event){
    event.preventDefault();
    const formulario = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: formulario,
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(response);
    if(response.ok){
        this.reset();
        alert.innerHTML = "Mensaje enviado, pronto estaré en contacto";
        alert.classList.add('alert-success');
    } else {
        alert.innerHTML = "Error al enviar, intenta más tarde";
        alert.classList.add('alert-danger');
    }
}