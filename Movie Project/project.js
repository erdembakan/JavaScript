const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//UI Objesini Başlatma

const ui = new UI();

//Storage Objesini başlatma
const storage = new Storage();

//Tüm eventleri yükleme

eventlisteners();

function eventlisteners() {

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded", function(){ 

        let films = storage.getFilmsfromStorage();
        ui.loadAllFilms(films);
    })
}

function addFilm(e) 
{
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;


    if (title === "" || director === "" || url === "") {

        //Hata
        ui.displayMessages("Lütfen tüm alanları doldurunuz.","danger");

    }
    else {

        const newFilm = new Film(title,director,url);

        ui.displayMessages("Film başarıyla eklendi.","success");
        storage.addFilmtoStorage(newFilm);
        ui.addFilmtoUI(newFilm); // Arayüze film ekleme
    }

    ui.clearinputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}