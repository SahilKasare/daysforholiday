function updateTimeRemaining() {
    const targetDate = new Date('2023-12-07T17:00:00');
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimeRemaining, 1000);
updateTimeRemaining();
