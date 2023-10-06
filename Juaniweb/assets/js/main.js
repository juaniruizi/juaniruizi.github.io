/*=============== Active Link =============== */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a)=> a.classList.remove('active-work'));
    this.classList.add('active-work');
}
linkWork.forEach((a) => a.addEventListener('click', activeWork));
/*=============== Mixitup Filter =============== */
let mixerProyects = mixitup('.proyects__container', {
    selectors: {
        target: '.proyect item'
    },
    animation: {
        duration: 300
    }
});

/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact__form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || Message.value === '') {
        // add and remove color 
        contactMessage.classList.remove('color-light');
        contactMessage.classLis.add('color-dark');

        //show message
        contactMessage.textContent = 'Write all the input fields';
    } else {
        //service ID - templateID - #form - publickey
        emailjs.sendForm('service_pkhm5hd','template_lgtjb7h','#contact-form','n70hrLqgQWDoP-bJW')
        .then(() => {
            //Show message and color, window + dot to open emoji
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent :D';

            //remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        });
    }
}

contactForm.addEventListener('submit', sendEmail);

