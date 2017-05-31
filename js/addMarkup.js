/**
 *
 * @param {Object} obj Объект со значениями
 * @param {String} obj.template Строка-шаблон
 * @param {Function} obj.afterLoaded() Функция, которая вызывается после помещения шаблона
 */
export default function addMarkup(obj) {
  const mainBlock = document.getElementById(`main-block`);
  mainBlock.innerHTML = obj.template;
  obj.afterLoaded();
}
