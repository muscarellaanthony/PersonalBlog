function submitEntry (){
    console.log('it worked')
    const blogEntries = JSON.parse(localStorage.getItem('stringPost')) || [];

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
    pictureLink = document.getElementById('image')
    formStyleLink = document.getElementById('formStyle')
    if (formStyleLink.getAttribute('href') === './assets/css/form.css'){
        formStyleLink.setAttribute('href','./assets/css/dark.css')
        pictureLink.setAttribute('src', './assets/images/Sun-Grey.jpg')
        console.log('is work')
    }
    else{
        formStyleLink.setAttribute('href','./assets/css/form.css')
        pictureLink.setAttribute('src', './assets/images/Sun-white.jpg')
        console.log('is working')
    }
}

submitButton = document.getElementById("submit");
username = document.getElementById("username");
title = document.getElementById("title");
content = document.getElementById("content");
submitButton.addEventListener("click", submitEntry);

lightDark = document.getElementById("lightDark")
lightDark.addEventListener('click', lightSwitch)
