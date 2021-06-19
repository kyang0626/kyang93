console.log('it works!');

function sendMail() {
    var tempParams ={
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };

    emailjs.send('gmail', 'template_10q40if', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}

function showInfo() {
    document.getElementById("user-profile").style.display = "block";
    document.getElementById("show-msg").style.display = "none";
    document.getElementById("hide-msg").style.display = "block";
    console.log("button is working!");
}

function hideInfo() {
    document.getElementById("user-profile").style.display = "none";
    document.getElementById("hide-msg").style.display = "none";
    document.getElementById("show-msg").style.display = "block";
}

