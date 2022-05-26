const eventsButton = document.querySelector(".page__events-button")
const eventsModal = document.querySelector(".events-modal")
const upcomingButton = document.querySelector(".nav__item_type_upcoming")

function openModal(modal) {
  modal.classList.toggle("events-modal_visible");
};

eventsButton.addEventListener("click", () => openModal(eventsModal));
upcomingButton.addEventListener("click", () => openModal(eventsModal));
