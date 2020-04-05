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

            //PUT Request
            put (url,data,Callback)
            {
                this.xhr.open("PUT",url);
                this.xhr.setRequestHeader("Content-type","application/json"); //JSON verisi göndereceğimizi iletiyoruz.
    
                this.xhr.onload = () => 
                {
                    if (this.xhr.status === 200) {
                        Callback(null,this.xhr.responseText);
                    }
    
                    else {
    
                        Callback("PUT: Bir hata oluştu.",null)
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

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:28,title:"Starboy"},function(err,album){

    if (err === null){
        console.log(album);
    }

    else {
        console.log(err);
    }
})

