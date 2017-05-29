/*
Передаваемый функции объект должен иметь следующие атрибуты:
obj - объект;
template - строка-шаблон;
afterLoaded - функция, которая вызывается после помещения шаблона
afterDestructed - функция, которая вызывается после удаление шаблона
 */
export default function getElementFromTemplate(obj) {
  const mainBlock = document.getElementById(`main-block`);
  mainBlock.innerHTML = obj.template;
  obj.afterLoaded();
}
