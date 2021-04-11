/*async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let content = await response.json()
    console.log(content)
}

getResponse()*/

 let jsonData = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              },
              {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
              },
              {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
              }
    ]

   

    buildTable(jsonData)

function buildTable(data) {
  let table = document.getElementById('myTable')

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                <td>${data[i].userId}</td>
                <td>${data[i].id}</td>
                <td>${data[i].title}</td>
                <td>${data[i].body}</td>
                </tr>`

      table.innerHTML += row
  }
}

document.getElementsByTagNameNS('td').addEventListener('click', function() {
  console.log('Column was cliked')
})

