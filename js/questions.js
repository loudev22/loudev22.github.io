(function () { // Función autoinvocada para proteger las variables de otros archivos
  const titleQuestions = [...document.querySelectorAll('.questions__title')];
  console.log(titleQuestions);
  titleQuestions.forEach(question => {
    question.addEventListener('click', () => {
      let height = 0;
      let answer = question.nextElementSibling;
      let addPading = question.parentElement.parentElement;

      // Para agregar la clase que muestra un padding bottom en la información al dar click
      addPading.classList.toggle('questions__padding--add');

      // Para hacer que la flecha rote al darle click
      question.children[0].classList.toggle('questions__arrow--rotate');

      // scrollHeight nos da el alto mínimo para que un elemento se muestre
      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
      }
      answer.style.height = `${height}px`;
    })
  });
})();