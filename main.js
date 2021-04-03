function dis(value) {
    document.getElementById("display").innerHTML += value;
}

function eqaul() {
    let b = document.getElementById("display").innerHTML;
    let c = eval(b);
    document.getElementById("display").innerHTML = c;
}

function clr() {
    document.getElementById("display").innerHTML = "0";
}
