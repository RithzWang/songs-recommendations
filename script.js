document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const songTitle = document.getElementById('songTitle').value;
    const artist = document.getElementById('artist').value;
    const comment = document.getElementById('comment').value;

    const recommendation = document.createElement('div');
    recommendation.innerHTML = `<strong>${songTitle}</strong> by ${artist}<br>${comment}<hr>`;
    document.getElementById('recommendationsList').appendChild(recommendation);

    this.reset(); // Reset the form fields
});
