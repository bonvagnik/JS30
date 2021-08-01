const panels= document.querySelectorAll('.panel');

function toggleOpen()       //for the image expand transition
{
    this.classList.toggle('open');
}

function toggleOpenActive(e)    //for the text transitions
{
    if(e.propertyName.includes('flex'))  //when transition ends, the text transision will be triggerd
    {
        this.classList.toggle('open-active');
    }
}

panels.forEach(x => x.addEventListener('click',toggleOpen));
panels.forEach(x => x.addEventListener('transisionend',toggleOpenActive));