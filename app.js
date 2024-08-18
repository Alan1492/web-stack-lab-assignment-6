document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const dobInput = document.getElementById('dob');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const dobError = document.getElementById('dobError');

    // Function to validate the name field
    function validateName() {
        const nameValue = nameInput.value.trim();
        if (nameValue.length < 3 || !/^[a-zA-Z\s]+$/.test(nameValue)) {
            nameError.textContent = 'Name must be at least 3 characters and contain only letters and spaces.';
            nameInput.classList.add('border-red-500');
            nameInput.classList.remove('border-green-500');
            return false;
        } else {
            nameError.textContent = '';
            nameInput.classList.remove('border-red-500');
            nameInput.classList.add('border-green-500');
            return true;
        }
    }

    // Function to validate the email field
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailInput.classList.add('border-red-500');
            emailInput.classList.remove('border-green-500');
            return false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('border-red-500');
            emailInput.classList.add('border-green-500');
            return true;
        }
    }

    // Function to validate the password field
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 8 || !/[a-zA-Z]/.test(passwordValue) || !/\d/.test(passwordValue)) {
            passwordError.textContent = 'Password must be at least 8 characters long and contain both letters and numbers.';
            passwordInput.classList.add('border-red-500');
            passwordInput.classList.remove('border-green-500');
            return false;
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('border-red-500');
            passwordInput.classList.add('border-green-500');
            return true;
        }
    }

    // Function to validate the confirm password field
    function validateConfirmPassword() {
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        if (confirmPasswordValue !== passwordValue) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            confirmPasswordInput.classList.add('border-red-500');
            confirmPasswordInput.classList.remove('border-green-500');
            return false;
        } else {
            confirmPasswordError.textContent = '';
            confirmPasswordInput.classList.remove('border-red-500');
            confirmPasswordInput.classList.add('border-green-500');
            return true;
        }
    }

    // Function to validate the date of birth field
    function validateDob() {
        const dobValue = dobInput.value;
        const dobDate = new Date(dobValue);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }

        if (isNaN(dobDate.getTime()) || age < 18) {
            dobError.textContent = 'You must be at least 18 years old.';
            dobInput.classList.add('border-red-500');
            dobInput.classList.remove('border-green-500');
            return false;
        } else {
            dobError.textContent = '';
            dobInput.classList.remove('border-red-500');
            dobInput.classList.add('border-green-500');
            return true;
        }
    }

    // Add event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    dobInput.addEventListener('input', validateDob);

    // Validate form on submit
    form.addEventListener('submit', function (e) {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isDobValid = validateDob();

        if (!(isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDobValid)) {
            e.preventDefault(); // Prevent form submission if any field is invalid
        }
    });
});
