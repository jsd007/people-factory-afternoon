const personForm = document.querySelector('form#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const title = f.personTitle.value
    const name = f.personName.value
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value

    const colorDiv = `<div style="background-color: ${favoriteColor}; width=: 100px; height: 50px;"></div>`

    // const boldedName = document.createElement('strong')
    // boldedName.textContent = name

    // const details = document.querySelector('#details')
    // details.innerHTML += `<strong>${name}</strong>`
    // details.appendChild(boldedName)



    details.innerHTML = `<ul>
    <li>Name: ${name}</li>
    <li>Favorite Color: ${colorDiv}</li>
    <li>Age: ${age}</li>
    </ul>
    `

    document.querySelector('h1').textContent = title + " " + name
    document.querySelector('p1').textContent = "Welcome " + title + " " + name
    

}

personForm.addEventListener('submit', handleSubmit)
