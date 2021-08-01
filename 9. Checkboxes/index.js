const checkboxes= document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
function checkHandler(e)
{
    let inBetween=false; // turns true when we are between the selected checkboxes
    if(e.shiftKey && this.checked) // checking if the shift key is pressed and the item is not being unchecked
    {
        checkboxes.forEach(checkbox => {        // looping over each checkbox to find all the checkboxes between the selected ones
            if(checkbox===this || checkbox ===lastChecked)
            {
                inBetween= !inBetween;
            }
            if(inBetween)
            {
                checkbox.checked= true;
            }
        });
    }
    
    lastChecked=this;
}

checkboxes.forEach(check => {check.addEventListener('click',checkHandler)});