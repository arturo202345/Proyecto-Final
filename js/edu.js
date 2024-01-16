class educate{
    numeros(){
        let a=document.getElementById("uno").value
        a= a.toLowerCase()
        let b=document.getElementById("dos").value
        b= b.toLowerCase()
        let c=document.getElementById("tres").value
        c= c.toLowerCase()
        let d=document.getElementById("cuatro").value
        d= d.toLowerCase()
        let e=document.getElementById("cinco").value
        e= e.toLowerCase()
        let resp=document.getElementById("resp")
        if(a=="uno" & b=="dos" & c=="tres" & d=="cuatro" & e=="cinco"){
            resp.innerHTML =`¡ CORRECTO !`
           
        }else{
            resp.innerHTML =`Buelve a intentarlo`
            
        }
        console.log(f)
    }
}
let ope= new educate()