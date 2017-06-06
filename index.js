const personForm = document.querySelector('form#personForm')

function renderColor(color) {
   const div = document.createElement('div')
   div.style.backgroundColor = color
   div.style.width = '100px'
   div.style.height = '50px'
    return div
}

function renderListItem(label, value) {
    const item = document.createElement('li')
    item.textContent = `${label}: ${value}`
    return item
}

function renderList(personData){
    const list = document.createElement('ul')
    //call renderlist item w/ loop
    //gives us an array of data
    Object.keys(personData).map(function(label) {
        const item = renderListItem(label, personData[label])
        list.appendChild(item)
})
    return list
}

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const title = f.personTitle.value
    const name = f.personName.value
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value

    const person = {
        name: f.personName.value,
        favoriteColor: f.favoriteColor.value,
        age: f.age.value,
    }

    details.appendChild(renderList(person))

    // const colorDiv = `<div style="background-color: ${favoriteColor}; width=: 100px; height: 50px;"></div>`
    // const boldedName = document.createElement('strong')
    // boldedName.textContent = name

    // const details = document.querySelector('#details')
    // details.innerHTML += `<strong>${name}</strong>`
    // details.appendChild(boldedName)

    // const newUl = document.createElement("ul")
    // details.appendChild(newUl)
    // const lName = document.createElement("li")
    // lName.textContent = "Name: " + title + " " + name
    // details.appendChild(lName)
    // const lColor = document.createElement("li")
    // lColor.innerHTML = `Color: ${renderColor(favoriteColor)}`
    // details.appendChild(lColor)
    // const lAge = document.createElement("li")
    // lAge.textContent = "Age: "+ age
    // details.appendChild(lAge)




    // details.innerHTML = `<ul>
    // <li>Name: ${name}</li>
    // <li>Favorite Color: ${colorDiv}</li>
    // <li>Age: ${age}</li>
    // </ul>
    // `

    document.querySelector('h1').textContent = title + " " + name
    document.querySelector('p1').textContent = "Welcome " + title + " " + name
    

}

personForm.addEventListener('submit', handleSubmit)
