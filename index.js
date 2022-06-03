'use stict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
;
let score = 20;
let highScore = 0;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;

};
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('#guess').value);


    if (!guess) {
        displayMessage("Bir Sayı giriniz!!")
    }
    else if (guess === secretNumber) {
        displayMessage('Doğru Bildiniz.');
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem"






        Number(document.querySelector('#guess').value = "")

        if (score >= highScore) {
            Number(document.querySelector('#guess').value = "")
            let total = score + highScore
            localStorage.setItem("highScore", total);
            document.querySelector('.highscore').innerHTML = localStorage.getItem("highScore")
        }
    }
    else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? ':Çok Yüksek Tahmin Ettiniz' : ":Çok Düşük Tahmin Ettiniz");
            document.querySelector('.score').textContent = score;
            Number(document.querySelector('#guess').value = "")

        }

    }
    else {
        displayMessage('Oyunu Kaybettiniz.')
        document.querySelector('.score').textContent = 0;
        Number(document.querySelector('#guess').value = "")
    }
});




document.querySelector('.clear').addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Tahmin Ediliyor....");
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";

    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.number').style.width = "15rem";

})




