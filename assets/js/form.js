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

function lightSwitch(){
    
    formStyleLink = document.getElementById('formStyle')
    if (formStyleLink.getAttribute('href') === './assets/css/form.css'){
        formStyleLink.setAttribute('href','./assets/css/dark.css')
        console.log('is work')
    }
    else{
        formStyleLink.setAttribute('href','./assets/css/form.css')
        console.log('is working')
    }
}

// submitButton = document.getElementById("submit-post");
submitButton = document.getElementById("submit");
username = document.getElementById("username");
title = document.getElementById("title");
content = document.getElementById("content");
submitButton.addEventListener("click", submitEntry);
lightDark = document.getElementById("lightDark")
lightDark.addEventListener('click', lightSwitch)
