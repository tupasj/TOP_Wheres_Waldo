const openModal = () => {
    const highscoresModal = document.querySelector(".highscores-modal");
    highscoresModal.showModal();
};

const closeModal = () => {
    const highscoresModal = document.querySelector(".highscores-modal");
    highscoresModal.close();
};

const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener('click', closeModal);

export { openModal, closeModal };
