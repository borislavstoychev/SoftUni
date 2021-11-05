function toggle() {
    let text = document.getElementById('extra');
    text.style.display == 'block' ? text.style.display = 'none': text.style.display = 'block'

    const btn = document.querySelector('.button')
    btn.textContent == 'Less' ? btn.textContent = 'More': btn.textContent = 'Less'
}