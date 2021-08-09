const pressed = [];
const code = 'friday';
window.addEventListener('keyup',(e) => {
    pressed.push(e.key);
    pressed.splice(-code.length - 1, pressed.length - code.length);
    if(pressed.join('').includes(code))
    {
        console.log("bancho friday hhhaaaiii!!");   //pressed.join converts the array into a string
        cornify_add();   
      }
});