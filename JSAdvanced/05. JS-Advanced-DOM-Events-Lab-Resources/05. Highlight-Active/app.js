function focused() {
    Array
    .from(document.getElementsByTagName('input'))
    .forEach(el =>{
        el.addEventListener('focus', e => e.target.parentNode.classList.add('focused'));
        el.addEventListener('blur', e => e.target.parentNode.classList.remove('focused'));
    })
}