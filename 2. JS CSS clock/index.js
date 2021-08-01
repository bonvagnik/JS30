const secHand= document.querySelector('.second-hand');
const minHand= document.querySelector('.minute-hand');
const hourHand= document.querySelector('.hour-hand');

function setTime()
{
    const time= new Date();

    const sec= time.getSeconds();
    const secHandAngle= ((sec/60)*360)+90; //90 added with respect to the 90deg offset in css
    secHand.style.transform= `rotate(${secHandAngle}deg)`;

    const min= time.getMinutes();
    const minHandAngle= ((min/60)*360)+90;
    minHand.style.transform= `rotate(${minHandAngle}deg)`;

    const hour= time.getHours();
    const hourHandAngle= ((hour/12)*360)+90;
    hourHand.style.transform= `rotate(${hourHandAngle}deg)`;
}
setInterval(setTime,1000);

