// selecting input fields
const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const confirmPasswordInput = document.getElementById("confirm-password-input");

// selecting warnings
const usernameWarning = document.getElementById("username-warning");
const emailWarning = document.getElementById("email-warning");
const passwordWarning = document.getElementById("password-warning");
const confirmPasswordWarning = document.getElementById("confirm-password-warning");

// eyes
const flashEye1 = document.getElementById("flash-eye1");
const flashEye2 = document.getElementById("flash-eye2");

const submit = document.getElementById("signin-btn");
const eyeButton1 = document.getElementById('eye-btn1');
const eyeButton2 = document.getElementById('eye-btn2');



// functions
const checkSpecialCharacter = (password)=>{
    if(password.indexOf('!') ==-1 && 
            password.indexOf('@') ==-1 && 
            password.indexOf('#') ==-1 && 
            password.indexOf('$') ==-1 && 
            password.indexOf('%') ==-1 && 
            password.indexOf('^') ==-1 && 
            password.indexOf('&') ==-1
    ){
        return false;
    }
    return true;
}

const checkNumber = ()=>{
    if(password[i]>= '0' && password[i]<='9'){
        return true;
    }
    return false;
}

eyeButton1.addEventListener('click', (e)=>{
    e.preventDefault();
    const classOne = flashEye1.classList;
    if(classOne.contains("fa-eye-slash")){
        passwordInput.type = "text";
        classOne.remove('fa-eye-slash');
        classOne.add('fa-eye');
    }
    else if(classOne.contains("fa-eye")){
        passwordInput.type = "password";
        classOne.remove('fa-eye');
        classOne.add('fa-eye-slash');
    }
})
eyeButton2.addEventListener('click', (e)=>{
    e.preventDefault();
    const classOne = flashEye2.classList;
    if(classOne.contains("fa-eye-slash")){
        confirmPasswordInput.type = "text";
        classOne.remove('fa-eye-slash');
        classOne.add('fa-eye');
    }
    else if(classOne.contains("fa-eye")){
        confirmPasswordInput.type = "password";
        classOne.remove('fa-eye');
        classOne.add('fa-eye-slash');
    }
})

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    let usernameFlag = true;
    let lcucFlag = true;
    let emailFlag = true;
    let passwordFlag = true;
    let confirmPasswordFlag = true;


    let lc = false;
    let uc = false;
    for(let i = 0; i<password.length; i++){
        if(password[i].toUpperCase() === password[i] && !uc && !checkSpecialCharacter(password[i])){
            uc = true;
        }
        if(password[i].toLowerCase() === password[i] && !lc && !checkSpecialCharacter(password[i])){
            lc = true;
        }
    }

    // validating lowercase uppercase
    if(!uc || !lc){
        lcucFlag = false;
        console.log('lc uc issue');
        passwordWarning.classList.add('show-warning');
        console.log(uc, lc);
    }
    else{
        lcucFlag = true;
        passwordWarning.classList.remove('show-warning');
    }

    // validating username
    if(username.length < 3 || username.length>25){
        usernameFlag = false;
        console.log('username length issue');
        usernameWarning.classList.add('show-warning');
    }
    else{
        usernameFlag = true;
        usernameWarning.classList.remove('show-warning');
    }

    // validating email
    if(email.indexOf('@') == -1){
        emailFlag = false;
        console.log('email issue');
        emailWarning.classList.add('show-warning');
    }
    else{
        emailFlag = true;
        emailWarning.classList.remove('show-warning');
    }
    
    // validating password
    if(password.length < 8){
        passwordFlag = false;
        console.log('password length issue');
        passwordWarning.classList.add('show-warning');
    }
    if(!checkSpecialCharacter(password)){
        passwordFlag = false;
        console.log('special issue');
        passwordWarning.classList.add('show-warning');
    }
    else{
        passwordFlag = true;
        passwordWarning.classList.remove('show-warning');
    }

    // validating confirmPassword
    if(confirmPassword!==password){
        confirmPasswordFlag = false;
        confirmPasswordWarning.classList.add('show-warning');
    }
    else{
        confirmPasswordFlag = true;
        confirmPasswordWarning.classList.remove('show-warning');
    }

    if(lcucFlag && usernameFlag && emailFlag && passwordFlag && confirmPasswordFlag){
        const heading = document.getElementById('heading');
        const subHeading = document.getElementById('sub-heading')
        const mainContent = document.getElementById('form-content')
        heading.innerHTML = "Congratulations!"
        subHeading.innerHTML = "You have succsesfully logged in!"
        heading.classList.add('green-tag')
        subHeading.classList.add('green-tag')
        
        mainContent.classList.add('hide-lower-block')
        console.log(mainContent);
    }
})