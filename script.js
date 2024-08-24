let passwordEle = document.querySelector('.password')
let characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$`

function generate(){
    let str = ''
    for(let i=0; i<8; i++){
        let j = Math.floor(Math.random()*characters.length)
        str += characters[j]
    }
    passwordEle.innerText = str
}

