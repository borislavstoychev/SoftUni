function attachGradientEvents() {
    let gradient = document.getElementById('gradient-box');
    gradient.addEventListener('mousemove', onMove);
    const result = document.getElementById('result');

    function onMove(ev){
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100)
        result.textContent = `${offset}%`
    }
    
}