// Define the game's variables
let playerName;
let levels;
let currentMatches = 0;
let currentScore = 0;
const maxClicks = 4;
    let clicks = 0;
    let selectedWords = [];
    let value = [];
    let cate = {};

const endGame = 0;
    let maxLives = 3;
   
const healthDisplay = document.getElementById('healthDisplay');


let currentLevel = 1;
displayLevel = currentLevel;

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', checkMatch);
document.body.appendChild(submitButton);

const resetGame = document.getElementById('resetGame');
resetGame.addEventListener('click', resetTheGame);
document.body.appendChild(resetGame);




// const shuffle = document.getElementById('shuffle');
// shuffle.addEventListener('click', shuffleBoard);




const infoBoard = document.getElementById('infoBoard');

// Set a default avatar
function defaultAvatar() {
    const showPic = document.createElement('div');
    showPic.id = 'playerAvatar';
    showPic.classList.add('showPic');
    infoBoard.appendChild(showPic);
    document.getElementById('playerAvatar').innerHTML = `<img src="Monster1.PNG" alt="Player's Avatar" class ="avatarChosen">`;

}
defaultAvatar();

// Show the avatar box
function showAvatarBox() {
    const avatarBox = document.getElementById('avatarBox');
    if (avatarBox.style.display === 'block') {
        avatarBox.style.display = 'none';
    } else {
        avatarBox.style.display = 'block';
    }
}

// Select an avatar 
function selectAvatar(avatarSrc) {
    // Change the player's image to the selected avatar
    if (!document.getElementById('playerAvatar')) {
        // Create the showPic element only once
        const showPic = document.createElement('div');
        showPic.id = 'playerAvatar';
        showPic.classList.add('showPic');
        infoBoard.appendChild(showPic);
    }

    // Update the player's image
    document.getElementById('playerAvatar').innerHTML = `<img src="${avatarSrc}" alt="Player's Avatar" class ="avatarChosen">`;
    // Close box
    document.getElementById('avatarBox').style.display = 'none';
}

console.log(currentScore);
const score = document.getElementById('score');


