
let choices = ['Rock', 'Paper', 'Scissors']

//function draw() {
//    let choice = ''
//     choices.forEach(choice); {
//         document.getElementById('btns').innerHTML =
//             choice += `<button type="button" class="btn btn-secondary" onclick="play(${choice})"></button>`
//     }
//     document.getElementById('btns').innerHTML = choice
// }

//draw()


function play(userChoice) {
    let choices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log(computerChoice)
    let choice1 = userChoice
    let choice2 = computerChoice
    let message = 'message'

    console.log(choice2)
    if (choice1 === choice2) {
        document.getElementById('message').innerHTML = `Computer chose ${choice2}`
        alert(`You tie!`)
    } else {
        if (choice1 === 'Rock' && choice2 === 'Scissors') {
            document.getElementById('message').innerHTML = `Computer chose ${choice2}`
            alert(`You Win!!`)
        } else if (choice1 === 'Paper') {
            if (choice2 === 'Rock') {
                document.getElementById('message').innerHTML = `Computer chose ${choice2}`
                alert(`You Win!!`)
            } else if (choice2 === 'Scissors') {
                document.getElementById('message').innerHTML = `Computer chose ${choice2}`
                alert(`You Lose!`)
            }
        } else if (choice1 === 'Scissors') {
            if (choice2 === 'Paper') {
                document.getElementById(message).innerHTML = `Computer chose ${choice2}`
                alert('You Win!')
            } else if (choice1 === 'Rock') {
                if (choice2 === 'Paper') {
                    document.getElementById(message).innerHTML = `Computer chose ${choice2}`
                    alert(`You Lose!!`)
                }
            } else {
                document.getElementById('message').innerHTML = `Computer chose ${choice2}`
                alert(`You Lose`)
            }
        }
    }
}