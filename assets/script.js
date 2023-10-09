var startBtn = document.createElement('button')
// var startBtn = document.querySelector('#startBtn')
var time = document.querySelector('#timerContainer')
var scoreKeeper = document.querySelector('#scoreContainer')
var score = 0
var questionsContainer = document.querySelector('#questionsContainer')
var timer = 60
var timerInterval
var body = document.body
var h1El = document.createElement('h1')
var label = document.createElement('label')
var input = document.createElement('input')
var div = document.createElement('div')
var form = document.createElement('form')
var submitBtn = document.createElement('button')
var tester = document.getElementById('nameInput')


// I know this is a hot mess that needs to be fixed, i just couldnt figure out how to auto generate new buttons with fresh tags
var qOneBtnOne = document.createElement('button')
var qOneBtnTwo = document.createElement('button')
var qOneBtnThree = document.createElement('button')
var qOneBtnFour = document.createElement('button')

var qTwoBtnOne = document.createElement('button')
var qTwoBtnTwo = document.createElement('button')
var qTwoBtnThree = document.createElement('button')
var qTwoBtnFour = document.createElement('button')

var qThreeBtnOne = document.createElement('button')
var qThreeBtnTwo = document.createElement('button')
var qThreeBtnThree = document.createElement('button')
var qThreeBtnFour = document.createElement('button')

var qFourBtnOne = document.createElement('button')
var qFourBtnTwo = document.createElement('button')
var qFourBtnThree = document.createElement('button')
var qFourBtnFour = document.createElement('button')

var qFiveBtnOne = document.createElement('button')
var qFiveBtnTwo = document.createElement('button')
var qFiveBtnThree = document.createElement('button')
var qFiveBtnFour = document.createElement('button')


function finalScore() {
    
    submitBtn.addEventListener('click', function(e){
        e.preventDefault()
        saveLastScore()
    })

    function saveLastScore() {
    var testScores = {
        name: nameInput.value,
        score: score,
    }
    localStorage.setItem(tester, JSON.stringify(testScores))
}
      
    h1El.textContent = ("Congrats! Your final score was " + score + " out of 50!")
    label.textContent = "Type your name in the box!"
    input.setAttribute('id','nameInput')
    input.textContent = "Your name here"
    submitBtn.textContent = "Submit"
    body.appendChild(h1El)
    h1El.appendChild(form)
    form.appendChild(div)
    div.appendChild(label)
    div.appendChild(input)
    div.appendChild(submitBtn)
    timer = 0
}

function qFive() {
    h1El.textContent = "Boolean statements return what data?"
        qFiveBtnOne.textContent = "True or False"
        qFiveBtnTwo.textContent = "Strings"
        qFiveBtnThree.textContent = "Arrays"
        qFiveBtnFour.textContent = "Yes or No"
            body.appendChild(h1El)
            h1El.appendChild(qFiveBtnOne)
            h1El.appendChild(qFiveBtnTwo)
            h1El.appendChild(qFiveBtnThree)
            h1El.appendChild(qFiveBtnFour)
    
        qFiveBtnOne.addEventListener('click', function() {
            console.log(true)
            scoreFun()
            finalScore()
            })
        qFiveBtnTwo.addEventListener('click', function() {
            console.log(false)
            timerPenalty()
            finalScore()
            })
        qFiveBtnThree.addEventListener('click', function() {
            console.log(false)
            timerPenalty()
            finalScore()
            })
        qFiveBtnFour.addEventListener('click', function() {
            console.log(false)
            timerPenalty()
            finalScore()
            })
        }

function qFour() {
    h1El.textContent = "What does .appendChild do?"
        qFourBtnOne.textContent = "It adds to your family tree"
        qFourBtnTwo.textContent = "It adds new elements to the designated HTML file"
        qFourBtnThree.textContent = "It removes elements from the HTML file"
        qFourBtnFour.textContent = "It takes userInput and logs it"
            body.appendChild(h1El)
            h1El.appendChild(qFourBtnOne)
            h1El.appendChild(qFourBtnTwo)
            h1El.appendChild(qFourBtnThree)
            h1El.appendChild(qFourBtnFour)
    
        qFourBtnOne.addEventListener('click', function() {
            console.log(false)
            timerPenalty()
            qFive()
            })
        qFourBtnTwo.addEventListener('click', function() {
            console.log(true)
            scoreFun()
            qFive()
            })
        qFourBtnThree.addEventListener('click', function() {
            console.log(false)
            timerPenalty()
            qFive()
            })
        qFourBtnFour.addEventListener('click', function() {
            console.log(false)
            timerPenalty()
            qFive()
            })
        }

