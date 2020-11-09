function copyEmail() {

  clipboardData.setData("text/plain", "dandewaters@gmail.com")

  /* Alert the copied text */
  alert("Copied: " + copyText.value);
}

function copyPhoneNumber() {

  clipboardData.setData("text/plain", "4343620601")

  /* Alert the copied text */
  alert("Copied: " + copyText.value);
}