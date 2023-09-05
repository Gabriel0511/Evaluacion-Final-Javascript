function infoDiv(mensaje){
    document.getElementById('resValidacion').innerHTML = mensaje
}

function validar(){
    var nombre = document.getElementById('nombre')
    var email = document.getElementById('email')
    const patternNombre = new RegExp('^[A-Z]+$', 'i')
    var valido = true

    if(nombre.value.trim() == ''){
        infoDiv('El campo "Nombre" es obligatorio')
        valido = false
    }else{
        if(nombre.value.length > 20){
            infoDiv('El nombre debe contener menos de 20 letras')
            valido = false
        }else{
            if(!patternNombre.test(nombre.value)){
                infoDiv('El nombre no puede contener números')
                valido = false
            }else{
                if(email.value.trim() == ''){
                    infoDiv('El campo "Email" es obligatorio')
                    valido = false
                }else{
                    if(verEmail(email.value) == false){
                        infoDiv('El mail ingresado no es válido')
                        valido = false
                    }else{
                        if(email.value.length > 255){
                            infoDiv('El email debe contener menos de 255 caracteres')
                            valido = false
                        }
                    }
                }
            }
        }
    }
    if(valido == true) {
        window.location="game.html"
    }
    return valido

}

function verEmail(mail){
    const patternMail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
    if(patternMail.test(mail)){
        return true
    }else{
        return false
    }

}