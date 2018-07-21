document.getElementById('myForm').addEventListener('submit', validate);

function validate(e){
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const age = document.querySelector('#age');
    const password = document.querySelector('#password');
    const passwordRetype = document.querySelector('#password-retype');
    const myForm = document.querySelector('#myForm');
    const main = document.getElementById('main');
    let re;

    e.preventDefault();

    if(name.value == ""){
        document.querySelector('#name-error').innerHTML = "Please give your name";
        name.focus();
        //myForm.reset();
        return false;
    }

    //Finish this bit
    
    if(age.value == "" || isNaN(age.value)){
        document.querySelector('#age-error').innerHTML = "Please give a valid age";
        age.focus();
        //myForm.reset();
        return false;
    }

    
    if(age.value < 18){
        document.querySelector('#underage-error').innerHTML = "Sorry, you're too young to sign up!";
        age.focus();
        //myForm.reset();
        return false;
    }
    

    if(email.value == ""){
        document.querySelector('#email-error').innerHTML = "Please give a valid email address";
        email.focus();
        //myForm.reset();
        return false;
    }

    if(password.value == ""){
        document.querySelector('#password-error').innerHTML = "Please choose a password";
        password.focus();
        //myForm.reset();
        return false;
    }

    if(password.value.length < 6){
        document.querySelector('#password-error').innerHTML = "Your password must contain at least six characters";
        password.focus();
        return false;
    }

    
    re = /[0-9]/;

    if(!re.test(password.value)){
        document.querySelector('#password-error').innerHTML = "Your password must contain at least one number";
        password.focus();
        return false;
    }

    re = /[A-Z]/;

    if(!re.test(password.value)){
        document.querySelector('#password-error').innerHTML = "Your password must contain at least one uppercase character and one number";
        password.focus();
        return false;
    }

    if(passwordRetype.value !== password.value){
        document.querySelector('#password-retype-error').innerHTML = "Oops, this doesn't match your password";
        passwordRetype.focus();
        //myForm.reset();
        return false;
    }

    else {
        /*
        
        document.querySelector('#form-success-message').innerHTML = "Registration successful! Thanks!";

        setTimeout(function(){
            document.querySelector('#form-success-message').remove();
        }, 2000);
        return false;
        */
       myForm.style.display = 'none';

       const div = document.createElement('div');
            
       div.className = 'd-flex justify-content-between p-2 my-2 bg-success text-white rounded mx-auto';
       const fontSize = document.createElement('h3');
       const check = document.createElement('i');
       check.className = 'far fa-check-circle';
       div.appendChild(fontSize);

       fontSize.appendChild(document.createTextNode('Registration successful! Thanks a bunch!'));
        fontSize.appendChild(check);
       main.appendChild(div);

       setTimeout(function(){
        div.remove();
        myForm.style.display = 'block';
        myForm.reset();
       }, 3000);

    }    
}