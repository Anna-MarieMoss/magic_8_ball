let questButton = document.querySelector('button');
let input = document.querySelector('h2');
let reset = document.querySelector('.reset');
let eightBall = document.querySelector('.answer');

function handleClick() {
  let question = prompt('Speak now or forever hold your peace!  Ask away...');
  input.innerText = question;
  console.log(question);
  let randomNumber = Math.floor(Math.random() * 7);
  console.log(randomNumber);

  switch (randomNumber) {
    case 0:
      eightBall.innerText = 'It is certain';
      break;
    case 1:
      eightBall.innerText = 'Yes!  For sure!';
      break;
    case 2:
      eightBall.innerText = 'Reply hazy try again';
      break;
    case 3:
      eightBall.innerText = 'Cannot predict now';
      break;
    case 4:
      eightBall.innerText = 'Do not count on it';
      break;
    case 5:
      eightBall.innerText = 'No way, hosea!';
      break;
    case 6:
      eightBall.innerText = 'Not sure, you need to think about this some more';
      break;
    case 7:
      eightBall.innerText = 'Signs point to yes';
      break;
    default:
      console.log('something went wrong');
  }
  console.log(eightBall.innerText);
}

questButton.addEventListener('click', handleClick);

function clear() {
  input.innerText = '';
  eightBall.innerText = '';
}

reset.addEventListener('click', clear);

// let userName = 'Anna';

// userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// let userQuestion = 'will daddy always have grey hair?';

// console.log(userQuestion);

// let randomNumber = Math.floor(Math.random() * 7);
// // console.log(randomNumber);

// let eightBall = '';

// switch (randomNumber) {
//   case 0:
//     eigthBall = console.log('It is certain');
//     break;
//   case 1:
//     eigthBall = console.log('It is decidedly so');
//     break;
//   case 2:
//     eigthBall = console.log('Reply hazy try again');
//     break;
//   case 3:
//     eigthBall = console.log('Cannot predict now');
//     break;
//   case 4:
//     eigthBall = console.log('Do not count on it');
//     break;
//   case 5:
//     eigthBall = console.log('My sources say no');
//     break;
//   case 6:
//     eigthBall = console.log('Outlook not so good');
//     break;
//   case 7:
//     eigthBall = console.log('Signs point to yes');
//     break;
//   default:
//     console.log('something went wrong');
// }

// if (randomNumber === 0) {
//   eigthBall = console.log('It is certain');
// } else if (randomNumber === 1) {
//   eigthBall = console.log('It is decidedly so');
// } else if (randomNumber === 2) {
//   eigthBall = console.log('Reply hazy try again');
// } else {
//   console.log('cant be bothered to type anymore!');
// }
