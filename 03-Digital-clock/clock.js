const clock =document.getElementById('clock').innerHTML = new Date().toLocaleTimeString(); // This will display the current time in the element with the id of 'clock'

setInterval(function() {
    document.getElementById('clock').innerHTML = new Date().toLocaleTimeString();
}, 1000); // This will update the time every second