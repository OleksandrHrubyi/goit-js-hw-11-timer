import { getTimerComponents } from './functions';


export default class CountdownTimer {
    constructor({targetDate, onTick }) {
        this.targetDate = targetDate;
        this.onTick = onTick;
   }
    
    timerCounter()
    {
        setInterval(() => {
            const currentTime = Date.now();
            const timeLeft = this.targetDate - currentTime;
            const time = getTimerComponents(timeLeft);
            this.onTick(time);            
        }, 1000)}
};





