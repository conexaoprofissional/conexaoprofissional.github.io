var cursos = {
    designer: "Designer Gráfico",
    dj: "Dj Profissional",
    eletricista: "Eletricista Residencial",
    games: "Desenvolvedor de Games",
    caixa: "Operador de Caixa",
    youtuber: "Youtuber"
}

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

function sendInscription() {
    var course= getCourseValue();
    var clientId = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('telefone').value;
    var city = document.getElementById('cidade').value;
    var parentId = getParentId() + '/';
    var childId = createId(name);

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
