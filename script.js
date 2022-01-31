

// ! Seleting elements from DOM

const clipbrdImg = document.querySelector('.clipImg');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const genPassBtn = document.getElementById('genPass');
let generetedPassTextEl = document.querySelector('.generatedPass');

console.log(lenEl,upperEl,lowerEl,numberEl,symbolEl,genPassBtn,generetedPassTextEl)


// ! creating variables 
const number = '1234567890';
const upperLetters = 'ABCDEFGHIJKLMNIOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmniopqrstuvwxyz';
const symbols = '!@#$%^&*()_+=';

// ! functions for : getting random char from variables
function getLower(){

    // Math.random() * lowerLetters.length => (lowerLetter) ki length jitni range mese random number ko select karo
    // Math.floor(...) => number ko floor me convert karo.
    // lowerLetters[...] => select item from lowerLetter at [?] position.
    // console.log(lowerLetters[Math.floor(Math.random() * lowerLetters.length)]);
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpper(){

    // Math.random() * upperLetters.length => (upperLetter) ki length jitni range mese random number ko select karo
    // Math.floor(...) => number ko floor me convert karo.
    // upperLetters[...] => select item from upperLetter at [?] position.
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber(){

    // Math.random() * number.length => (number) ki length jitni range mese random number ko select karo
    // Math.floor(...) => number ko floor me convert karo.
    // number[...] => select item from number at [?] position.
    return number[Math.floor(Math.random() * number.length)];
}

function getSymbol(){

    // Math.random() * symbol.length => (symbol) ki length jitni range mese random number ko select karo
    // Math.floor(...) => number ko floor me convert karo.
    // symbol[...] => select item from symbol at [?] position.
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// ! function for : getting random char from list
function generateRandom(){

    // ? list - jisme char store honge according to condition
    const randomS =[];
    if(upperEl.checked){
        randomS.push(getUpper())
    }
    if(lowerEl.checked){
        randomS.push(getLower())
    }
    if(symbolEl.checked){
        randomS.push(getSymbol())
    }
    if(numberEl.checked){
        randomS.push(getNumber())
    }

    if(!upperEl.checked && !lowerEl.checked && !numberEl.checked && !symbolEl.checked){
        return ''
    }

    // console.log(randomS);

    // Math.random() * randomS.length => (randomS) ki length jitni range mese random number ko select karo
    // Math.floor(...) => number ko floor me convert karo.
    // randomS[...] => select item from randomS at [?] position.
    // console.log(randomS[Math.floor(Math.random() * randomS.length)])
    return randomS[Math.floor(Math.random() * randomS.length)];  // ? return random char from list
}


// ! function : generating password
function generatePassword(){

    clipbrdImg.setAttribute('src','./img-etc/content_paste_black_24dp.svg');
    let password = '';
    for(let i=0;i<lenEl.value;i++){
        
        let random = generateRandom();
        password += random;
    }
    // console.log(password);
    generetedPassTextEl.innerText = password;
}

genPassBtn.addEventListener('click',generatePassword);

clipbrdImg.addEventListener('click',(e)=>{
    clipbrdImg.setAttribute('src','./img-etc/copied.svg');

    // copy to clipboard functionality
    const textArea = document.createElement('textarea');
    const password = generetedPassTextEl.innerText;

    if(!password){
        return;
    }
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert('Password copied to clipboard');
})