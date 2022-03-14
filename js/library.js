// Typed motion
let type = new Typed('.typing-text', {
    strings: ['Frontend Web Developer', 'Learn By Doing'],
    typeSpeed: 100,
    loop: true
});

// Textition motion
$(document).ready(function() {
    $('#textition-text').textition({
        speed: 1,
        animation: 'ease-in-out',
        map: {
            x: 100,
            y: 100,
            z: 0
        },
        autoplay: true,
        interval: 2.2
    })
});

// Easy Pie Chart
$(function() {
    $('.chart').easyPieChart({
        size: 120,
        barColor: '#00ff66',
        trackColor: '#222',
        scaleColor: false,
        lineWidth: 11,
        lineCap: 'circle',
        animate: 1200
    });
});

// water ripple effect
$('.home').ripples();