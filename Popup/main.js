const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementsByClassName("close")[0];

openModalButton.addEventListener("click", function() {
  modal.style.display = "block"; // Show the modal
});

closeModalButton.addEventListener("click", function() {
  modal.style.display = "none"; // Hide the modal
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Hide the modal when the user clicks outside of it
  }
});
