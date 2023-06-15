var displayExercise = anime({
    targets: '#runningDisplay',
    translateX: {
        value: [-1000, 0],
    },

    duration: 1000,
    easing: 'easeInOutQuart',
});

var displayExercise2 = anime({
    targets: '#cyclingDisplay',
    translateX: {
        value: [-1000, 0],
    },

    duration: 1000,
    easing: 'easeInOutQuart',
});

function username() {
    var username = document.getElementById('fname').value;
    if (username == "") {
        document.getElementById("usernameHeader").innerHTML = "";
        document.getElementById("fname").placeholder ="Please enter your name"
    } else {
        document.getElementById("usernameHeader").innerHTML = "Hello, " + username;
        document.getElementById("fname").placeholder ="Enter your name"
        document.location.href = '#section2';
    }
};

$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#99aaed', '#99aaed', '#99aaed', '#99aaed', '#99aaed', '#99aaed'],
        navigation: false,
        navigationPosition: 'right',

        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'], //name the anchors for each section

        afterLoad: function (origin, destination, direction) {
            if (destination.index == 3) {
                displayExercise.play();
            } else if (destination.index == 5) {
                displayExercise2.play();
            }
        },

    });

    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);



});

$(document).ready(function () {
    tippy('#whatIsExerciseTracker', {
        content: '<b>Exercise Tracker</b> is an online app that helps users <b>keep track of their weekly exercise regime</b>.',
        allowHTML: true, //allow HTML in tippy content
        placement: 'bottom'
    });
});

function handleClick() {
    var distance1 = document.getElementById("distance1").value;
    var distance2 = document.getElementById("distance2").value;
    var distance3 = document.getElementById("distance3").value;
    var distance4 = document.getElementById("distance4").value;
    var distance5 = document.getElementById("distance5").value;
    var distance6 = document.getElementById("distance6").value;
    var distance7 = document.getElementById("distance7").value;
    var totaldistance1 = distance1 + distance2 + distance3 + distance4 + distance5 + distance6 + distance7;

    // Define chart labels
    const labels = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7'
    ];

    // Set labels, colours and data
    const data = {
        labels: labels,
        datasets: [{
            label: 'Distance Covered',
            backgroundColor: 'lightblue',
            borderColor: 'lightblue',
            data: [distance1, distance2, distance3, distance4, distance5, distance6, distance7],
        }]
    };


    // Configure chart

    let delayed;
    const config = {
        type: 'bar',
        data: data,
        options: {
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            },
            scales: {
                x: {
                    stacked: true,
                    title: { display: true, text: 'Day' }
                },
                y: {
                    stacked: true,
                    title: { display: true, text: 'Distance (km)' }
                }
            }
        }
    };

    // Render chart in <canvas>
    

    if (totaldistance1 >=10) {
        document.getElementById("RunningSuccess").style.display = "inline-block";
        document.getElementById("RunningFail").style.display = "none";
        const myChart = new Chart(
            document.getElementById('DistanceDistribution'),
            config
        );

    } else {
        document.getElementById("RunningFail").style.display = "inline-block";
    }
    
}

function handleClickCycling() {
    var distance1 = document.getElementById("distance8").value;
    var distance2 = document.getElementById("distance9").value;
    var distance3 = document.getElementById("distance10").value;
    var distance4 = document.getElementById("distance11").value;
    var distance5 = document.getElementById("distance12").value;
    var distance6 = document.getElementById("distance13").value;
    var distance7 = document.getElementById("distance14").value;
    var totaldistance2 = distance1 + distance2 + distance3 + distance4 + distance5 + distance6 + distance7;


    // Define chart labels
    const labels = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7'
    ];

    // Set labels, colours and data
    const data = {
        labels: labels,
        datasets: [{
            label: 'Distance Covered',
            backgroundColor: 'lightblue',
            borderColor: 'lightblue',
            data: [distance1, distance2, distance3, distance4, distance5, distance6, distance7],
        }]
    };


    // Configure chart

    let delayed;
    const config = {
        type: 'bar',
        data: data,
        options: {
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            },
            scales: {
                x: {
                    stacked: true,
                    title: { display: true, text: 'Day' }
                },
                y: {
                    stacked: true,
                    title: { display: true, text: 'Distance (km)' }
                }
            }
        }
    };

    // Render chart in <canvas>
    const myChart2 = new Chart(
        document.getElementById('DistanceDistribution2'),
        config
    );

    if (totaldistance2 >=20) {
        document.getElementById("CyclingSuccess").style.display = "inline-block";
        document.getElementById("CyclingFail").style.display = "none";
        const myChart2 = new Chart(
            document.getElementById('DistanceDistribution2'),
            config
        );

    } else {
        document.getElementById("CyclingFail").style.display = "inline-block";
    }
}
