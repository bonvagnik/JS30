const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities=[];

fetch(endpoint)
    .then(x => x.json())
    .then(data => cities.push(...data)); // fetches all the cities from the link

function findMatches(wordEntered,cities)
{
    return cities.filter(place=> {
        const regex= new RegExp(wordEntered,'gi'); // g-> global: searches whole array; i-> insesnitive: case insensitive
        return place.city.match(regex) || place.state.match(regex);    
    });
}

function displayMatches()
{
    const matchArray= findMatches(this.value , cities); //returns an array according to each word typed   
    const html= matchArray.map(place =>{
        const regex= new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1"> ${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="h1"> ${this.value}</span>`); //highlights the entered words in  the suggestions
        return `
        <li>
            <span class="name"> ${cityName},${stateName}</span>
            <span class="population"> ${place.population}</span> 
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}


const searchWord= document.querySelector('.search'); // reads the the input text element
const suggestions= document.querySelector('.suggestions');

searchWord.addEventListener('change',displayMatches); // as words are types into the input, respective matches will be displayed
searchWord.addEventListener('keyup',displayMatches); // as words are types into the input, respective matches will be displayed
