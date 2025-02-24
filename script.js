console.log("Hello, world!");

// Example: Change the header text on click
const header = document.querySelector('header h1');
header.addEventListener('click', () => {
    header.textContent = "You clicked the header!";
});
