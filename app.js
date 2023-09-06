const number = document.querySelectorAll(".calculator");
const result = document.getElementById("result");
const isEqual = document.querySelector(".isEqual");
const clear = document.querySelector(".clear");

for (let i of number) {
  i.addEventListener("click", function () {
    if (i.value != "=") {
      result.value += i.value;
    }
  });
}

isEqual.addEventListener("click", function () {
  try {
    const evaluation = eval(result.value);

    if (isNaN(evaluation) || !isFinite(evaluation)) {
      result.value = "Kuch To Gadabad Hai";
    } else {
      result.value = evaluation;
    }
  } catch (error) {
    result.value = "Kuch To Gadabad Hai";
  }
});

clear.addEventListener("click", function () {
  result.value = "";
});
