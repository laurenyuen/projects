//JavaScript done by Lauren Yuen
function check() {

    let age = document.getElementById("age").value;

    if (Number(age) < 0) {
        document.getElementById("output").style.display = "none";
        document.getElementById("output").style.display = "block";
        // document.getElementById("container").style.visibility = "hidden";
        document.getElementById("content").style.display = "none";
        document.getElementById("output").innerHTML = "Negative number invalid";
    }

    else if (isNaN(Number(age))) {
        // document.getElementById("container").style.visibility = "hidden";
        document.getElementById("content").style.display = "none";
        document.getElementById("output").style.display = "block";
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "You did not enter a number.";
    }

    else if (Number(age) % 1 !== 0) {
        // document.getElementById("container").style.visibility = "hidden";
        document.getElementById("content").style.display = "none";
        document.getElementById("output").style.display = "block";
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "Age invalid.";
    }

    else if (Number(age) >= 18 && Number(age) <= 120) {
        document.getElementById("container").style.display = "flex";
        document.getElementById("content").style.display = "block";
        document.getElementById("container").style.visibility = "visible";
        document.getElementById("content").style.visibility = "visible";
        document.getElementById("restriction").style.display = "none";
        document.getElementById("output").innerHTML = "Success! Scroll down to view the content.";
    }

    else {
        // document.getElementById("container").style.visibility = "hidden";
        document.getElementById("content").style.display = "none";
        document.getElementById("output").style.display = "block";
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "Content Blocked.";
    }
}
