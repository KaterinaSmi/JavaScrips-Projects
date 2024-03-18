// Attach event listeners to all "+" buttons
document.querySelectorAll('.increment').forEach(button => {
    button.addEventListener('click', () => {
        // Find the closest score element and increment its value
        const score = button.closest('.team').querySelector('.score');//closet, because there are 2 buttons, looking for the closet according to hTML structure
        score.textContent = parseInt(score.textContent) + 1;
    });
});

// Attach event listeners to all "-" buttons
document.querySelectorAll('.decrement').forEach(button => {
    button.addEventListener('click', () => {
        // Find the closest score element
        const team = button.closest('.team');
        const score = team.querySelector('.score');
        
        // Get the current score value as an integer
        const currentScore = parseInt(score.textContent);

        // Check if the current score is not zero
        if (currentScore !== 0) {
            // Decrement the score by 1
            score.textContent = currentScore - 1;
        } else {
            // If the current score is zero, do nothing
            score.textContent ="0"
        }
    });
});

// Create a function that updates current time
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('current_time');
    const now = new Date();
    const formattedTime = now.toLocaleTimeString(); // Formats the time as a string, e.g., "12:35:07 PM", js method
    currentTimeElement.textContent = `Current time: ${formattedTime}`;
}

// Update the time immediately when the page loads
updateCurrentTime();

// Set an interval to update the time every second (1000 milliseconds)
setInterval(updateCurrentTime, 1000);

// Reset both score fields to zero
document.getElementById('reset').addEventListener('click', () => {
    document.querySelectorAll('.score').forEach(field => {
        field.textContent = '0';
    });
});

const flexGroups = document.querySelectorAll('.flex_group');
const selectBtn = document.getElementById('selection');

// Create a function that hides all displays, iterate through all flex-groups class and hide all
function hideAllDisplays(displays) {
    for (display of displays) {
        display.classList.add('hidden');
    }
}

// Keep visible only the chosen display, removes hiden class
selectBtn.addEventListener('change', () => {
    const chosenOption = selectBtn.value;
    hideAllDisplays(flexGroups);
    document.querySelector(`.${chosenOption}`).classList.remove('hidden');
}); // "." always goes before class.  classlist - access classes

const getPriceBtn = document.getElementById('get_price');
const inputField = document.getElementById('userAge');
const priceResult = document.getElementById('priceResult');

getPriceBtn.addEventListener('click', () => {
    const age = Number(inputField.value); // Convert input to a number
    if (!isNaN(age) && age >= 0) { // Check if age is a number and non-negative
        let priceMessage = '';
        if (age < 8) {
            priceMessage = 'Free'; 
        } else if (age < 11) {
            priceMessage = '10 euros'; 
        } else if (age < 24) {
            priceMessage = '15 euros';
        } else {
            priceMessage = '20 euros'; 
        }
        priceResult.textContent = `Ticket price: ${priceMessage}`; // Displaying the price
    } else {
        priceResult.textContent = 'Please enter a valid age.'; // Handling invalid input
    }
});

// Get the checkbox element by its ID
const checkbox = document.getElementById('players');

// Get the element representing the player addition form/display
const addPlayerDisplay = document.querySelector('.add_player');

// Attach an event listener to the checkbox for the 'change' event
checkbox.addEventListener('change', (event) => {
    // Check if the checkbox is checked
    if (event.target.checked) {
        // If checked, hide all displays based on the flexGroups argument
        hideAllDisplays(flexGroups);
        // Then, make the player addition form/display visible
        addPlayerDisplay.classList.remove('hidden');
    } else {
        // If unchecked, get the value of the selected option
        const chosenOption = selectBtn.value;
        // Hide the player addition form/display
        addPlayerDisplay.classList.add('hidden');
        // Hide all displays again to reset the state
        hideAllDisplays(flexGroups);
        // Finally, make the display corresponding to the selected option visible
        document.querySelector(`.${chosenOption}`).classList.remove('hidden');
    }
});

// Find the insert and delete buttons
const insertBtn = document.querySelector('.insert');
const deleteBtn = document.querySelector('.delete');
// Find the player list where new players will be inserted
const playerList = document.querySelector('.player_list');

// Event listener for the insert button
insertBtn.addEventListener('click', function() {
    // Get the input values
    const playerNameInput = document.getElementById('player_name');
    const playerLastNameInput = document.getElementById('player_last_name');
    const playerNumberInput = document.getElementById('player_number');

    // Create divs for each input and append to the player list. 
    playerList.appendChild(createDiv(playerNameInput.value));
    playerList.appendChild(createDiv(playerLastNameInput.value));
    playerList.appendChild(createDiv(playerNumberInput.value));

    // Clear the input fields by setting their value to an empty string
    playerNameInput.value = '';
    playerLastNameInput.value = '';
    playerNumberInput.value = '';
});

// Event listener for the delete button
deleteBtn.addEventListener('click', function() {
    // Remove the last three elements from the player list (name,lname,num)
    for (let i = 0; i < 3; i++) { //i iterated 3 times as we need to remove 3 divs at a time
        if (playerList.lastElementChild) {
            playerList.removeChild(playerList.lastElementChild);//last el is firstly num, then goes to remove 2nd child
        }
    }
});

// Function to create a div with text content
function createDiv(content) {
    const div = document.createElement('div');
    div.textContent = content;
    return div;
}

