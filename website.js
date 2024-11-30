function submitForm() {
    const features = document.getElementById("features").value.split(',').map(Number);

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "features": features })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = `Prediction: ${data.prediction}, Confidence: ${data.confidence}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("result").innerText = 'An error occurred. Please try again.';
    });
}