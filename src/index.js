import './styles.css';
import CountdownTimer from './js/template';
import { updateClock } from './js/functions';




const timerId = new CountdownTimer({
    targetDate: new Date('Jan 30, 2021'),
    onTick: updateClock,
});

timerId.timerCounter();


