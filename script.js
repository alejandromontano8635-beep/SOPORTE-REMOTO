/* ========================= */
/* script.js */
/* ========================= */

function mostrarMensaje(texto){

    alert(texto);

}

/* QUIZ 1 */

function respuestaQuiz1(tipo){

    const resultado =
    document.getElementById('resultadoQuiz1');

    if(tipo === 'correcta'){

        resultado.innerHTML =
        '✅ Correcto. AnyDesk permite controlar computadoras remotamente.';

        resultado.style.color =
        '#00ff99';

    }else{

        resultado.innerHTML =
        '❌ Incorrecto.';

        resultado.style.color =
        '#ff4444';
    }

}

/* QUIZ 2 */

function respuestaQuiz2(tipo){

    const resultado =
    document.getElementById('resultadoQuiz2');

    if(tipo === 'correcta'){

        resultado.innerHTML =
        '✅ Correcto. El internet permite la conexión remota.';

        resultado.style.color =
        '#00ff99';

    }else{

        resultado.innerHTML =
        '❌ Incorrecto.';

        resultado.style.color =
        '#ff4444';
    }

}

/* QUIZ 3 */

function respuestaQuiz3(tipo){

    const resultado =
    document.getElementById('resultadoQuiz3');

    if(tipo === 'correcta'){

        resultado.innerHTML =
        '✅ Correcto. El soporte remoto ahorra tiempo.';

        resultado.style.color =
        '#00ff99';

    }else{

        resultado.innerHTML =
        '❌ Incorrecto.';

        resultado.style.color =
        '#ff4444';
    }

}

/* MODO CLARO */

const modoBtn =
document.getElementById('modoBtn');

modoBtn.addEventListener('click',()=>{

    document.body.classList.toggle('light-mode');

    if(document.body.classList.contains('light-mode')){

        modoBtn.innerHTML =
        'Modo Oscuro';

    }else{

        modoBtn.innerHTML =
        'Modo Claro';
    }

});

/* BIENVENIDA */

window.onload = function(){

    setTimeout(()=>{

        alert(
            '🚀 Bienvenido al Blog de Soporte Técnico'
        );

    },1000);

};

/* EFECTO SCROLL SUAVE */

document.querySelectorAll('nav a').forEach(enlace=>{

    enlace.addEventListener('click',function(e){

        const destino =
        document.querySelector(this.getAttribute('href'));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});