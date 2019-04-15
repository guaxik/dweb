window.onload = function(){

var modal = document.getElementById('id01');

    // quando usuário clicar em qualquer lugar fora do modal, ele fecha.
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

