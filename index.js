// Your code goes here
document.addEventListener("DOMContentLoaded", (event) => {
    onDOMContentLoaded();
    console.log("The DOM has loaded");
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

const event = document.createEvent('Event');

onDOMContentLoaded = (event) => {
    const text = document.getElementById('text').textContent = "This is really cool!";
};


