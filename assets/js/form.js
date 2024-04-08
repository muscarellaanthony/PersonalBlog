function submitEntry (event){
    const stringPost = localStorage.getItem('blogEntries')
    const blogEntries = JSON.parse(stringPost) || [];

    const blogEntry = {
        usernameEntry: username.value,
        titleEntry: title.value,
        contentEntry: content.value.trim()
    }
    if (blogEntry.usernameEntry=='' || blogEntry.titleEntry=='' || blogEntry.contentEntry==''){
        console.log(username.value);
        alert("You must complete all fields.");
        event.preventDefault();
    }
    else{
    blogEntries.push(blogEntry)
    localStorage.setItem('blogEntries', JSON.stringify(blogEntries))
    }
}

// submitButton = document.getElementById("submit-post");
submitButton = document.getElementById("submit");
username = document.getElementById("username");
title = document.getElementById("title");
content = document.getElementById("content");
submitButton.addEventListener("click", submitEntry)