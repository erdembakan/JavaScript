// Ajax Callback, HTTP Requests

class Request {

    constructor () {
        this.xhr = new XMLHttpRequest();
    }

    //GET Request
    // get (url,Callback){

    //     this.xhr.open("GET",url); //Bağlantı Açık

    //     this.xhr.onload = function()
    //     {
    //         if (this.status === 200){
    //             Callback(null,this.responseText);
    //         }

    //         else{

    //             //Hata durumunda
    //             Callback("Bir hata oluştu.",null);
    //         }

    //     }
    //     this.xhr.send();
    // }

            //DELETE Request
            delete (url,Callback)
            {
                this.xhr.open("DELETE",url);
                this.xhr.setRequestHeader("Content-type","application/json"); //JSON verisi göndereceğimizi iletiyoruz.
    
                this.xhr.onload = () => 
                {
                    if (this.xhr.status === 200) {
                        Callback(null,"Silme işlemi başarılı");
                    }
    
                    else {
    
                        Callback("DELETE: Bir hata oluştu.",null)
                    }
                }
    
                this.xhr.send();
    
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

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){

    if (err === null){
        console.log(response);
    }

    else {
        console.log(err);
    }
})

