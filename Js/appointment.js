// Function to handle form submission and save data to localStorage
function submitForm(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const services = document.getElementById('services').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;

    // Check if all required fields are filled
    if (name && email && contact && services && date) {
        // Create an object to store the form data
        const formData = {
            name,
            email,
            contact,
            services,
            date,
            message
        };

        // Log data to the console
        console.log('Appointment Data:', formData);
        // Save form data to localStorage
        localStorage.setItem('appointmentData', JSON.stringify(formData));

        // Display success message or perform any additional actions
        alert('Appointment booked successfully!');

        // Optionally, reset the form
        document.getElementById('appointment-form').reset();
    } else {
        alert('Please fill in all required fields.');
    }
}

// Add event listener for form submission after the DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('appointment-form').addEventListener('submit', submitForm);
});
