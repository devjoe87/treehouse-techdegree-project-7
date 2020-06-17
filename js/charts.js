//LINE GRAPH SECTION
// --------------------------------

let trafficChart = document.getElementById('traffic-chart').getContext('2d');
const chartNavLink = document.querySelector('.li.traffic-nav-li');

Chart.defaults.global.animation.easing = 'easeInOutQuad';

let lineChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            backgroundColor: '#112D32',
            borderColor: '#66FCF1',
            borderWidth: 1,
            data: [750, 1000, 1250, 1100, 1500, 1750, 1300, 1600, 1200, 2050, 1750],
            lineTension: 0,
            pointRadius: 6,
            pointBackgroundColor: '#fff',
            pointHoverRadius: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false
        },
    }
});

// --------------------------------

//HOURLY
$(".update-hourly").on("click", function() {
    lineChart.data.datasets[0].data = [150, 300, 500, 450, 770, 560, 380, 470, 320];
    lineChart.data.labels = [09.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00];
    lineChart.data.datasets[0].backgroundColor ='#88BDBC';
    lineChart.update();
});

//DAILY
$(".update-daily").on("click", function() {
    lineChart.data.datasets[0].data = [250, 400, 650, 490, 770, 610, 650];
    lineChart.data.labels = ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'];
    lineChart.data.datasets[0].backgroundColor = '#254E58';
    lineChart.update();
});

//WEEKLY
$(".update-weekly").on("click", function() {
    lineChart.data.datasets[0].data = [750, 1000, 1250, 1100, 1500, 1750, 1300, 1600, 1200, 2050, 1750];
    lineChart.data.labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    lineChart.data.datasets[0].backgroundColor = '#112D32';
    lineChart.update();
});

//MONTHLY
$(".update-monthly").on("click", function() {
    lineChart.data.datasets[0].data = [900, 2000, 1600, 2200, 2400, 1800, 2550, 2800, 2300, 1900, 1430, 2110];
    lineChart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    lineChart.data.datasets[0].backgroundColor = '#4F4A41';
    lineChart.update();
});

// --------------------------------

$('ul li.traffic-nav-li').on('click', function () {
    var $this = $(this);
    $(this).closest('li')
    .addClass('active')
        .siblings()
    .removeClass('active');
});




//BAR GRAPH SECTION
// --------------------------------

let dailyCanvas = document.getElementById('daily-chart').getContext('2d');
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            backgroundColor: '#C5C6C7',
            hoverBackgroundColor: '#45A29E',
            data: [100, 175, 150, 125, 225, 200, 120, 75]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false,
            }
        }
});


//DOUGHNUT GRAPH SECTION
// --------------------------------

let mobileCanvas = document.getElementById('mobile-chart').getContext('2d');
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut', 
    data: {
        labels: ['Phones', 'Tablet', 'Desktop'],
        datasets: [{
            backgroundColor: [
            '#45A29E',
            '#C5C6C7',
            '#66FCF1'
        ],
            data: [253, 130, 586]
        }]
    },
    options: {
        rotation: 130,
        legend: {
            position: 'right',
            labels: {
                fontColor: '#FFF'
            }
        }
    }
});