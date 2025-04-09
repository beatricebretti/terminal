(function() {
    emailjs.init("SI6VCGsf8kC4I4oO9"); 
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send('service_1e0umop', 'template_uza45u5', templateParams)
        .then(function(response) {
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.remove('d-none');
            document.getElementById('contactForm').reset();
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 5000);
        }, function(error) {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again later.');
        });
});