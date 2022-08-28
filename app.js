const names = [
  "Weymouth",
  "Quincy",
  "Brockton",
  "Braintree",
  "Stoughton"
];

const inputField = document.getElementById("searchField");
const resultWrapper = document.querySelector("#resultWrapper");
const result = document.getElementById("results");
const cleanBtn = document.getElementById("closebtn");

cleanBtn.addEventListener('click', function () {
  inputField.value = "";
  resultWrapper.classList.add('hidden');
  console.log('clear button')
});

inputField.addEventListener('input', function () {
  let keyInput = inputField.value;
  console.log(keyInput);
  for (let item of names) {

    if (item.toLocaleLowerCase() === keyInput) {
      resultWrapper.classList.remove('hidden');
      result.innerHTML = `<li>${item}</li>`;
      console.log(`${item}`);
    }
    if (!keyInput.toLocaleLowerCase()) {
      resultWrapper.classList.add('hidden');
    }

  }
});

