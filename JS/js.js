function demoDisplay() {
    document.getElementById("appear").style.display = "none";
    document.getElementById("appear1").style.display = "none";
    document.getElementById("appear2").style.display = "none";
    document.getElementById("appear3").style.display = "none";
    document.getElementById("appear4").style.display = "none";
    document.getElementById("appear5").style.display = "none";
    document.getElementById("appear6").style.display = "none";
    document.getElementById("appear7").style.display = "none";
    document.getElementById("appear8").style.display = "none";
    document.getElementById("appear9").style.display = "none";
    document.getElementById("appear10").style.display = "none";
    document.getElementById("appear11").style.display = "none";
    document.getElementById("appear12").style.display = "none";
}

window.addEventListener('load', demoDisplay);






function login() {
    let pass = document.getElementById('login').value;
    let password = "geenleiding75";

    if (pass == password) {
        document.getElementById('answer-to-pass').innerHTML = 'logged in';
        document.getElementById("appear").style.display = "block";
        document.getElementById("appear1").style.display = "block";
        document.getElementById("appear2").style.display = "block";
        document.getElementById("appear3").style.display = "block";
        document.getElementById("appear4").style.display = "block";
        document.getElementById("appear5").style.display = "block";
        document.getElementById("appear6").style.display = "block";
        document.getElementById("appear7").style.display = "block";
        document.getElementById("appear8").style.display = "block";
        document.getElementById("appear9").style.display = "block";
        document.getElementById("appear10").style.display = "block";
        document.getElementById("appear11").style.display = "block";
        document.getElementById("appear12").style.display = "block";
    } else {
        document.getElementById('answer-to-pass').innerHTML = 'wrong pass'
        document.getElementById("appear").style.display = "none";
        document.getElementById("appear1").style.display = "none";
        document.getElementById("appear2").style.display = "none";
        document.getElementById("appear3").style.display = "none";
        document.getElementById("appear4").style.display = "none";
        document.getElementById("appear5").style.display = "none";
        document.getElementById("appear6").style.display = "none";
        document.getElementById("appear7").style.display = "none";
        document.getElementById("appear8").style.display = "none";
        document.getElementById("appear9").style.display = "none";
        document.getElementById("appear10").style.display = "none";
        document.getElementById("appear11").style.display = "none";
        document.getElementById("appear12").style.display = "none";
    }

}


document.getElementById('buttonlog').addEventListener('click', login);