const res = document.getElementById("result")
const list = document.getElementById("keys-list")

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["×", "-", "+", "+/-", "="]

for (const number of numbers) {
  let li = document.createElement("li")
  let button = document.createElement("button")
  button.classList.add("keys", "bg-body")
  button.innerText = number
  button.addEventListener("click", function liveScreen() {
    if (typeof res.value !== NaN) {
      res.value += number
    }
  })
  li.appendChild(button)
  list.appendChild(li)
}

function liveScreen(value) {
  if (typeof res.value !== NaN) {
    res.value += value
  }
}

function calculate(value) {
  if (isNaN(value)) {
    res.value = "Can not divide 0 with 0"
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = value
  }
}

function backspace() {
  const result = res.value
  res.value = result.substring(0, res.value.length - 1)
}

//Add keyboard events

document.addEventListener("keydown", keyboardEventHandler)

function keyboardEventHandler(e) {
  console.log(e)
  e.preventDefault();

  for (const num of numbers) {
    if (e.key === num) {
      res.value += num
    }
  }

  for (const sym of operators) {
    if (e.key === sym) {
      if (sym === "×") {
        sym = "*"
      }
      res.value += sym
    }
  }


  if (e.key === ".") {
    res.value += ".";
  } else {
    return
  }

  if (e.key === "Enter") {
    if (isNaN(res.value)) {
      res.value = "Can not divide 0 with 0"
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } else {
      return res.value
    }
  }

  if (e.key === "Backspace") {
    console.log(res.value)
    const result = res.value
    res.value = result.substring(0, res.value.length - 1)
  }
}