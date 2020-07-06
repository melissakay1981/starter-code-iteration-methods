function printKata (kataNumber, object) {
       const detailsElement = document.createElement('details')
    main.append(detailsElement)
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const main = document.querySelector('main')

const isActive = users.filter(user => user.isActive === true)
console.log(JSON.stringify(isActive))
printKata(' 1 Filter')
//h1.append('.filter')
main.append(JSON.stringify(isActive))


const email = users.map(user => user.email)
printKata( ' 2 email')
//h1.append(email)
//main.append(email)
main.append(JSON.stringify(email))
console.log('email')

const OVATION = users.some(user => user.OVATION)
printKata(' 3 OVATION')
main.append(JSON.stringify(OVATION))
console.log('OVATION')

const age38 = users.filter(user => (user.age > 38 && user.isActive))
const foundUser = age38.find(user => user)
console.log(age38)
printKata(' 4 Active 38')
main.append(JSON.stringify(foundUser))
console.log(name)

//Show the balance of every user in the array from the "ZENCO" company.
const Zenco = users.filter(user => (user.company === "ZENCO")).map(user => user.balance) 
printKata(' 5 ZENCO')
main.append(JSON.stringify(Zenco))
console.log('Zenco')

const fugiat = users.filter(function (user) {
    return user.tags.includes("fugiat")
})
.map(function (user) {
    return user.age
})
printKata("fugiat age")

main.append(JSON.stringify(fugiat))
console.log(fugiat)
// Use the .filter() method with .includes()
// Show the age of every user with the "fugiat" tag.
// use includess in filter then map