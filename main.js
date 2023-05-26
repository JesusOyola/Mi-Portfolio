const card1 = document.getElementById("card-1")
const card2 = document.getElementById("card-2")
const card3 = document.getElementById("card-3")

const loadCard = (entradas, observador) => {
  /* console.log(entradas);
  console.log(observador); */

  entradas.forEach((element) => {
    if (element.isIntersecting)
      element.target.classList.add("visible")
  })
}

const observador = new IntersectionObserver(loadCard, {
  root: null,
  rootMargin: " 0px 0px 0px 0px",
  threshold: 1.0,
})

observador.observe(card1)
observador.observe(card2)
observador.observe(card3)
