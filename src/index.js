import './styles.css';


const ref = {
    valueDay: document.querySelector('.value[data-value="days"]'),
    valueHours: document.querySelector('.value[data-value="hours"]'),
    valueMinutes: document.querySelector('.value[data-value="mins"]'),
    valueSecs: document.querySelector('.value[data-value="secs"]')
    
}




const timer = {
    start() {
        const startTime = new Date('Jan 31, 2021');
        
        
        
        
        setInterval(() => {
            const currentTime = Date.now();
            const timeLeft = startTime - currentTime;
            const {days, hours, mins, secs} = getTimerComponents(timeLeft);
            ref.valueDay.textContent = `${days}`;
            ref.valueHours.textContent = `${hours}`;
            ref.valueMinutes.textContent = `${mins}`;
            ref.valueSecs.textContent = `${secs}`
        }, 1000)

    }
}

timer.start()

function pad(value) {
    return String(value).padStart(2, '0')
}

function getTimerComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs}
}

