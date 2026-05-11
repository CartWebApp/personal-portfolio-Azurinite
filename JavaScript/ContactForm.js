const form = document.querySelector('#contactForm');
const button = document.querySelector('#submitBtn');


/* Contact Form */
form.addEventListener('submit', e => {
    e.preventDefault();
    button.disabled = true;
    button.textContent = 'Sending...';

    const data = new FormData(form);

    const url = 'https://script.google.com/macros/s/AKfycbxkeye8YyoeAHFhe7FykZib_IhAN5uDoyATlW56pykBP1WB53rUk2OfvHe7Eh3x52cJ0Q/exec'
    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(res => res.text()).then(response => {
            button.textContent = 'Sent';
            button.classList.add('sent');
            form.reset();
        })
        .catch(error => {
            alert('Error: ' + error.message);
            button.disabled = false;
            button.textContent = 'Send';
        });
});