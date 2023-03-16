function clickbutton(target) {
  let result = document.getElementById("result")
  let target_value = target.innerHTML
  if (target_value == "AC") {
    result.innerHTML = "0"
  } else if (target_value == "=" ) {
    result.innerHTML = eval(result.innerHTML)
  } else if (target_value == "+" || target_value == "-" || target_value == "*" || target_value == "/" || target_value == "." ) {
    result.innerHTML = eval(result.innerHTML) +  target.innerHTML.slice(-1);
  } else {
    if (result.innerHTML == "0") {
      if (target_value != "0" && target_value != "00" ) {
        result.innerHTML = target_value
      }
    } else {
      result.innerHTML += target_value
    }
  }
}