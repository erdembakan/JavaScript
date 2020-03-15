// Ajax Callback, HTTP Requests

class Request {

    constructor () {
        this.xhr = new XMLHttpRequest();
    }

    //Get Request
    get (url,Callback){

        this.xhr.open("GET",url); //Bağlantı Açık

        this.xhr.onload = function()
        {
            if (this.status === 200){
                Callback(null,this.responseText);
            }

            else{

                //Hata durumunda
                Callback("Bir hata oluştu.",null);
            }

        }
        this.xhr.send();
    }
}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    
    if (err === null){
        console.log(response);
    }

    else{
        console.log(err);
    }

});

