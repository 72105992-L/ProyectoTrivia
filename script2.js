function evaluarQuizup()
{
    let respuestasCorrectas=["a","c","d","b","a","d","b","a","c","b"];
    let respuestasUsuario=new Array();
    let respuestasPregunta=new Array();
    let aciertos=0;
    let counPreguntas=0;
    let bien="bien";
    let mal="mal";
    let imagenesRespuestas=new Array();
    for(var i = 0; i <10; i++) {
        respuestasPregunta=document.getElementsByName("p"+(i+1));
        for (var j = 0; j <=3; j++){
            if(respuestasPregunta[j].checked==true){
                counPreguntas++;
                respuestasUsuario[i]=respuestasPregunta[j].value;
                if(respuestasPregunta[j].value==respuestasCorrectas[i]){
                    imagenesRespuestas[i]=bien;
                    aciertos++;
                }else{
                    imagenesRespuestas[i]=mal;
                }
            }
        }
    }
    for (var i = 0; i < 10; i++) {
        console.log("Respuesta" + respuestasUsuario[i]+ "Imagen" + imagenesRespuestas[i])
    }
    if(counPreguntas==10){
        html="<table class= table>";
        html+="<tr>";
        html+="<td>Preguntas</td>";
        html+="<td>Respuestas Del Usuario</td>";
        html+="<td>Respuestas Correctas</td>";
        html+="<td>Calificacion</td>";
        html+="<tr>";
        for(var i = 0; i < 10; i++){
            html+="<tr>";
            html+="<td>"+(i+1)+"</td>";
            html+="<td>"+respuestasUsuario[i]+"</td>";
            html+="<td>"+respuestasCorrectas[i]+"</td>";
            html+="<td>"+imagenesRespuestas[i]+"</td>";
            html+="<tr>";
        }
        html+="</table";
        document.getElementById("resultado").innerHTML=html;
    }else{
        alert("Falta contestar preguntas");
    }
}

function resetQuiz(){
    for (var i = 0; i < 10; i ++){
        respuestasPregunta=document.getElementsByName("p"+(i+1));
        for (var j = 0; j <=3; j++){
            respuestasPregunta[k].checked=false;
        }
    }
}