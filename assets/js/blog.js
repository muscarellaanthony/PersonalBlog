const displayNewPost = function (){
    const stringContent = localStorage.getItem('blogEntry')
    const newPost = JSON.parse(stringContent)

    console.log(newPost)
}


displayNewPost()
console.log('hello')