(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      form: document.querySelector(".modal-form"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    refs.form.addEventListener("submit", (event) => {
      event.preventDefault(); // предотвращает перезагрузку страницы
  
      const formData = new FormData(refs.form);
      const data = Object.fromEntries(formData.entries());
  
      console.log("Form submitted:", data);
      toggleModal(); // закрыть модальное окно после отправки
    });
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
  