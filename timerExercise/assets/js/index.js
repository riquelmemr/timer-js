function timepiece() {
    const watch = document.querySelector('.watch');
    let seconds = 0;
    let timer;

    document.addEventListener('click', function (e) {
        const element = e.target;

        if (element.classList.contains('start')) {
            clearInterval(timer);
            startTimer();
        }

        if (element.classList.contains('pause')) {
            clearInterval(timer);
        }

        if (element.classList.contains('restart')) {
            clearInterval(timer);
            seconds = 0;
            watch.innerHTML = '00:00:00';
        }
    })

    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function startTimer() {
        timer = setInterval(function () {
            seconds++;
            watch.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);

        return timer;
    }
}

timepiece();

