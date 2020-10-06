var inputs = document.getElementById("formulario__input");
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventlistener("keyup", function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add("fijar");
        } else {
            this.nextElementSibling.classList.remove("figar");
        }
    });
}