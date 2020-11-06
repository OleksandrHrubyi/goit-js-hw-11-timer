import { valueDay, valueHours, valueMinutes, valueSecs } from './ref';

export const pad = function (value) {
    return String(value).padStart(2, '0');
};

export const getTimerComponents = function (time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return { days, hours, mins, secs };
};

export const updateClock = function ({days, hours, mins, secs}) {
    valueDay.textContent = `${days}`;
    valueHours.textContent = `${hours}`;
    valueMinutes.textContent = `${mins}`;
    valueSecs.textContent = `${secs}`;
}

