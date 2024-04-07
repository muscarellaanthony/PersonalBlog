function submitEntry (){
    const blogEntries = {
        usernameEntry: username.value,
        titleEntry: title.value,
        contentEntry: content.value.trim()
    }
    if (blogEntries.usernameEntry=='' || blogEntries.titleEntry=='' || blogEntries.contentEntry==''){
        console.log(username.value);
        alert("You must complete all fields");
    }
    else{
    console.log(blogEntries);
    localStorage.setItem('blogEntry',JSON.stringify(blogEntries));
}
}

submitButton = document.getElementById("submit-post");
username = document.getElementById("username");
title = document.getElementById("title");
content = document.getElementById("content");
submitButton.addEventListener("click", submitEntry)