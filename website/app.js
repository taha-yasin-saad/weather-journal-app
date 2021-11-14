/* Global Variables */
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = 'f9c9b0545062a589752704f7909886d1';



/* Function called by event listener */
/* Function to GET Web API Data*/
// let zipCode = '94040';


let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    let zipCode = document.getElementById('zip').value;
    let feelings = document.getElementById('feelings').value;

    let Data = retrieveData(baseURL, zipCode, apiKey);

    Data.then(function (result) {
        console.log(result.main.temp) // "Some User token"
        document.getElementById('temp').innerHTML = result.main.temp;
        document.getElementById('date').innerHTML = newDate;
        document.getElementById('content').innerHTML = feelings;
    })


}

/* Function to GET Project Data */

const retrieveData = async (url, zip, Key) => {

    const res = await fetch(url + zip + '&appid=' + Key)
    try {

        const data = await res.json();
        console.log(data)

        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}