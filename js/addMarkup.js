export default function getElementFromTemplate(template) {
  const mainBlock = document.getElementById(`main`);
  mainBlock.innerHTML = template;
}


