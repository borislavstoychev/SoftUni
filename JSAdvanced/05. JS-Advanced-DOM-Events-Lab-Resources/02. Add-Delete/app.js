function addItem() {
    let newItemText = document.getElementById('newItemText');
    let items = myCreateElement('li', newItemText.value)

     // Add delete link
    // The problem require us to do next ste    p with link instead of a button
    const deleteBtn = myCreateElement('a', '[Delete]');
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (event) => {
        event.target.parentNode.remove();
    });

    items.appendChild(deleteBtn);

    // Add the new <li> to document
    document.getElementById('items').appendChild(items);
    newItemText.value = '';

    function myCreateElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}
