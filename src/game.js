var searchMode = new URLSearchParams(window.location.search)
var mode = searchMode.get('m')
const timeUpdate = document.getElementById('time')
var lifes = 3;
const scoreDis = document.getElementById('score')
var time = 15;
var prevTime = time;
var diffTime = 15;
//timer
var interval = setInterval(() => {
    if (Number(timeUpdate.innerHTML) == 0) {
        location.href = "gameOver.html?b=timeup"
    } else {
        timeUpdate.innerHTML = Number(timeUpdate.innerHTML) - 1
    }
}, 1000);




if (mode == 'easy') {
    timeUpdate.innerHTML = 15
} else if (mode == 'medium') {
    timeUpdate.innerHTML = 10
} else if (mode == 'hard') {
    timeUpdate.innerHTML = 10
}

var currentDifficulty = 20;
if (mode == 'easy') {
    currentDifficulty = 20
} else if (mode == 'medium') {
    currentDifficulty = 130
} else if (mode == 'hard') {
    currentDifficulty = 300
}

var randIntOne = Math.round(Math.random() * currentDifficulty);
var randIntTwo = Math.round(Math.random() * currentDifficulty);

var operators = ['+', '-']

var currOperator = operators[Math.floor((Math.random() * operators.length))]

var ans;
if (currOperator == '+') {
    ans = randIntOne + randIntTwo
} else if (currOperator == '-') {
    ans = randIntOne - randIntTwo
}

var ansRandomOne = ans - Math.round(Math.random() * (10, 1) + 1)
var ansRandomTwo = ans + Math.round(Math.random() * (10, 1) + 1)
if (ansRandomOne == 0) {
    ansRandomOne++
}
if (ansRandomTwo == 0) {
    ansRandomTwo++
}

const targetOne = document.getElementById('target-1')
const targetTwo = document.getElementById('target-2')
const targetThree = document.getElementById('target-3')

//Switch generation

var randPosInt = Math.round(Math.random() * 2)

switch (randPosInt) {
    case 0:
        targetOne.innerHTML = ans
        targetTwo.innerHTML = ansRandomOne
        targetThree.innerHTML = ansRandomTwo
        break
    case 1:
        targetOne.innerHTML = ansRandomOne
        targetTwo.innerHTML = ans
        targetThree.innerHTML = ansRandomTwo
        break
    case 2:
        targetOne.innerHTML = ansRandomOne
        targetTwo.innerHTML = ansRandomTwo
        targetThree.innerHTML = ans
        break



}
//Question generation
const questionOne = document.getElementById('num1')
const questionTwo = document.getElementById('num2')
const operatorDis = document.getElementById('operator')

questionOne.innerHTML = randIntOne
operatorDis.innerHTML = currOperator
questionTwo.innerHTML = randIntTwo

//Checking
const lifeDisplay = document.getElementById('lifes')

targetOne.onclick = () => {
    if (Number(targetOne.innerHTML) == ans) {
        scoreDis.innerHTML =
            Number(scoreDis.innerHTML) + 1
        timeUpdate.innerHTML = 10
        if (mode == 'easy') {
            currentDifficulty = currentDifficulty + 5
        } else if (mode == 'medium') {
            currentDifficulty = currentDifficulty + 25

        } else if (mode == 'hard') {
            currentDifficulty = currentDifficulty + 50

        }

        randIntOne = Math.round(Math.random() * currentDifficulty);
        randIntTwo = Math.round(Math.random() * currentDifficulty);

        operators = ['+', '-']

        currOperator = operators[Math.floor((Math.random() * operators.length))]

        ans = ''
        if (currOperator == '+') {
            ans = randIntOne + randIntTwo
        } else if (currOperator == '-') {
            ans = randIntOne - randIntTwo
        }

        ansRandomOne = ans - Math.round(Math.random() * (10, 1) + 1)
        ansRandomTwo = ans + Math.round(Math.random() * (10, 1) + 1)
        if (ansRandomOne == 0) {
            ansRandomOne++
        }
        if (ansRandomTwo == 0) {
            ansRandomTwo++
        }

        //Switch generation

        var randPosInt = Math.round(Math.random() * 2)

        switch (randPosInt) {
            case 0:
                targetOne.innerHTML = ans
                targetTwo.innerHTML = ansRandomOne
                targetThree.innerHTML = ansRandomTwo
                break
            case 1:
                targetOne.innerHTML = ansRandomOne
                targetTwo.innerHTML = ans
                targetThree.innerHTML = ansRandomTwo
                break
            case 2:
                targetOne.innerHTML = ansRandomOne
                targetTwo.innerHTML = ansRandomTwo
                targetThree.innerHTML = ans
                break



        }
        //Question generation
        const questionOne = document.getElementById('num1')
        const questionTwo = document.getElementById('num2')
        const operatorDis = document.getElementById('operator')

        questionOne.innerHTML = randIntOne
        operatorDis.innerHTML = currOperator
        questionTwo.innerHTML = randIntTwo

    } else {
        lifes--
        lifeDisplay.innerHTML = lifes
        if (lifes == 0) {
            alert('Game over')
            location.href = `gameOver.html?score=${Number(scoreDis.innerHTML)}&m=${mode}`
        }
    }
}

