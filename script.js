  function recursion(a, b) {
    if(a != b){
        console.log(a)
        if (a < b) {
            a += 1
        }
        else {
            a -= 1
        }
        console.log("call recursion() with params: a = " + a + " b = " + b)
        recursion(a, b)
    }
    else {
        console.log(a);
        return;
    }
  }
recursion(1,5)


window.setInterval(function clockTimer(){

    let date = new Date();
    let time = [date.getHours(),date.getMinutes(),date.getSeconds()]; 
    let current_time = [time[0],time[1],time[2]].join(':');
    let clock = document.getElementById("clock");
    let timeS = [date.getHours(),date.getMinutes()]; 
    let current_timeS = [time[0],time[1]].join(':');

    if(time[0] < 10){time[0] = "0"+ time[0];}
    if(time[1] < 10){time[1] = "0"+ time[1];}
    if(time[2] < 10){time[2] = "0"+ time[2];}

    if (clock.classList.contains('active')){
        clock.innerHTML = current_timeS;
    }
    else{
        clock.innerHTML = current_time;
    }
    
    document.querySelector('div').addEventListener('click', (event) =>{
        event.target.classList.toggle('active');
       
    });
})