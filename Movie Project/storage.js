function Storage (){

}

Storage.prototype.addFilmtoStorage = function (newfilm) 
{
    let films = this.getFilmsfromStorage();

    films.push(newfilm);

    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.getFilmsfromStorage = function () 
{
    let films;

    if (localStorage.getItem("films") === null){
        films = [];
    }

    else 
    {
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
}