const displayNewPost = function (){
    const stringContent = localStorage.getItem('blogEntries')
    const newPost = JSON.parse(stringContent)
    const post = document.getElementById('post')

    console.log(newPost)
    for(i = 0; i < newPost.length; i++){
        let div = document.createElement('div')
        let title = document.createElement('h2')
        let content = document.createElement('p')
        let author = document.createElement('h3')

        title.textContent = newPost[i].titleEntry;
        content.textContent = newPost[i].contentEntry;
        author.textContent = 'Posted by: ' + newPost[i].usernameEntry;

        div.setAttribute('class', 'blog-div');
        title.setAttribute('class', 'blog-title');
        content.setAttribute('class', 'blog-content');
        author.setAttribute('class', 'blog-author');

        div.append(title);
        div.append(content);
        div.append(author);

        post.append(div);
    }
}


displayNewPost()
console.log('hello')