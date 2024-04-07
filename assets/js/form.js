function submitEntry (){
    console.log('yeah that worked')
    const blogEntries = {
        usernameEntry: username.value,
        titleEntry: title.value,
        contentEntry: content.value.trim()
    }
    console.log(blogEntries);
    localStorage.setItem('blogEntry',JSON.stringify(blogEntries));
}

submitButton = document.getElementById("submit-post");
username = document.getElementById("username");
title = document.getElementById("title");
content = document.getElementById("content");
submitButton.addEventListener("click", submitEntry)