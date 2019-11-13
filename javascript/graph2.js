// Getting data from API server
const testTwo = JSON.parse(duplicates);

// This and the following 5 functions return the value of the JSON objects
// Number of return function depends on how many objects array has
function firstValue(info) {
    return info.projectA;
}

function secondValue(info) {
    return info.projectB;
}

function thirdValue(info) {
    return info.projectC;
}

function forthValue(info) {
    return info.projectAdup;
}

function fifthValue(info) {
    return info.projectBdup;
}

function sixthValue(info) {
    return info.projectCdup;
}


let myChartTwo = document.getElementById('myChart2').getContext('2d');

// Global options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';


let iChartTwo = new Chart(myChartTwo, {
    type:'bar', //bar 
    data:{
        labels:['Project A', 'Project B', 'Project C'],
        datasets:[{
            label:'Duplicates',
            data:[

                // Getting values from JSON

                testTwo.map(forthValue),
                testTwo.map(fifthValue),
                testTwo.map(sixthValue),
                
            ],
            //backgroundColor:'blue'
            backgroundColor:[
                'silver',
                'silver',
                'silver',
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
        },{
            label:'Once',
            data:[

                // Getting values from JSON
                testTwo.map(firstValue),
                testTwo.map(secondValue),
                testTwo.map(thirdValue),
                
            ],
            //backgroundColor:'blue'
            backgroundColor:[
                'lightblue',
                'lightblue',
                'lightblue',
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
        }
    ]
    },
    options:{
        // can change properties of the title
        scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true }]
        },
        title:{
            display:true,
            text:'Lines of Code - Duplicated',
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