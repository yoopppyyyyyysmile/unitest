let table = document.querySelector('table');
    let requestURL = 'https://jsonplaceholder.typicode.com/posts';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        let jsonObj = request.response;
        buildTable(jsonObj);
    }

    function buildTable(jsonObj) {
      
        for (let i = 0; i < jsonObj.length; i++) {
          let row = `<tr>
                      <td>${jsonObj[i].userId}</td>
                      <td>${jsonObj[i].id}</td>
                      <td>${jsonObj[i].title}</td>
                      <td>${jsonObj[i].body}</td>
                      </tr>`
      
            table.innerHTML += row
        }
      }

document.getElementsByTagNameNS('td').addEventListener('click', function() {
  console.log('Column was cliked')
})

