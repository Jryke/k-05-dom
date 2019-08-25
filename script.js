Array.from(document.getElementsByClassName('selected')).forEach(el => !el.classList.contains('primary') ? el.classList.remove('selected') : null)
