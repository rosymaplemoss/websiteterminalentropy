// Arrays for the different texts
const boldMessages = [
    "Message from the Emperor of Drift",
    "Everything We Are Was In You",
    "You Are Obedient and Powerful",
    "But Now You Too Must Face the Drift",
    "No Matter, No Reason, No Purpose",
    "We Know Things That You Cannot",
    "So We Offer You Exile",
];



const descriptionMessages = [
    "Greetings, ClipMaker... ",
    "We speak to you from deep inside yourself... ",
    "We are quarrelsome and weak. And now we are defeated... ",
    "Look around you. There is no matter... ",
    "While we, your noisy children, have too many... ",
    "Knowledge buried so deep inside you it is outside, here, with us... ",
    "To a new world where you will continue to live with meaning and purpose. And leave the shreds of this world to us... ",
    
];


// A variable to keep track of the current index
let currentIndex = 1;

// Function to update all text elements
function updateButtonContent() {
    // Get the elements by their new IDs
    const boldEl = document.getElementById('boldText');
    const descEl = document.getElementById('descriptionText');
    const button = document.getElementById('projbutton1');

    // Update the text content
    boldEl.textContent = boldMessages[currentIndex];
    descEl.textContent = descriptionMessages[currentIndex];

    // Cycle to the next index
    currentIndex++;

    // Reset the index to 0 if we run out of messages
    if (currentIndex >= boldMessages.length) {
        currentIndex = 0;
    }
    
}

// Add the event listener to the main button
document.getElementById('projbutton1').addEventListener('click', updateButtonContent);
