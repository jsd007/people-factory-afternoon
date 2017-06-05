const personForm = document.querySelector('form#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const title = f.personTitle.value
    const name = f.personName.value
    document.querySelector('h1').textContent = title + " " + name
    document.querySelector('p1').textContent = "Welcome " + title + " " + name

}

personForm.addEventListener('submit', handleSubmit)
