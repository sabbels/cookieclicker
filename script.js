
/*let numberofcookies = 0;
document.getElementById("cookie").addEventListener("click", () => {
    numberofcookies++ ;
});

console.log(numberofcookies);
*/

document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;
    const counterDisplay = document.getElementById('counter');
    const incrementButton = document.getElementById('cookie');

    incrementButton.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
        console.log(counter);
    });


    
});

