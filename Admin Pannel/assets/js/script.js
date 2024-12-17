// image preview js
document
  .getElementById("postImage")
  .addEventListener("change", function (event) {
    const preview = document.getElementById("preview");
    const previewContainer = document.getElementById("imagePreview");

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        preview.src = e.target.result;
        previewContainer.style.display = "block";
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      preview.src = "#";
      previewContainer.style.display = "none";
    }
  });

// Function to show the hidden div
function showDivOnClick() {
  const button = document.getElementById("nextBtn");
  const hiddenDiv = document.getElementById("imageUploadSection");

  if (button && hiddenDiv) {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default behavior
      hiddenDiv.classList.remove("d-none");
      console.log("Hidden div is now visible.");
    });
  } else {
    console.error("Button or div element not found.");
  }
}

// Call the function to initialize
showDivOnClick();

document.getElementById("nextBtn").addEventListener("click", function () {
  document.getElementById("imageUploadSection").style.display = "block";
  document.getElementById("submitBtn").style.display = "inline-block";
  document.getElementById("nextBtn").style.display = "none";
});
