/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const checkNumber = (event) => {
    let aCode = event.which ? event.which : event.keyCode
    if (aCode > 31 && (aCode < 48 || aCode > 57)) return false
    return true
}

const convertInput = document.getElementById("convert-input")
const convertBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")


convertBtn.addEventListener("click", () => {
    convertInput.value
    converter()
})

const converter = () => {
    const meter = (convertInput.value * 0.3048).toFixed(3)
    const feet = (convertInput.value * 3.281).toFixed(3)
    const gallon = (convertInput.value * 0.264).toFixed(3)
    const liter = (convertInput.value * 3.78541).toFixed(3)
    const pound = (convertInput.value * 2.204).toFixed(3)
    const kilo = (convertInput.value * 0.453592).toFixed(3)

    lengthResult.textContent = `${convertInput.value} meters = ${feet} feet | ${convertInput.value} feet = ${meter} meters`
    volumeResult.textContent = `${convertInput.value} liters = ${gallon} gallons | ${convertInput.value} gallons = ${liter} liters`
    massResult.textContent = `${convertInput.value} kilos = ${pound} pounds | ${convertInput.value} pounds = ${kilo} kilos`
}