// Resets Game
function resetTheGame() {
    Swal.fire({
        title: "Are you sure you would like to restart?",
        text: "This will restart your game to Level 1!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });
}



//Matches words with appropriate Category
const levels1 = {
    level1: {
        listOfwords:[ 
            "APPLE", "BANANA", "ORANGE", "PEAR",
            "DOG", "CAT", "ELEPHANT", "LION",
            "RED", "BLUE", "GREEN", "YELLOW",
            "USA", "CANADA", "FRANCE", "JAPAN"
        ],
        categories: {
            "FRUITS": ["APPLE", "BANANA", "ORANGE", "PEAR"],
            "ANIMALS": ["DOG", "CAT", "ELEPHANT", "LION"],
            "COLORS": ["RED", "BLUE", "GREEN", "YELLOW"],
            "COUNTRIES": ["USA", "CANADA", "FRANCE", "JAPAN"]
        }
    },
    level2: {
        listOfwords: [ 
            "APPLE1", "BANANA1", "ORANGE1", "PEAR1",
            "DOG1", "CAT1", "ELEPHANT1", "LION1",
            "RED1", "BLUE1", "GREEN1", "YELLOW1",
            "USA1", "CANADA1", "FRANCE1", "JAPAN1"
        ],
        categories: {
            "FRUITS1": ["APPLE1", "BANANA1", "ORANGE1", "PEAR1"],
            "ANIMALS1": ["DOG1", "CAT1", "ELEPHANT1", "LION1"],
            "COLORS1": ["RED1", "BLUE1", "GREEN1", "YELLOW1"],
            "COUNTRIES1": ["USA1", "CANADA1", "FRANCE1", "JAPAN1"]
        }
    },
    level3:  {
        "listOfwords": [ 
            "APPLE2", "BANANA2", "ORANGE2", "PEAR2",
            "DOG2", "CAT2", "ELEPHANT2", "LION2",
            "RED2", "BLUE2", "GREEN2", "YELLOW2",
            "USA2", "CANADA2", "FRANCE2", "JAPAN2"
        ],
        "categories": {
            "FRUITS2": ["APPLE2", "BANANA2", "ORANGE2", "PEAR2"],
            "ANIMALS2": ["DOG2", "CAT2", "ELEPHANT2", "LION2"],
            "COLORS2": ["RED2", "BLUE2", "GREEN2", "YELLOW2"],
            "COUNTRIES2": ["USA2", "CANADA2", "FRANCE2", "JAPAN2"]
        }
    }
};


const health = document.getElementById('health');
const grid = document.getElementById('grid');
const cells = [];

const lifepoints = document.getElementById('lifepoints');
   // lifepoints === lives;
   
   // Set the current level
function setCurrentLevel() {
    value = levels1[`level${currentLevel}`].listOfwords.slice(); // reset the value array
    cate = levels1[`level${currentLevel}`].categories;
}
setCurrentLevel();

let valueLength = value.length;


async function getPlayerName() {
    const { value: myinputdata } = await Swal.fire({
        heightAuto: false,
        title: 'Please Enter Your Name Below',
        input: 'text', 
        inputPlaceholder: 'Enter Name'
      })
      if (myinputdata) {
        return playerName = myinputdata
      } else {
        return playerName = "Player"
      }
}
getPlayerName();

//Display Player's Name
async function showPlayerName() {
    let displayName = document.getElementById('displayName');
    const playerName = await getPlayerName();
    displayName.textContent = playerName;
};
showPlayerName();

// function checkLevel() {
//     if (currentLevel === 1) {
//         value = ListofWords1;
//         cate = categories1;
//     }   
//     if (currentLevel === 2) {
//         value = ListofWords2;
//         cate = categories2;
//     }
// }
// checkLevel();


// Display current level
function showCurrentLevel() {
    let displayLevel = document.getElementById('displayLevel');
    displayLevel.textContent = 'Level ' + currentLevel;
    displayLevel.classList.add('levelDisplay');
}
showCurrentLevel();

function WordGenerator() {
    const RandomNumber = Math.floor(Math.random() * value.length);
    const RandomWord = value[RandomNumber];
    value.splice(RandomNumber, 1);
    return RandomWord;
}

// console.log(WordGenerator)

//Create grid with randomly selected words   
 function FillGrid() {
    // Reset the value array
    value = levels1[`level${currentLevel}`].listOfwords.slice();

    for (let i = 0; i < valueLength; i++) {
        const RandomWord = WordGenerator();
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.textContent = RandomWord;
        cell.addEventListener('click', handleClick);
        grid.appendChild(cell);
        cells.push(cell);
}};
FillGrid();


function updateHealthDisplay() {
    healthDisplay.innerHTML = '';
    for (let i = 0; i < maxLives; i++) {
        const heartSpan = document.createElement('span');
        heartSpan.classList.add('heart');
        heartSpan.textContent = '❤️';
        healthDisplay.appendChild(heartSpan);
    }
}

//Manages selected words-grids
function handleClick() {
    const cell = this;
    if (cell.classList.contains('matched')) return;

    if (cell.classList.contains('clicked')){
        cell.classList.remove('clicked')
        clicks--;
        selectedWords = selectedWords.filter(word => word !== cell.textContent);
    } else {
        if (clicks < maxClicks && selectedWords.length < maxClicks) {
            cell.classList.add('clicked')
            clicks++;
            selectedWords.push(cell.textContent);
        } else if (selectedWords.length === maxClicks) {
            Swal.fire({
                scrollbarPadding: false,
                heightAuto: false, 
                title: "Wait a minute...",
                text: "I think 4 words are already selected... Might want to submit your selection first!",
                icon: "question",
            });
        } else {
            alert("Please select 4 words first.");
        }
    }
}

const nextLevelButton = document.getElementById('nextLevelButton');

// Hide the button initially
nextLevelButton.style.display = 'none';

function showNextLevelButton() {
    nextLevelButton.style.display = 'block';
}

function hideNextLevelButton() {
    nextLevelButton.style.display = 'none';
}

nextLevelButton.addEventListener('click', () => {
    Swal.fire({
        scrollbarPadding: false,
        heightAuto: false,
        title: "Congratulations, " + playerName + "!",
        text: "You have completed level " + (currentLevel) + ". Moving on to level " + (currentLevel + 1) + ".",
        imageUrl: "SesameDance.gif",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Custom image2"
      });
    
// Hide the current grid
grid.style.opacity = 0;

// Wait for 1 second before showing the next level
setTimeout(() => {
// Clear the grid
grid.innerHTML = "";

// Move to the next level
currentLevel++;
// Reset Lives
maxLives = 3;

// Update the health display
updateHealthDisplay(); 

// Show the new level's grid
showCurrentLevel();

// Update the grid with the new level
setCurrentLevel();
FillGrid();

// Show the grid again
grid.style.opacity = 1;

// Reset the match counter
currentMatches = 0;
}, 1000);
hideNextLevelButton();
});




//Verifies if words belong to a category
function checkMatch() {
    
    if (selectedWords.length < maxClicks) {
        Swal.fire({
            scrollbarPadding: false,
            heightAuto: false, 
            title: "Hmmmm...",
            text: "I don't think 4 words were selected",
            icon: "question",
          });
        return;
    }
    for (let category in cate) {
        if (cate[category].every(word => selectedWords.includes(word))) {

            // Immediately add +1 to Current match Variable
            currentMatches ++;

            // Get the selected grids
    const selectedGrids = cells.filter(cell => cell.classList.contains('clicked'));

    // Remove the selected class from the selected grids
    selectedGrids.forEach(cell => cell.classList.remove('matched'));

    // Remove the selected grids from the gridContainer
    selectedGrids.forEach(cell => {
        if (grid.contains(cell)) {
          grid.removeChild(cell);
        }
      });
      
      
      console.log(currentMatches)
    
    // Create a new grid element
    const newGrid = document.createElement('div');
    newGrid.classList.add('new-grid');
    newGrid.textContent = 'Congratulations! the words matched with the following category:' + category;

    // Add the new grid to the top row
    const newRow = document.createElement('div');
    newRow.classList.add('grid-row' + currentMatches);
    console.log (newRow.classList)
    newRow.appendChild(newGrid);
    grid.insertBefore(newRow, grid.firstChild);

            Swal.fire({
                scrollbarPadding: false,
                heightAuto: false, 
                heading : "Congratulations, " + playerName + "!" ,
                text : "You matched words related to the category: " + category,
                icon : "success"
            });
            selectedWords.forEach(word => {
                const cell = cells.find(cell => cell.textContent === word);
                cell.classList.add('matched');
                cell.textContent = '';
                
            })
            Swal.fire({
                scrollbarPadding: false,
                heightAuto: false, 
                position: "top-end",
                icon: "success",
                title: "+25 Points",
                showConfirmButton: false,
                timer: 1000
            });
            currentScore = currentScore + 25;
            score.textContent = currentScore;
            console.log(currentScore);
            clicks = 0;
            selectedWords = [];
            
            if (currentMatches === 4) {
              
                showNextLevelButton();


               } 
            console.log(currentMatches);
            return;
            
        }
        
    }
    Swal.fire({
        scrollbarPadding: false,
        heightAuto: false,
        icon: "error",
        title: "No category matched " + playerName,
        text: "Try again!",
      });
    cells.forEach(cell => {
        if (cell.classList.contains('clicked')) {
            cell.classList.remove('clicked');
        }
    });
    clicks = 0;
    maxLives--;
    updateHealthDisplay(); 
    console.log(maxLives)
    selectedWords = [];
    if (endGame === maxLives) {
        Swal.fire({
            scrollbarPadding: false,
            heightAuto: false,
            title: "Nice try " + playerName,
            text: "Let's restart and give it another go!!",
            imageUrl: "giphy.gif",
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: "Custom image"
          });
        cells.forEach(cell => {
           if (cell.classList.contains('clicked')) {
             cell.classList.remove('clicked');
           }
           cell.textContent = '';
         });
         
         if (currentLevel > 1) {
            grid.innerHTML = "";
            currentMatches = 0;
            clicks = 0;
            maxLives = 3;
            let newScore = ((currentLevel * 100) - 100);  
            score.textContent = newScore
            currentScore = newScore;
            setCurrentLevel();
            FillGrid();
            updateHealthDisplay();
         } else { 
    // Reset variables
    grid.innerHTML = "";
    currentMatches = 0;
    clicks = 0;
    maxLives = 3;
    score.textContent = 0
    currentScore = 0;
    
    // Call Functions
    setCurrentLevel();
    FillGrid();
    updateHealthDisplay();
         }   
    }
       
       
     
}


