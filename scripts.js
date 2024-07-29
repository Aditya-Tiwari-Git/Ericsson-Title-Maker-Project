$(document).ready(function () {
  // Data for dropdown options
  const issues = {
    Outlook: [
      "Add-ins not loading",
      "Attachment size limit exceeded",
      "Auto-complete not working",
      "Calendar events not syncing",
      "Cannot access shared mailbox",
      "Cannot add a new account",
      "Corrupted Outlook data file",
      "Duplicate emails",
      "Error during send/receive operation",
    ],
    // Excel: ["Not able to open Excel"],
    OneDrive: [
      "Cannot Sign In",
      "Unable to Sync Files",
      "OneDrive Crashing",
      "File Upload Issues",
      "Unable to Share Files",
      "Missing Files or Folders",
      "Cannot Access Files Offline",
      "Sync Conflicts",
      "OneDrive Not Starting",
      "Storage Limit Reached",
      "Slow File Uploads",
      "Downloading Files Fails",
      "Unable to Delete Files",
      "Duplicate Files Created",
      "Access Denied to Shared Folder",
      "Error Opening Files",
      "Integration Issues with Office Apps",
      "Outdated OneDrive Client",
      "Incorrect File Version",
      "OneDrive Unresponsive",
      "Slow Performance",
      "Notifications Not Appearing",
      "General Performance Issues (slow, unresponsive)",
      "Unable to Restore Deleted Files",
      "Frequent Disconnections",
      "OneDrive Icon Missing",
      "File Preview Not Working",
      "Sync Delays",
      "Folder Name Conflicts",
      "Cannot Pause Sync",
    ],
    EGAD: [
      "Unable to Login",
      "Account is getting frequently locked.",
      "Password not working",
      "Unable to reset password",
      "Unable to Login",
      "Unable to login to citrix",
      "Not able to reset the password using EPM",
      "Not able to login to windows",
      "Not able to login to MWP",
    ],
    Teams: [
      "Experiencing Audio issue while on teams call",
      "Unable to login to teams",
      "Calendar not syncing",
      "Issue in turning on camera during teams meeting",
      "Unable to access team channels",
      "Unable to add new members in teams group",
      "Connectivity issues",
      "Not able to make teams call",
      "Failed to upload file in teams channel/group",
      "Display status is not updating",
      "Microphone is not working",
      "Enable notification for Microsoft Teams in MWP",
      "Unable to share teams screen",
      "Slow performance issue",
      "Teams app getting crashed frequently",
      "Unable to launch teams app",
      "Unable to update teams app",
      "Unable to join meeting",
      "Unable to send message on teams",
      "Cannot sign-in to teams",
      "Unable to access teams",
      "Unable to load teams",
      "Teams app getting crashed",
      "Unable to schedule meetings",
      "Poor audio/video quality on MS Teams call",
      "Unable to join meetings",
      "Unable to upload file in teams channel",
      "Teams not syncing with Outlook",
    ],
    OneNote: [
      "Not able to attach the document",
      "Not able to record audio",
      "Not able to insert files",
      "Cannot open notebook",
      "Cannot share notebook",
      "Clipboard not accessible",
      "Formatting issues coming in OneNote",
      "Ink to text not working",
      "Not able to save notes",
      "OneNote is crashing",
      "OneNote is freezing",
      "OneNote is not syncing",
      "OneNote is not updating",
      "Printing issue coming in OneNote",
      "Pages are not loading",
      "Search is not working",
      "Sections are missing",
      "Slow performance in OneNote",
      "Table formatting issues in OneNote",
      "Tags is not showing",
    ],
  };

  const errors = {
    Outlook: [
      "Compatibility issues",
      "File too large",
      "Corrupted auto-complete list",
      "Sync issues",
      "Permission issues",
      "Authentication failed",
      "PST/OST file corruption",
      "Rules misconfiguration",
      "Send/receive error code",
    ],
    // Excel: ["Excel not opening", "Testing"],
    OneDrive: [
      "We couldn't sign you in. Please try again.",
      "Authentication error. Please check your credentials.",
      "Sync issues. Check your connection and try again.",
      "Sync paused. Resume sync to continue.",
      "Sync failed due to server error.",
      "An unexpected error has occurred. Restart OneDrive.",
      "OneDrive has stopped working.",
      "File upload failed. Please try again.",
      "You don't have permission to upload files.",
      "File size exceeds the limit.",
      "Sharing failed. Please check your permissions.",
      "Unable to generate shareable link.",
      "Files or folders are missing. Please check your OneDrive settings.",
      "The file or folder you are looking for could not be found.",
      "Files not available offline. Enable offline access in settings.",
      "Offline access is disabled for this account.",
      "Sync conflict. Resolve conflicts and try again.",
      "Conflicting versions detected.",
      "OneDrive failed to start. Please restart your computer.",
      "OneDrive startup error.",
      "You've reached your storage limit. Please delete some files or upgrade your storage plan.",
      "Cannot sync files. Storage quota exceeded.",
      "File upload is taking longer than expected.",
      "File download failed.",
      "File deletion failed. You might not have the required permissions.",
      "Duplicate file detected. A copy has been created.",
      "You don't have access to this shared folder.",
      "File format not supported.",
      "File is corrupted and cannot be opened.",
      "Cannot save document. Check your OneDrive connection.",
      "Your OneDrive client is outdated. Please update to the latest version.",
      "The file version is outdated. Please sync to get the latest version.",
      "OneDrive is not responding. Please try again later.",
      "Files not opening.",
      "There is an issue with the item. Please resolve the issue.",
      "OneDrive application not responding.",
      "Item unavailable.",
      "Files not syncing.",
      "OneDrive application missing.",
      "Item not available.",
      "OneDrive stuck at processing changes.",
      "There is an issue with the item. Please resolve the issue.",
      "OneDrive not responding.",
    ],
    EGAD: [
      "Account Expired",
      "Password is incorrect",
      "Something unexpected happened",
      "Invalid Password",
      "Try again or contact helpdesk.",
      "Password limit is reached",
      "Invalid Credentials",
      "Password is incorrect",
    ],
    Teams: [
      "Poor audio quality",
      "Authentication failed",
      "Sync issue",
      "Camera is not detected",
      "Access denied",
      "Permission denied",
      "Network is unreachable",
      "Call failed try again later",
      "File is too large",
      "Incorrect display status",
      "Failed to detect",
      "Failed to share screen",
      "High CPU usage",
      "An unexpected error has occurred",
      "Stucks on loading screen",
      "Failed to update",
      "Stucks on loading screen",
      "Meeting link is not available",
      "Error - failed to send please try again",
      "We couldn't sign you in. Please try again.",
      "Ask your admin to enable Microsoft Teams.",
      "We're having trouble loading the full experience.",
      "An unexpected error has occurred",
      "You don't have permissions to create a meeting.",
      "Unable to schedule meeting. Please try again later.",
      "Couldn't connect you to the meeting.",
      "Meeting is no longer available.",
      "Upload failed try again",
      "Permission denied.",
      "Error - failed to send please try again",
      "Can't sync your calendar right now.",
    ],
    OneNote: [
      "Attachment failed",
      "Recording failed",
      "Insert file error",
      "File error",
      "Sharing error",
      "Clipboard error",
      "Format error",
      "Conversion error",
      "Failed saving the file",
      "App crash",
      "App freeze",
      "Sync error",
      "Update failed",
      "Print error",
      "Page load error",
      "Search error",
      "Section corrupted",
      "High CPU usage",
      "Table error",
      "Tags not available",
    ],
  };

  function populateDropdown(id, options) {
    const select = $(`#${id}`);
    select.empty();
    select.append(
      `<option value="">Select ${
        id.charAt(0).toUpperCase() + id.slice(1)
      }</option>`
    );
    options.forEach((option) => {
      select.append(`<option value="${option}">${option}</option>`);
    });
    select.select2(); // Reinitialize select2 after updating options
  }

  // Initialize select2
  $(".select2").select2();

  $("#product").on("change", function () {
    const product = $(this).val();
    if (product in issues) {
      populateDropdown("issue", issues[product]);
      populateDropdown("error", errors[product] || []); // Filter errors based on product
      $("#issue").prop("disabled", false);
      $("#error").prop("disabled", false);
    } else {
      populateDropdown("issue", []);
      populateDropdown("error", []);
      $("#issue").prop("disabled", true);
      $("#error").prop("disabled", true);
    }
  });

  $("#issue").on("change", function () {
    // No specific filtering of errors based on issue for now
  });

  $("#generateTitle").on("click", function () {
    const product = $("#product").val();
    const issue = $("#issue").val();
    const error = $("#error").val();

    if (product && issue) {
      const title = `${product}: ${issue}${error ? `: ${error}` : ""}`;
      $("#title").text(title);

      // Show the "Copy to Clipboard" button
      $("#copy-to-clipboard").show();

      // Reset the form
      $("#product").val("").trigger("change");
      $("#issue").val("").trigger("change");
      $("#error").val("").trigger("change");
    } else {
      $("#title").text("Please select both Product and Issue.");
      $("#copy-to-clipboard").hide();
    }
  });

  $("#copy-to-clipboard").on("click", function () {
    const titleText = $("#title").text();
    if (titleText && titleText !== "Please select both Product and Issue.") {
      navigator.clipboard
        .writeText(titleText)
        .then(() => {
          alert("Title copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  });
});
