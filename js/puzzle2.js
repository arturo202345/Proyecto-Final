let arreglo = ["","",""]

function allowDrop(ev){
    ev.preventDefault();
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    if(arreglo[parseInt(ev.target.id)]==""){
        let data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)] = data;
        ev.target.appendChild(document.getElementById(data));
    }
    if(arreglo[0]!="" && arreglo[1]!="" && arreglo[2]!=""){
        if(arreglo[0]=="num4" && arreglo[1]=="num5" && arreglo[2]=="num2"){
            document.getElementById('miVentanaEmergente').style.display = 'block';
            var miAudio = new Audio('/audio/success-fanfare-trumpets-6185.mp3');
          miAudio.play();
        }else{
            document.getElementById('miVentanaEmergente1').style.display = 'block';
            var miAudio = new Audio('/audio/fail.mp3');
             miAudio.play();
        }
    }
}
