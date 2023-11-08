function toggleForm(formName) {
    var signUpForm = document.getElementById('signUpForm');
    var signInForm = document.getElementById('signInForm');

    if (formName === 'signInForm') {
        signUpForm.style.transform = 'rotateY(-180deg)';
        signInForm.style.transform = 'rotateY(0)';
    } else {
        signUpForm.style.transform = 'rotateY(0)';
        signInForm.style.transform = 'rotateY(180deg)';
    }
}

function closeForm() {
    var signUpForm = document.getElementById('signUpForm');
    var signInForm = document.getElementById('signInForm');
    signUpForm.style.display = 'none';
    signInForm.style.display = 'none';
    
    setTimeout(function() {
        signUpForm.style.display = 'block';
        signInForm.style.display = 'block';
    }, 3500);
}


function submitForm(formType) {
    // You can add your form submission handling logic here
    if (formType === 'signUp') {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var password = document.getElementById('password').value;

        if (name !== '' && email !== '' && phone !== '' && password !== '') {
            // Perform sign-up action
            alert('Sign Up Successful');
        } else {
            alert('Please fill in all details');
        }
    } else if (formType === 'signIn') {
        var signInEmail = document.getElementById('signInEmail').value;
        var signInPassword = document.getElementById('signInPassword').value;

        if (signInEmail !== '' && signInPassword !== '') {
            // Perform sign-in action
            alert('Sign In Successful');
        } else {
            alert('Please fill in all details');
        }
    }
}


