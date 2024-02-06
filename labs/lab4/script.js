const form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const input = document.getElementById('inputNum');
    const number = Number(input.value);
    const result = checkNum(number);

    const rsSentence = document.getElementById('result');
    rsSentence.textContent = result;
});

function backgroundColor(){
    const day = document.getElementById('selectDay').value;
    const days = document.getElementById('days');
    switch(day){
        case 'Monday':
            days.style.backgroundColor = '#87CEFA'; 
            break;
        case 'Tuesday':
            days.style.backgroundColor = '#00FF00'; 
            break;
        case 'Wednesday':
            days.style.backgroundColor = '#FFD700'; 
            break;
        case 'Thursday':
            days.style.backgroundColor = '#FF1493'; 
            break;
        case 'Friday':
            days.style.backgroundColor = '#00FFFF'; 
            break;
        case 'Saturday':
            days.style.backgroundColor = '#FFFF00'; 
            break;
        case 'Sunday':
            days.style.backgroundColor = '#F08080'; 
            break;  
        default:
            days.style.backgroundColor = 'transparent';
    }
}



function checkNum(number){
    const isEven = number % 2 === 0;
    const isPrime = checkPrime(number);
    let rangePrint = 'greater than 100';

    if(number <= 50){
        rangePrint = 'less than or equal to 50';
    }else if(number <= 75){
        rangePrint = 'greater than 50 and less than or equal to 75';
    }else if(number <= 100){
        rangePrint = 'greater than 75 and less than or equal to 100';
    }

    return `The number entered is an ${isEven ? 'even' : 'odd' } ${isPrime ? 'prime' : 'not prime'} number and is ${rangePrint}.`;
}


function checkPrime(number){
    if(number <= 1)
    {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }

    return true;
}