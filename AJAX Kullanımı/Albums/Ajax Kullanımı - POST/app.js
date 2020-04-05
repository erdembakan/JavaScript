// Ajax Callback, HTTP Requests

class Request {

    constructor () {
        this.xhr = new XMLHttpRequest();
    }

    //GET Request
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

            //POST Request
            post (url,data,Callback)
            {
                this.xhr.open("POST",url);
                this.xhr.setRequestHeader("Content-type","application/json"); //JSON verisi göndereceğimizi iletiyoruz.
    
                this.xhr.onload = () => 
                {
                    if (this.xhr.status === 201) {
                        Callback(null,this.xhr.responseText);
                    }
    
                    else {
    
                        Callback("POST: Bir hata oluştu.",null)
                    }
                }
    
                this.xhr.send(JSON.stringify(data));
    
            }
}

const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    
//     if (err === null){
//         console.log(response);
//     }

//     else{
//         console.log(err);
//     }

// });

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"After Hours"},function(err,album){

    if (err === null){
        console.log(album);
    }

    else {
        console.log(err);
    }
})

