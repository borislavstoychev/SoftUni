function validate() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password')
    let company = document.getElementById('company');
    let valid = document.getElementById('valid');
    let submitButton = document.getElementById('submit');

    company.addEventListener('change', showCompanyInfo);
    submitButton.addEventListener('click', validateData);

    function showCompanyInfo(){
        let companyInfo = document.getElementById('companyInfo');

        if (company.checked){
            companyInfo.style.display = "block";
        }else{
            companyInfo.style.display = 'none';
        };
    };
    function validateData(e){
        e.preventDefault();
        let userCheck = /^[a-zA-Z0-9]{3,20}$/.test(username.value);
        style(userCheck, username);
        let emailCheck = /^.*@.*\..*$/.test(email.value);
        style(emailCheck, email);
        let passwordCheck = /^\w{5,15}$/.test(password.value);
        style(passwordCheck, password);
        let confirmPasswordCheck = /^\w{5,15}$/.test(confirmPassword.value);
        style(confirmPasswordCheck, confirmPassword)
        let matchPass = password.value === confirmPassword.value && 
        confirmPasswordCheck && 
        passwordCheck 
        ? true 
        : false;
        style(matchPass, password);
        style(matchPass, confirmPassword);
        const result = [
            userCheck, 
            emailCheck, 
            passwordCheck, 
            confirmPasswordCheck, 
            matchPass
        ];

        if (company.checked){
            let companyInput = document.getElementById('companyNumber');
            let isCompanyIdValid = Number(companyInput.value) >= 1000 && Number(companyInput.value) <= 9999;
            style(isCompanyIdValid, companyInput);
            result.push(isCompanyIdValid);
        };

        result.includes(false) ? valid.style.display = 'none' : valid.style.display = 'block';
    };

    function style(value, el) {
        if (value) el.style.border = 'none';
         else {
          el.style.border = '';
          el.style.borderColor = 'red';
        }
      }

}
