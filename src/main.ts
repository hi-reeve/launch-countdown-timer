const startCountdown = () => {
    const today: Date = new Date();
    const futureDate: Date = new Date();
    futureDate.setDate(today.getDate() + 14);
    futureDate.setHours(0, 0, 0, 0);

    const dateDiff = futureDate.getTime() - today.getTime();
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const countdownDays = Math.floor(dateDiff / day);
    const countdownHours = Math.floor((dateDiff % day) / hour);

    const countdownMinutes = Math.floor((dateDiff % hour) / minute);
    const countdownSeconds = Math.floor((dateDiff % minute) / second);

    const daysElms = document.querySelectorAll(
        ".days"
    ) as NodeListOf<HTMLDivElement>;
    const hoursElms = document.querySelectorAll(
        ".hours"
    ) as NodeListOf<HTMLDivElement>;
    const minutesElms = document.querySelectorAll(
        ".minutes"
    ) as NodeListOf<HTMLDivElement>;
    const secondsElms = document.querySelectorAll(
        ".seconds"
    ) as NodeListOf<HTMLDivElement>;

    daysElms.forEach(dayElm => {
        dayElm.innerText =
            countdownDays > 9
                ? countdownDays.toString()
                : `0${countdownDays.toString()}`;
    });
    hoursElms.forEach(hourElm => {
        hourElm.innerText =
            countdownHours > 9
                ? countdownHours.toString()
                : `0${countdownHours.toString()}`;
    });
    minutesElms.forEach(minuteElm => {
        minuteElm.innerText =
            countdownMinutes > 9
                ? countdownMinutes.toString()
                : `0${countdownMinutes.toString()}`;
    });
    secondsElms.forEach(secondElm => {
        secondElm.innerText =
            countdownSeconds > 9
                ? countdownSeconds.toString()
                : `0${countdownSeconds.toString()}`;
    });
};

setInterval(() => {
    startCountdown();
}, 1000);
