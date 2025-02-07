<<<<<<< HEAD
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )
=======
// const buttons = document.querySelectorAll('button');

// buttons.forEach( button =>{
//     button.addEventListener('click',()=>{
//         const faq = button.nextElementSibling;
//         const icon = button.children[1];

//         faq.classList.toggle('show');
//         icon.classList.toggle('rotate');
//     })
// } )


const buttons = document.querySelectorAll('.question button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Закрываем все открытые блоки перед тем, как открыть новый
        buttons.forEach(otherButton => {
            if (otherButton !== button) {
                const otherFaq = otherButton.parentElement.querySelector('p');
                const otherIcon = otherButton.querySelector('.d-arrow');

                otherFaq.classList.remove('show');
                otherIcon.classList.remove('rotate');
            }
        });

        // Открываем/закрываем текущий блок
        const faq = button.parentElement.querySelector('p');
        const icon = button.querySelector('.d-arrow');

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    });
});
>>>>>>> 5dc9ad6 (second way)
