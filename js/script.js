$(document).ready(function () {
  // Helper: validate a required text/password field
  function validateRequired(fieldId, errorId, message) {
    const $field = $("#" + fieldId);
    const value = $field.val().trim();

    if (value === "") {
      $field.addClass("is-invalid-custom");
      $("#" + errorId).text(message);
      return false;
    } else {
      $field.removeClass("is-invalid-custom");
      $("#" + errorId).text("");
      return true;
    }
  }

  $("#submitBtn").on("click", function () {
    let isValid = true;

    // Rule 1: required fields must not be empty
    if (!validateRequired("username", "usernameError", "This field must not be empty")) {
      isValid = false;
    }
    if (!validateRequired("email", "emailError", "This field must not be empty")) {
      isValid = false;
    }
    if (!validateRequired("password", "passwordError", "This field must not be empty")) {
      isValid = false;
    }
    if (!validateRequired("confirmPassword", "confirmPasswordError", "This field must not be empty")) {
      isValid = false;
    }

    // Rule 2: at least one topic checkbox must be checked
    if ($(".topic:checked").length === 0) {
      $("#topicsError").text("At least one topic must be selected");
      isValid = false;
    } else {
      $("#topicsError").text("");
    }

    // Rule 3: gender must not be left on the default "--"
    if ($("#gender").val() === "--") {
      $("#genderError").text("Please choose your gender");
      isValid = false;
    } else {
      $("#genderError").text("");
    }

    // Rule 4: confirmed password must match password
    // (only check the match once both fields actually have a value)
    const pwd = $("#password").val();
    const confirmPwd = $("#confirmPassword").val();
    if (pwd !== "" && confirmPwd !== "" && pwd !== confirmPwd) {
      $("#confirmPassword").addClass("is-invalid-custom");
      $("#confirmPasswordError").text("Confirmed password mismatched the password");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      // form-processing logic would go here
    }
  });
});