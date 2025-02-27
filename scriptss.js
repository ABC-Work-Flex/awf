document.addEventListener("DOMContentLoaded", function () {
    function handleSelection(selectId) {
      const select = document.getElementById(selectId);
  
      select.addEventListener("change", function () {
        const selectedValue = select.value;
  
        if (selectedValue === "All") {
          // Select all options except "Still Unsure"
          for (const option of select.options) {
            if (option.value !== "Unsure" && option.value !== "All") {
              option.selected = true;
            }
          }
        } else if (selectedValue === "Unsure") {
          // Deselect all options except "Still Unsure"
          for (const option of select.options) {
            option.selected = option.value === "Unsure";
          }
        }
      });
    }
  
    handleSelection("workflow-needs");
    handleSelection("platforms");
  });
  