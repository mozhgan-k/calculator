const res = document.getElementById('result')

function liveScreen(value) {
  if (!res.value) {
    res.value = ""
  }
  // if(value === '×' || value === '%' || value === '+' || value === '-') {
  //   res.value = 'Enter a number'
  //   setTimeout(() => {
  //     res.value = ""
  //   }, 1300);
  // } else {
  res.value += value
  // }
}

function calculate(value) {
  const calculatedValue = eval(value || null)
  console.log(calculatedValue)
  if (isNaN(calculatedValue)) {
    res.value = "Can not divide 0 with 0"
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue
  }
}

function backspace() {
  const result = res.value
  res.value = result.substring(0, res.value.length - 1)
}

document.addEventListener("keydown", keyboardEventHandler)

function keyboardEventHandler(e) {
  console.log(e.key)
  e.preventDefault();

  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    console.log(res.value)
    console.log(e.key)
    res.value += "9";
  }

  if (e.key === "*") {
    res.value += "×";
  } else if (e.key += "-") {
    res.value += "-";
  } else if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "/") {
    res.value += "/";
  }

  if(e.key === ".") {
    res.value += ".";
  }

  if(e.key === "Enter") {
    calculate(res.value);
  }

  if(e.key === "Backspace") {
    backspace();
  }
}