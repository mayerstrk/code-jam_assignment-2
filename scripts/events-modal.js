const eventsButton = document.querySelector(".page__events-button")
const eventsModal = document.querySelector(".events-modal")

function handleModalClick(modal) {
  modal.classList.toggle("events-modal_visible");
};


eventsButton.addEventListener("click", () => handleModalClick(eventsModal));