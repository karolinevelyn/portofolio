let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

const form = document.querySelector('form')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const telp = document.getElementById('phone')
const subject = document.getElementById('subject')
const mess = document.getElementById('pesan')


function sendEmail(){

    if(fullName.value.trim() === "" || email.value.trim() === "" ||  telp.value.trim() === "" || subject.value.trim() === "" || mess.value.trim() === "") {
        Swal.fire({
            title: 'Error',
            text: 'Please fill in all required fields before sending.',
            icon: 'error'
        });

        return;
    }
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>
                    Phone Number: ${telp.value}<br> Message: ${mess.value}`
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "karolinevelynn@gmail.com",
        Password : "F5C88ADD6B6B8C887AB3BB9EF4082C408DED",
        To : "karolinevelynn@gmail.com",
        From : "karolinevelynn@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message =>{
            if(message == 'OK'){
                Swal.fire({
                    title: 'Success',
                    text: 'Message sent successfully!',
                    icon: 'success'
                })
            }else{
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to send message.',
                    icon: 'error'
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    sendEmail()
});