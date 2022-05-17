function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var stop = document.getElementById("STOP"); 
    var session = document.getElementById('session');

    if(hrs>12){
        document.getElementById("session").innerHTML = "PM";
    }
    else{
        document.getElementById("session").innerHTML = "AM";
    }


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
}
var interval;

interval = setInterval(displayTime, 10);

function pause(){
    clearInterval(interval);
}




 







