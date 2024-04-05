async function detectDisease() {
    const imageInput = document.getElementById('imageInput');
    const resultDiv = document.getElementById('result');

    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('/detect-disease', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            resultDiv.innerHTML = `<strong>Disease Detected:</strong> ${data.disease}`;
        } catch (error) {
            console.error('Error detecting disease:', error);
            resultDiv.innerHTML = 'Error detecting disease. Please try again.';
        }
    } else {
        resultDiv.innerHTML = 'Please select an image.';
    }
}
