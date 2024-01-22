let dadu1 = confirm('Dadu 1')
let dadu2 = confirm('Dadu 2')

if(dadu1 == true){
    dadu1 = (Math.round(Math.random()*12)) 
}
else if(dadu2 == true){
    dadu2 = (Math.round(Math.random()*10)) 
}

let hasil = dadu1 + dadu2

alert(hasil)
    



