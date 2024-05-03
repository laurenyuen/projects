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
}
