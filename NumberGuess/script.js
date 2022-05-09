'strict mode';
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;

const msg = function (text) {
    document.querySelector('.message').textContent = text;
}


document.querySelector('.try').addEventListener('click', function () {
    let number = (Number)(document.querySelector('.guess').value);
    if (!number) {
        msg("No guessing found...😕😕😕")
    }
    else if (secretNumber === number) {
        msg("Congratulations🎉 correct Guessing..");
    }
    else if (secretNumber > number) {
        msg("Your guess is too low😪😪😪");
    }
    else if (secretNumber < number) {
        msg("Your guess is too high🙄🙄🙄");
    } else {
        msg("Some thing went wrong🥱 Please try again");
    }

});