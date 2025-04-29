document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const formMessage = document.getElementById("form-message");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Capture form inputs
        const name = document.getElementById("patient-name").value;
        const age = document.getElementById("patient-age").value;
        const disease = document.getElementById("disease-select").value;

        if (name && age && disease) {
            formMessage.textContent = `Patient ${name} (Age: ${age}) registered for ${disease}.`;
            registrationForm.reset(); // Reset form fields
        } else {
            formMessage.textContent = "Please fill all the fields!";
            formMessage.style.color = "red";
        }
    });
});
