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

function lightSwitch(){
    
    formStyleLink = document.getElementById('formStyle')
    if (formStyleLink.getAttribute('href') === './assets/css/blog.css'){
        formStyleLink.setAttribute('href','./assets/css/dark.css')
        console.log('is work')
    }
    else{
        formStyleLink.setAttribute('href','./assets/css/blog.css')
        console.log('is working')
    }
}

displayNewPost()

lightDark = document.getElementById("lightDark")
lightDark.addEventListener('click', lightSwitch)