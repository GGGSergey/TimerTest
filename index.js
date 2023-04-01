const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

let intervalTimer;

const createTimerAnimator = () => {
    return (seconds) => {
        if (intervalTimer) clearInterval(intervalTimer);
        intervalTimer = setInterval(timer, 1000);

        const addZero = (digitTimer) => {
            if (digitTimer <= 9) {
                return "0" + digitTimer;
            } else {
                return digitTimer;
            }
        };

        function replaceEndingWord(num, endingWord) {
            let twoDigitNum = Math.abs(num) % 100;
            let singleDigitNum = twoDigitNum % 10;
            if (twoDigitNum > 10 && twoDigitNum < 20) {
                return endingWord[2];
            }
            if (singleDigitNum > 1 && singleDigitNum < 5) {
                return endingWord[1];
            }
            if (singleDigitNum == 1) {
                return endingWord[0];
            }
            return endingWord[2];
        }

        function replaceHourDigitToWord(hoursDigit) {
            let hoursWord = "";

            switch (hoursDigit) {
                case 0:
                    hoursWord = "Ноль";
                    break;
                case 1:
                    hoursWord = "Один";
                    break;
                case 2:
                    hoursWord = "Два";
                    break;
                case 3:
                    hoursWord = "Три";
                    break;
                case 4:
                    hoursWord = "Четыре";
                    break;
                case 5:
                    hoursWord = "Пять";
                    break;
                case 6:
                    hoursWord = "Шесть";
                    break;
                case 7:
                    hoursWord = "Семь";
                    break;
                case 8:
                    hoursWord = "Восемь";
                    break;
                case 9:
                    hoursWord = "Девять";
                    break;
                case 10:
                    hoursWord = "Десять";
                    break;
                case 11:
                    hoursWord = "Одиннадцать";
                    break;
                case 12:
                    hoursWord = "Двенадцать";
                    break;
                case 13:
                    hoursWord = "Тринадцать";
                    break;
                case 14:
                    hoursWord = "Четырнадцать";
                    break;
                case 15:
                    hoursWord = "Пятнадцать";
                    break;
                case 16:
                    hoursWord = "Шестнадцать";
                    break;
                case 17:
                    hoursWord = "Семнадцать";
                    break;
                case 18:
                    hoursWord = "Восемнадцать";
                    break;
                case 19:
                    hoursWord = "Девятнадцать";
                    break;
                case 20:
                    hoursWord = "Двадцать";
                    break;
                case 21:
                    hoursWord = "Двадцать один";
                    break;
                case 22:
                    hoursWord = "Двадцать два";
                    break;
                case 23:
                    hoursWord = "Двадцать три";
                    break;
            }

            return hoursWord;
        }

        function timer() {
            const hours = Math.floor((seconds / (60 * 60)) % 24);
            const minutes = addZero(Math.floor((seconds / 60) % 60));
            const sec = addZero(Math.floor(seconds % 60));

            if (seconds >= 86400) {
                timerEl.textContent = "Введите число поменьше";
                clearInterval(intervalTimer);
            } else if (!seconds || seconds < 0) {
                timerEl.textContent = "00 : 00 : 00 - Ваше время истекло";
                // timerEl.innerHTML = `${addZero(hours)} : ${minutes} : ${sec} - Ваше время истекло`;
                clearInterval(intervalTimer);
            } else if (seconds >= 0) {
                timerEl.innerHTML = `${addZero(hours)} : ${minutes} : ${sec} - 
                ${replaceHourDigitToWord(hours)} ${replaceEndingWord(hours, [
                    "час",
                    "часа",
                    "часов",
                ])}, ${minutes} ${replaceEndingWord(minutes, [
                    "минута",
                    "минуты",
                    "минут",
                ])}, ${sec} ${replaceEndingWord(sec, [
                    "секунда",
                    "секунды",
                    "секунд",
                ])}.`;
                seconds--;
            }
        }
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
    // Очистите input так, чтобы в значении
    // оставались только числа
    inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = "";
});
