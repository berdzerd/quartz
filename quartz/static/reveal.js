//Reveal Javascript for Quartz Site Korean HW

console.log("reveal loaded");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const answer = el.dataset.answer
    const original = el.textContent

    el.addEventListener("click", () => {
      if (el.classList.contains("revealed")) {
        el.textContent = original
        el.classList.remove("revealed")
      } else {
        el.textContent = answer
        el.classList.add("revealed")
      }
    })
  })
})

