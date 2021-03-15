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