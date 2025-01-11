let a =Math.round(Math.random()*256,0)
let b =Math.round(Math.random()*256,0)
let c =Math.round(Math.random()*256,0)

let intervalID;

let sayDate = function(){
    document.getElementById('body').style.backgroundColor =`rgb(${a},${b},${c})`
}
document.getElementById('start').addEventListener('click',function(){
    if(!intervalID){
        intervalID = setInterval(sayDate,1000);        
    }
})

document.getElementById('stop').addEventListener('click',function(){
    if(intervalID){
        clearInterval(intervalID);
        intervalID = null;
    }
})