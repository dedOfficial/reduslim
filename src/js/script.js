// Elemnts UI
const phoneInput = document.querySelector("#phone");
let select = document.querySelector("#country-code");

// Phone Mask
const maskOptions = {
  mask: "+{7} (000) 000 00-00",
};

const maskCodes = {
  rus: 7,
  eng: 1,
};

const mask = IMask(phoneInput, maskOptions);

function updateMask(code) {
  phoneInput.placeholder = `+${code} (123) 456 78-90`;
  mask.updateOptions({
    mask: `+{${code} (000) 000 00-00`,
  });
}

// Select with icons
function cleanSelect(select) {
  select.className = "form-control__input";
  return select;
}

function formSelect() {
  select = cleanSelect(select);

  select.classList.add(select.value == "rus" ? "flag-ru" : "flag-en");

  select.style.height = "auto";
  select.style.overflow = "hidden";
  select.style.zIndex = "40000";
  select.style.backgroundColor = "#f8f8f8";

  select.addEventListener("mouseleave", function () {
    this.size = 1;

    cleanSelect(this).classList.add(
      this.value == "rus" ? "flag-ru" : "flag-en"
    );

    updateMask(maskCodes[this.value]);

    console.log(maskOptions.mask);
  });

  select.addEventListener("mouseover", function () {
    cleanSelect(this);
    this.size = this.querySelectorAll("option").length;
  });
}

document.addEventListener("DOMContentLoaded", formSelect);
