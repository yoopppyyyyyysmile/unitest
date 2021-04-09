async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let content = await response.json()
    content = content.splice(0, 10)

    let table = document.getElementsByClassName('posts')

    
    let key;
    for (key in content ) {
        
        table.innerHTML += `
        <tr>
        <td>${content.userId}</td>
        <td>${content.Id}</td>
        <td>${content.title}</td>
        <td>${content.body}</td>
        </tr> `


    }
}



getResponse();
