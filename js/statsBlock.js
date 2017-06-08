const statsBlock = (data) => {
  return `
  <ul class="stats">
    ${[...data].map((result) => {
      return `<li class="stats__result stats__result--${result}"></li>`;
    }).join(``)}
  </ul>  
  `;
};

export default statsBlock;
