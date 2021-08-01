const inputs= document.querySelectorAll('.controls input');
//inputs is a nodelist

function inputHandler()
{
    const suffix= this.dataset.sizing || ''; //selects the data-sizing
    // dataset refers to anything starting with data- in HTML
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change',inputHandler));
// forEach is a specific function for nodelist