function qThree() {
    h1El.textContent = "which command in bash will create a new folder?"
        qThreeBtnOne.textContent = "mkdir"
        qThreeBtnTwo.textContent = "touch dir"
        qThreeBtnThree.textContent = "touch folder"
        qThreeBtnFour.textContent = "mkfldr"
            body.appendChild(h1El)
            h1El.appendChild(qThreeBtnOne)
            h1El.appendChild(qThreeBtnTwo)
            h1El.appendChild(qThreeBtnThree)
            h1El.appendChild(qThreeBtnFour)
    
        qThreeBtnOne.addEventListener('click', function() {
            console.log(true)
            scoreFun()
            qFour()
            })
        qThreeBtnTwo.addEventListener('click', function() {
            console.log(false)
            timerPenalty()
            qFour()
            })
        qThreeBtnThree.addEventListener('click', function() {
            console.log(false)
            timerPenalty()
            qFour()
            })
        qThreeBtnFour.addEventListener('click', function() {
            console.log(false)
            timerPenalty()
            qFour()
            })
        }

function qTwo() {
    h1El.textContent = "What is the correct name for a HTML document?"
        qTwoBtnOne.textContent = "index.js"
        qTwoBtnTwo.textContent = "html.ccs"
        qTwoBtnThree.textContent = "script.html"
        qTwoBtnFour.textContent = "index.html"
            body.appendChild(h1El)
            h1El.appendChild(qTwoBtnTwo)
            h1El.appendChild(qTwoBtnThree)
            h1El.appendChild(qTwoBtnFour)
            h1El.appendChild(qTwoBtnOne)
            
    qTwoBtnOne.addEventListener('click', function() {
        console.log(false)
        timerPenalty()
        qThree()
    })
    qTwoBtnTwo.addEventListener('click', function() {
        console.log(false)
        timerPenalty()
        qThree()
    })
    qTwoBtnThree.addEventListener('click', function() {
        console.log(false)
        timerPenalty()
        qThree()
    })
    qTwoBtnFour.addEventListener('click', function() {
        console.log(true)
        scoreFun()
        qThree()
    })
}     
        
function qOne() {
        h1El.textContent = "What is the correct name for a stylesheet document?"
        qOneBtnOne.textContent = "style.js"
        qOneBtnTwo.textContent = "style.ccs"
        qOneBtnThree.textContent = "style.css"
        qOneBtnFour.textContent = "styles.html"
            body.appendChild(h1El)
            h1El.appendChild(qOneBtnOne)
            h1El.appendChild(qOneBtnTwo)
            h1El.appendChild(qOneBtnThree)
            h1El.appendChild(qOneBtnFour)
            
    qOneBtnOne.addEventListener('click', function() {
        console.log(false)
        timerPenalty()
        qTwo()
    })
    qOneBtnTwo.addEventListener('click', function() {
        console.log(false)
        timerPenalty()
        qTwo()
    })
    qOneBtnThree.addEventListener('click', function() {
        console.log(true)
        scoreFun()
        qTwo()
    })
    qOneBtnFour.addEventListener('click', function() {
        console.log(false)
        timerPenalty()
        qTwo()
    })
}

function timerHandler() {
    timer = 60
    var timerInterval = setInterval(function(){
        timer--
        timerContainer.textContent = timer
        if (timer <= 0) {
            clearInterval(timerInterval)
            finalScore()
        }
    }, 1000)
}
function timerPenalty(){
    timer = timer - 5
}

function scoreFun() {
    score = (score + 10)
    // scoreKeeper.innerText = score 
}
function starter() {
    startBtn.textContent = "Start Game!"
    body.appendChild(startBtn)
        


    startBtn.addEventListener('click', function() {
        timerHandler()
        qOne()
        score = 0
    } )
}
starter()