targetThree.onclick = () => {
    if (Number(targetThree.innerHTML) == ans) {
        scoreDis.innerHTML =
            Number(scoreDis.innerHTML) + 1
        timeUpdate.innerHTML = 10

        if (mode == 'easy') {
            currentDifficulty = currentDifficulty + 5
        } else if (mode == 'medium') {
            currentDifficulty = currentDifficulty + 25

        } else if (mode == 'hard') {
            currentDifficulty = currentDifficulty + 50

        }

        randIntOne = Math.round(Math.random() * currentDifficulty);
        randIntTwo = Math.round(Math.random() * currentDifficulty);

        operators = ['+', '-']

        currOperator = operators[Math.floor((Math.random() * operators.length))]

        ans = ''
        if (currOperator == '+') {
            ans = randIntOne + randIntTwo
        } else if (currOperator == '-') {
            ans = randIntOne - randIntTwo
        }

        ansRandomOne = ans - Math.round(Math.random() * (10, 1) + 1)
        ansRandomTwo = ans + Math.round(Math.random() * (10, 1) + 1)
        if (ansRandomOne == 0) {
            ansRandomOne++
        }
        if (ansRandomTwo == 0) {
            ansRandomTwo++
        }

        //Switch generation

        var randPosInt = Math.round(Math.random() * 2)

        switch (randPosInt) {
            case 0:
                targetOne.innerHTML = ans
                targetTwo.innerHTML = ansRandomOne
                targetThree.innerHTML = ansRandomTwo
                break
            case 1:
                targetOne.innerHTML = ansRandomOne
                targetTwo.innerHTML = ans
                targetThree.innerHTML = ansRandomTwo
                break
            case 2:
                targetOne.innerHTML = ansRandomOne
                targetTwo.innerHTML = ansRandomTwo
                targetThree.innerHTML = ans
                break



        }
        //Question generation
        const questionOne = document.getElementById('num1')
        const questionTwo = document.getElementById('num2')
        const operatorDis = document.getElementById('operator')

        questionOne.innerHTML = randIntOne
        operatorDis.innerHTML = currOperator
        questionTwo.innerHTML = randIntTwo

    } else {
        lifes--
        lifeDisplay.innerHTML = lifes
        if (lifes == 0) {
            alert('Game over')
            location.href = `gameOver.html?score=${Number(scoreDis.innerHTML)}&m=${mode}`
        }
    }
}
targetTwo.onclick = () => {
    if (Number(targetTwo.innerHTML) == ans) {
        console.log('in')
        scoreDis.innerHTML =
            Number(scoreDis.innerHTML) + 1
        timeUpdate.innerHTML = 10

        if (mode == 'easy') {
            currentDifficulty = currentDifficulty + 5
        } else if (mode == 'medium') {
            currentDifficulty = currentDifficulty + 25

        } else if (mode == 'hard') {
            currentDifficulty = currentDifficulty + 50

        }

        randIntOne = Math.round(Math.random() * currentDifficulty);
        randIntTwo = Math.round(Math.random() * currentDifficulty);

        operators = ['+', '-']

        currOperator = operators[Math.floor((Math.random() * operators.length))]

        ans = ''
        if (currOperator == '+') {
            ans = randIntOne + randIntTwo
        } else if (currOperator == '-') {
            ans = randIntOne - randIntTwo
        }

        ansRandomOne = ans - Math.round(Math.random() * (10, 1) + 1)
        ansRandomTwo = ans + Math.round(Math.random() * (10, 1) + 1)
        if (ansRandomOne == 0) {
            ansRandomOne++
        }
        if (ansRandomTwo == 0) {
            ansRandomTwo++
        }

        //Switch generation

        var randPosInt = Math.round(Math.random() * 2)

        switch (randPosInt) {
            case 0:
                targetOne.innerHTML = ans
                targetTwo.innerHTML = ansRandomOne
                targetThree.innerHTML = ansRandomTwo
                break
            case 1:
                targetOne.innerHTML = ansRandomOne
                targetTwo.innerHTML = ans
                targetThree.innerHTML = ansRandomTwo
                break
            case 2:
                targetOne.innerHTML = ansRandomOne
                targetTwo.innerHTML = ansRandomTwo
                targetThree.innerHTML = ans
                break



        }

        questionOne.innerHTML = randIntOne
        operatorDis.innerHTML = currOperator
        questionTwo.innerHTML = randIntTwo

    } else {
        lifes--
        lifeDisplay.innerHTML = lifes
        if (lifes == 0) {
            alert('Game over')
            location.href = `gameOver.html?score=${Number(scoreDis.innerHTML)}&m=${mode}`
        }
    }
}