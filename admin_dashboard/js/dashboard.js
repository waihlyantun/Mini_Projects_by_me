$(".counter-up").counterUp({
    delay: 10,
    time: 1000
});

// Order & Viewer Chart

let orderViewerLabel = ["Feb 4", "Feb 5", "Feb 6", "Feb 7", "Feb 8", "Feb 9", "Feb 10"];
let orderArr = [32, 95, 59, 47, 65, 53, 72];
let viewerArr = [54, 129, 78, 101, 82, 93, 127];

const ct1 = document.getElementById('orderViewer').getContext('2d');
const orderViewer = new Chart(ct1, {
    type: 'line',
    data: {
        labels: orderViewerLabel,
        datasets: [{
            label: 'Orders',
            pointRadius: 0,
            data: orderArr,
            fill: 'origin',
            backgroundColor: [
                '#22d1ee20',
            ],
            borderColor: [
                '#22d1ee',
            ],
            borderWidth: 1,
            tension: 0,         
        }, {
            label: 'Viewers',
            pointRadius: 0,
            data: viewerArr,
            fill: "-1",
            backgroundColor: [
                '#3d5af115',
            ],
            borderColor: [
                '#3d5af1',
            ],
            borderWidth: 1,
            tension: 0,
        }
    ]
    },
    options: {
        scales: {
            x: {
                grid: {
                  display: false
                }
            },
            y: {
                grid: {
                  display: false
                }
            },
        },
        plugins: {
            legend: {
                align: "end",
                labels: {
                    usePointStyle: true,
                    boxWidth: 8
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        hover: {
            mode: 'nearest',
            intersect: false
        },
        // responsive: true,
    }
});

// Product Order Chart

let productTypes = ["Hot Drink", "Cold Drink", "Cake"];
let mostSalesArr = [17, 44, 39];

const ct2 = document.getElementById('productOrderChart').getContext('2d');
const productOrderChart = new Chart(ct2, {
    type: 'doughnut',
    data: {
        labels: productTypes,
          datasets: [{
            label: 'My First Dataset',
            data: mostSalesArr,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
    },
    options: {
        cutout: "80%",
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right",
                labels: {
                    usePointStyle: true,
                    boxWidth: 8
                }
            }
        }
        // plugins: {
        //     tooltip: {
        //         callbacks: {
        //             label: function(tooltipItems, data) { 
        //                 return console.log(tooltipItems);
        //             }
        //         }
        //     }
        // }
    }  
});