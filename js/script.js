const encryptButton = document.getElementsByClassName("boton_encriptar")[0];
const decryptButton = document.getElementsByClassName("boton_desencriptar")[0];
const copyButton = document.getElementsByClassName("boton_copiar")[0];
const resetButton = document.getElementsByClassName("boton_borrar")[0];
const messageContainer = document.getElementById("message");
const errorContainer = document.getElementById("error");
const responseContainer = document.getElementById("response");
const copyContainer = document.getElementById("boton_copiar");

const regexp = /^[a-z\s]*$/;

function textValidator(message) {
  return regexp.test(message);
}

function encriptar() {
  const message = document.querySelector(".espacio_escritura").value;
  const hasError = !textValidator(message);

  messageContainer.style.display = "none";
  errorContainer.style.display = "none";
  responseContainer.style.display = "none";

  if (hasError) {
    errorContainer.style.display = "block";
    copyContainer.style.display = "none";
    return;
  }

  if (message == "") {
    messageContainer.style.display = "block";
    return;
  }
  responseContainer.style.display = "block";

  var response = message
    .replace(/e/gim, "enter")
    .replace(/i/gim, "imes")
    .replace(/o/gim, "ober")
    .replace(/a/gim, "ai")
    .replace(/u/gim, "ufat");

  copyContainer.style.display = "block";
  responseContainer.innerHTML = `<p class="response-text">${response}</p>`;
}

function desencriptar() {
  const encryptedMessage = document.querySelector(".espacio_escritura").value;
  const hasError = !textValidator(encryptedMessage);

  messageContainer.style.display = "none";
  errorContainer.style.display = "none";
  responseContainer.style.display = "none";

  if (hasError) {
    errorContainer.style.display = "block";
    copyContainer.style.display = "none";
    return;
  }
  if (encryptedMessage == "") {
    messageContainer.style.display = "block";
    return;
  }
  responseContainer.style.display = "block";

  var newMessage = encryptedMessage
    .replace(/enter/gim, "e")
    .replace(/imes/gim, "i")
    .replace(/ober/gim, "o")
    .replace(/ai/gim, "a")
    .replace(/ufat/gim, "u");

  copyContainer.style.display = "block";
  responseContainer.innerHTML = `<p class="response-text">${newMessage}</p>`;
}

function copiar() {
  const text = document.getElementsByClassName("response-text")[0];

  navigator.clipboard.writeText(text.innerHTML);
}

function resetear() {
  document.querySelector(".espacio_escritura").value = "";
  responseContainer.style.display = "none";
  copyContainer.style.display = "none";
  messageContainer.style.display = "block";
  errorContainer.style.display = "none";
}

encryptButton.onclick = encriptar;
decryptButton.onclick = desencriptar;
copyButton.onclick = copiar;
resetButton.onclick = resetear;
