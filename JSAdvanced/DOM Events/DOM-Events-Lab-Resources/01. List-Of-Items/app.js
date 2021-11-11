function addItem() {
    let element = document.getElementById('newItemText');
    let items = document.querySelector('#items')
    let newItem = document.createElement('li')
    newItem.textContent = element.value
    items.appendChild(newItem)
    element.value = "";
}