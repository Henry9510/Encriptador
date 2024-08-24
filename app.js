




const d = document;
const textArea = d.querySelector(".texto-encriptado");
const mensaje = d.querySelector(".resultado");
const cont1 = d.querySelector(".texto-resultado");
const cont2 = d.querySelector(".panel-imagen");
const panelR = d.querySelector(".panel-resultado");



function btnDesencriptar() {


  if (textArea.value !== "") {
    const textoEncriptado = desencriptarMensaje(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

    if (window.matchMedia('(max-width: 768px)').matches) {
      mensaje.style.height = 'auto'; // Resetea la altura para calcular el nuevo tamaño
      mensaje.style.height = mensaje.scrollHeight + 'px'; // Ajusta la altura según el contenido
      cont1.style.height = 'auto'; // Resetea la altura para calcular el nuevo tamaño
      cont1.style.height = cont1.scrollHeight + 'px'; // Ajusta la altura según el contenido
      panelR.style.height = 'auto'; // Resetea la altura para calcular el nuevo tamaño
      panelR.style.height = panelR.scrollHeight + 'px'; // Ajusta la altura según el contenido
    }


  }


}



function btnEncriptar() {
  if (textArea.value !== "") {
  const textoEncriptado = encriptarMensaje(textArea.value);



  mensaje.value = textoEncriptado;
  cont1.style.display = "flex";
  cont2.style.display = "none";
  textArea.value = "";


  if (window.matchMedia('(max-width: 768px)').matches) {
    mensaje.style.height = 'auto'; // Resetea la altura para calcular el nuevo tamaño
    mensaje.style.height = mensaje.scrollHeight + 'px'; // Ajusta la altura según el contenido
    cont1.style.height = 'auto'; // Resetea la altura para calcular el nuevo tamaño
    cont1.style.height = cont1.scrollHeight + 'px'; // Ajusta la altura según el contenido
    panelR.style.height = 'auto'; // Resetea la altura para calcular el nuevo tamaño
    panelR.style.height = panelR.scrollHeight + 'px'; // Ajusta la altura según el contenido
  }

  }
}



function encriptarMensaje(stringMensaje) {

  let llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"]];

  stringMensaje = stringMensaje.toLowerCase();

  for (let i = 0; i < llaves.length; i++) {
    if (stringMensaje.includes(llaves[i][0])) {
      stringMensaje = stringMensaje.replaceAll(llaves[i][0], llaves[i][1])

    }
  }


  return stringMensaje

}


function desencriptarMensaje(stringDesencriptado) {

  let llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"]];

  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < llaves.length; i++) {
    if (stringDesencriptado.includes(llaves[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(llaves[i][1], llaves[i][0])




    }
  }
  return stringDesencriptado

}

function copiarTexto() {
  (document.querySelector('.resultado')).select();
  document.execCommand('copy');
}