function showHidePhoneNumber() {
    const phoneNumberElement = document.getElementById('phoneNumber');
    phoneNumberElement.addEventListener('click', () => {
        if (!phoneNumberElement.textContent.startsWith('+')) {
            phoneNumberElement.textContent = '+359 898 75 00 67';
            phoneNumberElement.style.cursor = 'default';
            copyButton.removeAttribute('hidden');
        }
    })

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('hidden', 'true');
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(phoneNumberElement.textContent);
        copyButton.textContent = 'Copied!';
        copyButton.disabled = true;
    })

    phoneNumberElement.after(copyButton);

}


showHidePhoneNumber()