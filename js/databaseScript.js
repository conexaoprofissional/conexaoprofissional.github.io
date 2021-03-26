function getParentId() {
    let date = new Date;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let parentId = day + 'a'+ month +'a'+ year;
    return parentId;
}

function createId(name) {
    let date = new Date;
    let start = name[0] + name[1] + name[2];
    let end = date.getHours() + 'a'
        + date.getMinutes() + 'a' + date.getSeconds()
        + 'a' + date.getMilliseconds();
    let id = start + end;
    return id;
}

function sendErrorAlert(Error) {
    window.alert(Error);
}

function sendInscription(courseId, emailId, nameId, phoneId, cityId) {
    var course= getCourseValue(courseId);
    var clientId = document.getElementById(emailId).value;
    var name = document.getElementById(nameId).value;
    var phone = document.getElementById(phoneId).value;
    var city = document.getElementById(cityId).value;

    var parentId = getParentId() + '/'; //database Parent
    var childId = createId(name); //database child

    if (courseError) {
        sendErrorAlert("Escolha seu curso");
        return;
    }

    if (nameError) {
        sendErrorAlert("Você não escreveu seu nome, ou colocou algum caracter proibido");
        return;
    }

    if (phoneError) {
        sendErrorAlert("Escreva seu telefone usando o DDD");
        return;
    }

    /*if (emailError) {
        sendErrorAlert("Escreva seu email, lembre-se do @");
        return;
    }*/

    if (cityError) {
        sendErrorAlert("Escolha sua cidade");
        return;
    }

    var reference = 'Clientes/' + parentId + childId;

    firebase.database().ref(reference).set({
        nome: name,
        telefone: phone,
        cidade: city,
        email: clientId,
        curso: course
    });
    
    window.alert("Cadastro realizado com sucesso")
}
