import './styles.css';
import CountdownTimer from './js/template';



const timer = new CountdownTimer({
    targetDate: new Date('Jan 30, 2021'),
  
});

timer.timerCounter();