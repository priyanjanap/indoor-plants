const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const space = "    "; 
    document.getElementById("days").textContent = `Ends in :${ space}${ space}${ space}${ space}${days}d :`;
    
    document.getElementById("hours").textContent = `${hours}h :`;
    document.getElementById("minutes").textContent = `${minutes}m :`;
    document.getElementById("seconds").textContent = `${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").textContent = "EXPIRED";
    }
}, 1000);

