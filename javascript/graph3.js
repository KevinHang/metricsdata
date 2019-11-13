// Getting data from API server
const testThree = JSON.parse(keywords);

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


let myChartThree = document.getElementById('myChart3').getContext('2d');

// Global options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';


let iChartThree = new Chart(myChartThree, {
    type:'bar', //bar 
    data:{
        labels:['Project A', 'Project B', 'Project C'],
        datasets:[{
            label:'Keywords',
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
            text:'User Keywords',
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