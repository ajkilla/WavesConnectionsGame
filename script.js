//Manages amount of words selected
const maxClicks = 4;
    let clicks = 0;
    let selectedWords = [];

const endGame = 0;
    let maxLives = 3;
   
const healthDisplay = document.getElementById('healthDisplay');

let currentLevel = 1;
//Array of words
const ListofWords1 = [ 
    "apple", "banana", "orange", "pear",
    "dog", "cat", "elephant", "lion",
    "red", "blue", "green", "yellow",
    "USA", "Canada", "France", "Japan"
];
const ListofWords2 = [ 
    "apple1", "banana1", "orange1", "pear1",
    "dog1", "cat1", "elephant1", "lion1",
    "red1", "blue1", "green1", "yellow1",
    "USA1", "Canada1", "France1", "Japan1"
];

//Matches words with appropriate Category
const categories1 = {
    "FRUITS": ["apple", "banana", "orange", "pear"],
    "ANIMALS": ["dog", "cat", "elephant", "lion"],
    "COLORS": ["red", "blue", "green", "yellow"],
    "COUNTRIES": ["USA", "Canada", "France", "Japan"]
};

const categories2 = {
    "FRUITS1": ["apple1", "banana1", "orange1", "pear1"],
    "ANIMALS1": ["dog1", "cat1", "elephant1", "lion1"],
    "COLORS1": ["red1", "blue1", "green1", "yellow1"],
    "COUNTRIES1": ["USA1", "Canada1", "France1", "Japan1"]
};
const health = document.getElementById('health');
const grid = document.getElementById('grid');
    const cells = [];

    const lifepoints = document.getElementById('lifepoints');
   // lifepoints === lives;

/**  for (let i=0; i<4; i++) {
    let rnd = Math.floor(Math.random() * items.length);
    console.log(items[rnd]) 
} */
/**function getRandomWord() {
 const categoryKeys = Object.keys(categories);
const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
const categoryWords = categories[randomCategory];
 return categoryWords[Math.floor(Math.random() * categoryWords.length)];
}

const categoryKeys = Object.keys(categories);
const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
const categoryWords = categories[randomCategory];

let rnd = categoryKeys[Math.floor(Math.random() * categoryWords.length)]


      for (let i = 0, categoryList = categoryKeys, categoryLen = categoryKeys.length; i < categoryLen; i++) {
   let rndcategory = Math.floor(Math.random() * categoryList.length);   
   console.log(categoryKeys[rndcategory])
    categoryList.splice(rndcategory, 1)
   
}

const CategoryFruits = categories.fruits;
const CategoryAnimals = categories.animals;
const CategoryColors = categories.colors;
const CategoryCountries = categories.countries;
categoryKeys.forEach(myFunction);

function myFunction(item) {
    console.logitem[1]
}
*/
function checkLevel() {
    if (currentLevel === 1) {
        this.value = ListofWords1;
        this.cate = categories1;
}   if (currentLevel === 2) {
    this.value = ListofWords2;
    this.cate = categories2;
}
}  ;
checkLevel();

function WordGenerator() {
    for (let i = 0, Words = this.value, Length = this.value.length; i < Length; i++) {
        RandomNumber1 = [Math.floor(Math.random() * Words.length)];
        RandomWord1 = (Words[RandomNumber1])
           
            return RandomWord
}};
console.log(WordGenerator)
 //Create grid with randomly selected words   
function FillGrid() {
    
     for (let i = 0, Words = this.value, Length = this.value.length; i < Length; i++) {
        RandomNumber = [Math.floor(Math.random() * Words.length)];
        RandomWord = (Words[RandomNumber])
            Words.splice(RandomNumber, 1) 
                const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.dataset.index = i;
                    cell.textContent = RandomWord;
                    cell.addEventListener('click', handleClick);
                    grid.appendChild(cell);
                    cells.push(cell);
}
};

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

    if (cell.classList.contains('clicked')) {
        cell.classList.remove('clicked');
        clicks--;
        selectedWords = selectedWords.filter(word => word !== cell.textContent);
    } else {
        if (clicks < maxClicks) {
            cell.classList.add('clicked');
            clicks++;
            selectedWords.push(cell.textContent);
            if (clicks === maxClicks) {
                checkMatch();
            }
        }
    }
}

//Verifies if words belong to a category
function checkMatch() {
    for (let category in this.cate) {
        if (this.cate[category].every(word => selectedWords.includes(word))) {
            alert("Congratulations! You matched words related to the category: " + category);
            selectedWords.forEach(word => {
                const cell = cells.find(cell => cell.textContent === word);
                cell.classList.add('matched');
                cell.textContent = '';
                
            })
            
            clicks = 0;
            selectedWords = [];
            
            
            return;
            
        }
    } 
    alert("No category matched. Try again.");
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
        alert ("Nice try! Let's restart this and give it another go!! :)");

        cells.forEach(cell => {
            if (cell.classList.contains('clicked')) {
                cell.classList.remove('clicked');
            }
        })   
            cells.forEach(cell => {
                if (cell.classList.contains('cell')) {
                    cell.textContent = WordGenerator();
                
                }  
            });
    } 
    /** cells.forEach(cell => {
        if (cell.classList.contains('cell')) {
            cell.textContent = "Nothing"
        }
    }) */
} 


