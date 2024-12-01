fetch('https://<website-phishing-detection>.up.railway.app/predict/', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({ features: [/* fitur data */] }),
})
.then(response => response.json())
.then(data => {
  console.log('Prediction:', data.prediction);
})
.catch(error => {
  console.error('Error:', error);
});
