let znak='^'; // '-'; '*'; '/'; '%'; 'a*b'; a^b; 
let a=5;
let b=3;
switch (znak){
    case '+':
        console.log ('Zbir je '+(a+b));
        break;
    case '-':
        console.log('Razlika je '+(a-b));
        break;
    case '*':
        console.log('Proizvod je '+(a*b));
        break;
    case '/':
        console.log('Kolicnik je '+(a/b));
        break;
    case '%':
        console.log('Ostatk pri deljenju je '+(a%b)); 
        break; 
    case '^':
        console.log('Stepen je '+(a**b));     
        break; 
}