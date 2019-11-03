
// Getting data from API server
const test = JSON.parse(graph);

// This and the following 5 functions return the value of the JSON objects
// Number of return function depends on how many objects array has
function firstValue(city) {
    return city.schifflange;
}

function secondValue(city) {
    return city.esch;
}

function thirdValue(city) {
    return city.luxembourg;
}

function forthValue(city) {
    return city.petange;
}

function fifthValue(city) {
    return city.bettembourg;
}

function sixthValue(city) {
    return city.dudelange;
}


let myChart = document.getElementById('myChart').getContext('2d');

// Global options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';


let iChart = new Chart(myChart, {
    type:'bar', //bar 
    data:{
        labels:['Schifflange', 'Esch-sur-Alzette', 'Luxembourg', 'Petange', 'Bettembourg', 'Dudelange'],
        datasets:[{
            label:'Population',
            data:[

                // Getting values from JSON
                test.map(firstValue),
                test.map(secondValue),
                test.map(thirdValue),
                test.map(forthValue),
                test.map(fifthValue),
                test.map(sixthValue),

                //8155,
                //28228,
                //76684,
                //7187,
                //7427,
                //18013
                
            ],
            //backgroundColor:'blue'
            backgroundColor:[
                'green',
                'blue',
                'red',
                'yellow',
                'orange',
                'black'
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
        }]
    },
    options:{
        // can change properties of the title
        title:{
            display:true,
            text:'City Population (Dynamic)',
            fontSize:25,
        },
        legend:{
            display:true,
            position:'right',
            labels:{
                fontColor:'#000'
            }
        },
        layout:{
            // can change position of the graph
            padding:{
                left:0,
                right:0,
                bottom:0,
                top:0
            }
        },
        tooltips:{
            enabled:true
        }
    },
});