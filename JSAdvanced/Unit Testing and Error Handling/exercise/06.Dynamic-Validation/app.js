function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', validate);

    function validate(){
        input.className = /^[a-z0-9]+@[a-z-o9]+\.[a-z]+$/
        .test(input.value)
        ? 'valid' 
        : 'error'
    }

};