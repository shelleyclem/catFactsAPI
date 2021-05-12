const baseURL = 'https://cat-fact.herokuapp.com/facts/random';
const factButton = document.getElementById('button')

console.log(factButton);
let catFactOTM = document.querySelector('#catFactOTM');
factButton.addEventListener("submit", fetchResults);


function fetchResults(event) {
    console.log('hit');
    fetch(baseURL)
    .then(function (response) {
        return response.json();
    })
    . then(function(data) {
        console.log(data);
        display(data)
    })
    event.preventDefault()
}

const display = (data) => {
    console.log(data.text);
    let catfact = data.text;
    //catFactOTM= catfact
    catfact = catFactOTM.innerText;
}




// .catch(function(err) {
//     console.log("Are you kitten me? There's been a cat-astrophic error. Try again meow.");
// });


//Event listener for button click (e) short for event
    //display text on a cat photos saved in assets 