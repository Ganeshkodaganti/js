let xhr = new XMLHttpRequest();

//make a request
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

//sending a request
xhr.send();

xhr.onload = () => {
    document.write(JSON.parse(xhr.response));
}