function notify(message) {
  let notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  if (notification.getAttribute('data-notification-set') !== 'true'){
    notification.setAttribute('data-notification-set', 'true')
    notification.addEventListener('click', (ev)=>{ ev.target.style.display = 'none';});
  };

};