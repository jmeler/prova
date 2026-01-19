const form = document.querySelector("#favorits-form");
const resultat = document.querySelector("#resultat");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nom = form.nom.value.trim();
  const plat = form.plat.value.trim();

  if (!nom || !plat) {
    resultat.textContent = "Si us plau, omple els dos camps.";
    return;
  }

  resultat.textContent = `Genial, ${nom}! El teu plat preferit és ${plat}.`;
  form.reset();
});
