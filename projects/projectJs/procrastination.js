let taskArray = ['do dishes', 'vacuum', 'read a book', 'clean the fridge', 
'clean the living room', 'clean the bathroom', 'face your inner demons', 'throw out sh*t you don\'t need', 'get crafty'];
let timeArray = ['10 minutes', '15 minutes', '20 minutes', '25 minutes', '30 minutes']
let rewardArray = ['a nap', 'a long walk', 'a healthy snack', 'a highfive', 'a hot beverage', 'social interation with a kitty', 'buying sh*t you don\'t need'
]
let goButton = document.getElementById('procButton');
let target = document.getElementById('procTarget');
function chooseTask() {
    randomNumber = Math.floor(Math.random() * taskArray.length);
    return taskArray[randomNumber];
};
function chooseTime() {
    randomNumber = Math.floor(Math.random() * timeArray.length);
    return timeArray[randomNumber];
};
function chooseReward() {
    randomNumber = Math.floor(Math.random() * rewardArray.length);
    return rewardArray[randomNumber];
};

function procrastinate() {
    let taskChoice = chooseTask();
    let timeChoice = chooseTime();
    let rewardChoice = chooseReward();
    let text = `Go ${taskChoice} for ${timeChoice} then reward yourself with ${rewardChoice}. `;
    target.innerHTML = text;
};

goButton.addEventListener('click', procrastinate);