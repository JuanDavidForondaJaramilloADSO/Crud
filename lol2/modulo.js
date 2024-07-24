const correo = (event, elemento) => {

    let expresion = /^[\w-._]+@[\w-._]+\.(.[a-zA-Z]{2,4}){1,2}$/


    console.log(expresion, elemento.value);
    console.log(expresion.test(elemento.value))
    if(expresion.test(elemento.value)){
      alert("si funciona")
      elemento.classList.remove("error")
      elemento.classList.remove("correcto")
  }
  else {
    alert("no funciona")
    elemento.classList.remove("correcto")
    elemento.classList.remove("error")
  }
  }

  export default correo 