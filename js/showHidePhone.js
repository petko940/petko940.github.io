function showHidePhoneNumber() {
    let phoneNumberElement = document.getElementById('phoneNumber');
    phoneNumberElement.addEventListener('click', () => {
        if (!phoneNumberElement.textContent.startsWith('+')) {
            phoneNumberElement.textContent = '+359 898 75 00 67';
        }
    })
}

showHidePhoneNumber()