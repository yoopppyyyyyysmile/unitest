document.getElementById('get').addEventListener('click', () => {
    let table = document.getElementsByClassName('post');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result => {
            console.log(result); 
            return result.json();
        })
        .then(get => {
            table.innerHTML = `User id ${post.userId} id ${post.id} title ${post.title} body ${post.body}`
        })
});




            
 