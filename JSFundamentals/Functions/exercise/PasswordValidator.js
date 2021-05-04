function passValidator(pass) {
    let errors = []

    function len(pass) {
        if (!(pass.length >= 6 && pass.length <= 10)) 
            errors.push("Password must be between 6 and 10 characters")
        return pass
    }
    function checkConsists(pass) {
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if (code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57) {
                    continue;
                } else {
                    errors.push("Password must consist only of letters and digits")
                    break
                }
        }
        return pass
    }
    function checkDigits(pass) {
        let digits = 0
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if (code >= 48 && code <= 57){
                digits++
                if (digits >= 2) {
                    break;
                }
            }
        }
        if (digits < 2) {
            errors.push("Password must have at least 2 digits")
        }
        return pass
    }
    checkDigits(checkConsists(len(pass)))
    errors.length > 0 ? console.log(errors.join("\n")) : console.log("Password is valid")
}
passValidator("logIn")
passValidator("MyPass123")
passValidator('Pa$s$s')



