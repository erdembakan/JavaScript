const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//UI Objesini Başlatma

const ui = new UI();

//Tüm eventleri yükleme

eventlisteners();

function eventlisteners() {

    form.addEventListener("submit",addFilm);
}

function addFilm(e) 
{
    const title = titleElement.Value;
    const director = directorElement.Value;
    const url = urlElement.Value;


    if (title === "" || director === "" || url === "") {
        //Hata

    }
    else {

        const newFilm = new Film(title,director,url);

        ui.addFilmtoUI(newFilm); // Arayüze film ekleme
    }

    ui.clearinputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}