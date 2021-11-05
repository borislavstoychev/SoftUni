function extractText() {
    let text = document.getElementById('items').children;
    let result = Array.from(text).map(e => e.textContent).join('\n')
    document.getElementById('result').textContent = result
}