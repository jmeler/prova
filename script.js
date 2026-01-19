const form = document.querySelector("#favorits-form");
const resultat = document.querySelector("#resultat");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nom = form.nom.value.trim();
  const plat = form.plat.value.trim();
  const beguda = form.beguda.value.trim();

  if (!nom || !plat || !beguda) {
    resultat.textContent = "Si us plau, omple els tres camps.";
    return;
  }

  resultat.textContent = `Genial, ${nom}! El teu plat preferit és ${plat} i la teva beguda preferida és ${beguda}.`;
  form.reset();
});
