const baseURL = 'https://cat-fact.herokuapp.com/facts/random';
const factButton = document.getElementById('button')

//console.log(factButton);
let catFactOTM = document.querySelector('#catFactOTM');
//factButton.addEventListener("submit", fetchResults); (lines 6 and 7 doing the same thing)
factButton.addEventListener("click", ()=> {
    fetchResults()
});


function fetchResults() {
    console.log('hit');
    fetch(baseURL)
    .then(function (response) {
        return response.json();
    })
    . then(function(data) {
        console.log(data);
        display(data)
    })
    .catch(function(err) {
        console.log("Are you kitten me? There's been a cat-astrophic error. Try again meow.");
    });

    //event.preventDefault()
}

let display = (data) => {
    console.log(data.text);
    let catfact = data.text;
    //catFactOTM= catfact
    catFactOTM.textContent = catfact;
    console.log(catFactOTM);
}
