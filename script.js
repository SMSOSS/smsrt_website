var s = skrollr.init([
    smoothScrolling=true
    ]
);

function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let wd = date.getDay();

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    hh = (hh<10) ? "0"+hh : hh;
    mm = (mm<10) ? "0"+mm : mm;

    document.getElementById("hour").innerText = hh;
    document.getElementById("min").innerText = mm;
    document.getElementById("weekday").innerText = weekday[wd];

    let t = setTimeout(function(){currentTime()}, 1000);
}

function windowColor(){
    let date = new Date();
    let hh = date.getHours();

    if (hh > 6 && hh < 18){
        if (document.getElementById("window").style.backgroundColor != "#91CEFF"){
            document.getElementById("window").style.transition = "background-color 3s linear";
            document.getElementById("window").style.backgroundColor = "#91CEFF";
        }
    }
    else if (hh > 18 && hh < 19){
        if (document.getElementById("window").style.backgroundColor != "#FEC051"){
            document.getElementById("window").style.transition = "background-color 3s linear";
            document.getElementById("window").style.backgroundColor = "#FEC051";
        }
    }
    else{
        if (document.getElementById("window").style.backgroundColor != "#090254"){
            document.getElementById("window").style.transition = "background-color 3s linear";
            document.getElementById("window").style.backgroundColor = "#090254";
        }
    }

    let t = setTimeout(function(){windowColor()} , 1000);
}

currentTime();
windowColor();