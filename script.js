document.getElementById('pick-weebie').addEventListener('click', function() {
    const weebieImage = document.getElementById('weebie-image');
    const weebieText = document.getElementById('weebie');
    
    // Example weebie data
    const weebies = [
        { name: 'Weebie 1', image: 'images/balance.png' },
        { name: 'Weebie 2', image: 'images/harmony.png' },
        { name: 'Weebie 3', image: 'images/peace.png' }
    ];
    
    // Pick a random weebie
    const randomWeebie = weebies[Math.floor(Math.random() * weebies.length)];
    
    // Update the image and text
    weebieImage.src = randomWeebie.image;
    weebieText.textContent = randomWeebie.name;
    
    // Log the image source to ensure it's correct
    console.log('Image source:', weebieImage.src);
    
    // Add an error handler to log if the image fails to load
    weebieImage.onerror = function() {
        console.error('Failed to load image:', weebieImage.src);
    };
    
    // Remove the fade-in class if it exists
    weebieImage.classList.remove('fade-in');
    weebieText.classList.remove('fade-in');
    
    // Trigger reflow to restart the animation
    void weebieImage.offsetWidth;
    void weebieText.offsetWidth;
    
    // Add the fade-in class to start the animation
    weebieImage.classList.add('fade-in');
    
    // Wait for the image to fade in before fading in the text
    setTimeout(() => {
        weebieText.classList.add('fade-in');
    }, 1); // Match this duration to the image fade-in duration
});