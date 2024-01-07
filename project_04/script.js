const random=function(){
    const hex="ABCDEF0987654321"
    let color="#"

    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}


let interval;
const startChangeColor=function(){
    if(!interval){

        interval=setInterval(changeBg,100)
    }
    function changeBg(){

        document.body.style.backgroundColor=random()
    }
}

const stopChangeColor=function(){
    clearInterval(interval)
    interval=null
}

document.querySelector('#start').addEventListener('click', startChangeColor)

document.querySelector('#stop').addEventListener('click', stopChangeColor)