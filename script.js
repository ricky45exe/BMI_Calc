function checkBMI() {
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let bmi = weight.value / (height.value * height.value);
    if (bmi < 18.5) {
      document.getElementById("result").innerText = "underweight! 🍔";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      document.getElementById("result").innerText = "Normal 🎉";
    } else if (bmi >= 25 && bmi <= 29.9) {
      document.getElementById("result").innerText = "Overweight 🤫";
    } else if (bmi >= 30 && bmi <= 35) {
      document.getElementById("result").innerText = "Obesity 🤯";
    } else {
      document.getElementById("result").innerText = "Severe Obesity 🥱";
    }
  }