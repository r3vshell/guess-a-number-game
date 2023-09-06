//install 'prompt-sync' with 'npm install prompt-sync' before import
const prompt = require('prompt-sync')()

 let attempts = 3

function getRand(min,max){
    num = Math.floor(Math.random()*((max+1)-min)+min)
    return num
}

function game(){
    const guess = prompt('Guess a number from 1-5: ')

    const rand = getRand(1,5)

    if(guess==rand){
        console.log('You guessed right!!\n')
        return
    }else{
        console.log('Try Again: ')
        attempts--

        console.log('%d Attempts left',attempts)
        if(attempts){
            game()
        }else{
            console.log('Game Over!!!\n')
            let replay = prompt('\nDo you want to play another game?(y/n) ')
            attempts = 3
            if(replay === 'y'){
                game()
            }else if(replay === 'n'){
                console.log("\nHope you enjoyed the game, thanks for playing!!!\n")
            }else{
                console.log('\nWrong input, Goodbye!!!\n')
            }
        }
        
    }
}

game()
    

