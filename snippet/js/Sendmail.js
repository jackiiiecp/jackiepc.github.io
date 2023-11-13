
//https://smtpjs.com/

$('#btn-send').on('click', function (ev) {

    names = $('#inputname').val();
    email = $('#inputcorreo').val();
    subject = $('#inputasunto').val();
    message = $('#inputmessage').val();

    if (!ValidateFields()) {
        return false;
    }
    SendMailSMTP(names, email, subject, message);

});

//Valida los campos de contactenos
function ValidateFields(ev) {

    if ($('#inputname').val() == "") {
        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo nombre");
        //ev.stopPropagation();
        return false;
    }

    if ($('#inputcorreo').val() == "") {


        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo Email");
        //ev.stopPropagation();


        return false;
    }
    else {
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test($('#inputcorreo').val())) {
            $('#myModal').modal("show");
            $('#PmodalAttention').html("Email no valido");
            return false;
        }
    }
    if ($('#inputasunto').val() == "") {
        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo asunto");
        //ev.stopPropagation();
        return false;
    }

    if ($('#inputmessage').val() == "") {
        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo mensaje");
        //ev.stopPropagation();
        return false;
    }

    return true;
}

//Envia el mail a traves de la plataforma smtpjs
function SendMailSMTP(name, email, subject, message) {
    body = "Nombre:" + name + " Email:" + email + " Mensaje " + message;
    subject = "Conctacto desde el potafolio GITHub. Asunto: " + subject;

    Email.send("jacqueline.pinac@gmail.com",
"jacqueline.pinac@gmail.com",
subject,
body,
"smtp.elasticemail.com",
"jacqueline.pinac@gmail.com",
"1425170b-4a6b-41f1-aae3-72662d8a919e",
function done(message) {
    location.href = '#contact';
    setTimeout(function(){
    $('#myModal').modal("show");
    $('#myModal').modal("hide");
    $('#PmodalAttention').modal("show");
    ClearControls();
}, 500);
}
);
};

function ClearControls() {
    $('#inputname').val('');
    $('#inputcorreo').val('');
    $('#inputasunto').val('');
    $('#inputmessage').val('');
}