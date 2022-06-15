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

currentTime();