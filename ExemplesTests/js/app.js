console.log("JavaScript files are located in the js folder");

var numbers = [74.99, 3.01, 6.6, 12.4];

bouttonMAP.onclick = function () {
testMAP();};
bouttonREDUCE.onclick = function () {
testREDUCE();};
bouttonFILTER.onclick = function () {
testFilter();};


function getSum(total, num) {
    return total + num;
}

function checkNumbers(nbs) {
    return nbs >= 10;
}

function testMAP() {
    x = document.getElementById("pMAP")
    x.innerHTML = numbers.map(Math.round);

}

function testREDUCE() {
    x = document.getElementById("pREDUCE")
    x.innerHTML = numbers.reduce(getSum);

}


function testFilter() {
    x = document.getElementById("pFILTER")
    x.innerHTML = numbers.filter(checkNumbers);

}



