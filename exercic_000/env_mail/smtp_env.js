function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "rfalcox@gmail.com",
        Password: "M4sm0rr4@#$",
        To: 'falco.encode@gmail.com',
        From: "rfalcox@gmail.com",
        Subject: "Envio de email",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}