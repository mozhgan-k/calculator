const res = document.getElementById("result")
const list = document.getElementById("keys-list")

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["/", "+", "=", "-", "(", ")", ".", "*"];


function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Err";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

function liveScreen(value) {
  let newValue = ""
  if (value === "openParen") {
    newValue = "("
  } else if (value === "closeParen") {
    newValue = ")"
  } else {
    newValue = value
  }
  if (typeof newValue !== NaN) {
    res.value += newValue
  }
}

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

function backspace() {
  const result = res.value
  res.value = result.substring(0, res.value.length - 1)
}

//Add keyboard events

document.addEventListener("keydown", keyboardEventHandler)

function keyboardEventHandler(e) {
  e.preventDefault();

  for (const num of numbers) {
    if (e.key === num) {
      res.value += num
    }
  }

  for (const sym of operators) {
    if (e.key === sym) {
      if (e.key === "=") {
        const calculatedValue = eval(res.value || null);
        if (isNaN(calculatedValue)) {
          res.value = "Err";
          setTimeout(() => {
            res.value = "";
          }, 1300);
        } else {
          res.value = calculatedValue;
        }
      } else {
        res.value += sym
      }
    }
  }

  if (e.key === "Enter") {
    const calculatedValue = eval(res.value || null);
    if (isNaN(calculatedValue)) {
      res.value = "Err";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } else {
      res.value = calculatedValue;
    }
  }

  if (e.key === "Backspace") {
    console.log(res.value)
    const result = res.value
    res.value = result.substring(0, res.value.length - 1)
  }
}

