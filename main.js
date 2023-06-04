const downloadFile = () => {
  const downloadInstance = document.createElement("a")
  downloadInstance.href = "./assets/Miguel-Jesus-Oyola.pdf"
  downloadInstance.target = "_blank"
  downloadInstance.download = "Jesus Oyola"

  document.body.appendChild(downloadInstance)
  downloadInstance.click()
  document.body.removeChild(downloadInstance)
}

const submitFormulario = ()=>{
  const form = document.getElementById('formulario');
  form.onsubmit();
}