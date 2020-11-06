import { valueDay, valueHours, valueMinutes, valueSecs } from './ref';
import { getTimerComponents } from './functions';

export default class CountdownTimer {
    constructor({targetDate }) {
        
        this.targetDate = targetDate;

    }
    
    timerCounter()
    {
        setInterval(() => {
            const currentTime = Date.now();
            const timeLeft =  this.targetDate - currentTime;
            const {days, hours, mins, secs} = getTimerComponents(timeLeft);
            valueDay.textContent = `${days}`;
            valueHours.textContent = `${hours}`;
            valueMinutes.textContent = `${mins}`;
            valueSecs.textContent = `${secs}`
        }, 1000)}
};




