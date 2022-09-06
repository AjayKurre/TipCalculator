
const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeople = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')
// Get number of people from number of people div
let people = Number(numberOfPeople.innerText)


const calculateBill = () => {
    const bill = Number(billTotalInput.value)
  const tip = Number(tipInput.value)
  // get bill from user input & convert it into a number
  perPersonTotal.innerText ='$'+ ((bill + (tip * bill)/100) / people).toFixed(2);
}

// ** Splits the bill between more people **
const increasePeople = () => {
    people += 1
    numberOfPeople.innerText = people
    calculateBill()

  // increment the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
}

const decreasePeople = () => {
  if (people == 1) {
    return
  }else {
    people -= 1
    numberOfPeople.innerText = people
    calculateBill()
  }
  
    // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)


  // decrement the amount of people
  // update the DOM with the new number of people


  // calculate the bill based on the new number of people

}
