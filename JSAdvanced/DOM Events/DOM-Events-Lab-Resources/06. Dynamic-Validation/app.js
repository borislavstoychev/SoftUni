function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange({target}){
        const pattern = /^\S+@\S+\.\S+$/;

        if (pattern.test(target.value)){
            target.classList.remove('error');
        }else {
            target.classList.add('error');
        }
    }
}