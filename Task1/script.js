// let name = prompt("Write your name:", "name");
// alert(`Hi, ${name} !`);

// function ShowMessage(params) {
//     let userName = "Moscow";
//     let message = 'Hi, ' + userName;
//     alert(message);
// };
// ShowMessage();

// function HelloName(name)
// {
//     alert(`Hi! ${name} !`);
// }
// let a = prompt("How are your name?", "name");
// HelloName(a);

// let question = confirm('Are you shure?');
// if (question)
// {
//     alert('Thats great that you are shure!')
// }
// else {
//     alert('Not good, that you are not shure')
// }

let age = + prompt("How old are you?");
switch (age) {
    case 18: {
            alert(`You are adult. Go on!`);
        }
        break;
    case 10: {
            alert(`You so young, go study!`);
        }
        break;
    case 30: {
            alert(`it's time to bed! Job will wait you tomorrow!`);
        }
        break;
    default:
        alert(`We don't know how to help you :(`);
        break;
}