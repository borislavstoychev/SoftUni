function deleteByEmail() {
    let email = document.querySelector('input')
    let elements = document.querySelectorAll("tbody tr")
    let result = document.getElementById('result')

    const match = Array.from(elements)
    .filter((e) => e.children[1].textContent == email.value)
    match.forEach(e => e.remove())
    match.length ? result.textContent = 'Deleted.': result.textContent = 'Not found.';
    email.value = "";
    
}