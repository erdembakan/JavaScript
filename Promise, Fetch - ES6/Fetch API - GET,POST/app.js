class Request {

    get (url) { // GET Request
        return new Promise((resolve,reject) => {

            fetch(url)
            .then(response => response.json())
            .then (data => resolve(data))
            .catch(err => reject(err));
             })
        
    }

    post(url,data) { //POST Request
        return new Promise ((resolve,reject) => {

            fetch(url,{

            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then (data => resolve(data))
          .catch (err => reject(err));
        })

    } 
}

const request = new Request();

request.post("https://jsonplaceholder.typicode.com/albums",{ title: 'After Hours',userId: 1})

.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));

// let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")

// .then(albums => {

//     console.log(albums);
// })
// .catch(err => console.log(err));
