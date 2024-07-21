// Initialize Chosen plugin for select elements
jQuery("#product-select").chosen();
jQuery("#issue-select").chosen();
jQuery("#error-select").chosen();

// Function to generate the title and copy it to clipboard
function generateAndCopyTitle() {
  const product = document.getElementById("product-select").value;
  const issue = document.getElementById("issue-select").value;
  const error = document.getElementById("error-select").value;

  let title = "";
  if (product && issue) {
    title = error ? `${product}: ${issue}: ${error}` : `${product}: ${issue}`;
  } else {
    title = "Please select all required fields to generate the title.";
  }

  document.getElementById("title").textContent = title;

  if (title !== "Please select all required fields to generate the title.") {
    navigator.clipboard.writeText(title).then(
      () => {
        alert("Title copied to clipboard!");
      },
      () => {
        alert("Failed to copy title to clipboard.");
      }
    );
  }
}

// Add event listener to the Generate button
document
  .getElementById("generate-button")
  .addEventListener("click", generateAndCopyTitle);

// Function to clear issue and error selections when product changes
function resetIssueAndError() {
  document.getElementById("issue-select").value = "";
  document.getElementById("error-select").value = "";
  jQuery("#issue-select").trigger("chosen:updated");
  jQuery("#error-select").trigger("chosen:updated");
}

// Add event listener to the Product select dropdown
document
  .getElementById("product-select")
  .addEventListener("change", resetIssueAndError);
