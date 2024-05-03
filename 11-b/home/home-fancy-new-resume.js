function check() {

    let age = document.getElementById("age").value;

    if (Number(age) < 0) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "Negative number is not acceptable";
    }

    else if (isNaN(Number(age))) {
        document.getElementById("container").style.visibility = "hidden";
        document.getElementById("output").innerHTML = "You have failed to enter a number.";
    }

    else if (Number(age) % 1 !== 0) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "Invalid age.";
    }

    else if (Number(age) >= 18 && Number(age) <= 120) {
        document.getElementById("container").style.visibility = "visible";
    }

    else {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "You may not see the content.";
    }

    let today= new Date();
    let day = today.getDate();
    let month= today.getMonth()+1;
    let year= today.getFullYear();

        day=day<10?'0'+day:day;
        month=month<10?'0'+month:month;

    let hours=today.getHours();
    let minutes=today.getMinutes();
    const ampm=hours>=12?'PM':'AM';
        hours=hours%12;
        hours=hours?hours:12;
        minutes=minutes<10?'0'+minutes:minutes;
    let time = hours+':'+minutes+" "+ampm;

    document.getElementById("time-date").innerHTML=
        `
        <h3>${time}</h3>
        <h5>${day+"/"+month+"/"+year}</h5>
        `
    ;
    //let time=today.getHours()+":"+today.getMinutes();



}
