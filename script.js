document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        { name: 'Balance', image: 'images/balance.png', description: 'Balance represents the equilibrium between opposing forces. It signifies the importance of finding a harmonious middle ground in all aspects of life. Whether it\'s work and play, rest and activity, or giving and receiving, balance ensures that all elements coexist peacefully. This card encourages you to seek stability and avoid extremes.' },
        { name: 'Harmony', image: 'images/harmony.png', description: 'Harmony symbolizes the blending of diverse elements to create a pleasing and cohesive whole. It speaks to the beauty of unity and cooperation, whether in relationships, work, or personal endeavors. This card reminds you to cultivate peaceful interactions and appreciate the symphony created when different parts come together in perfect accord.' },
        // Add more card objects here
    ];

    const revealButton = document.getElementById('revealButton');
    const cardImage = document.getElementById('cardImage');
    const cardName = document.getElementById('cardName');
    const cardDescription = document.getElementById('cardDescription');

    revealButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const card = cards[randomIndex];

        // Reset visibility states
        cardImage.style.opacity = 0;
        cardName.style.opacity = 0;
        cardDescription.style.opacity = 0;

        // Update the card content
        cardImage.src = card.image;
        cardName.textContent = card.name;
        cardDescription.textContent = card.description;

        // Show image and then reveal attributes
        cardImage.style.display = 'block'; // Make the image visible
        setTimeout(() => {
            cardImage.style.opacity = 1; // Reveal image
            setTimeout(() => {
                cardName.style.opacity = 1; // Reveal name
                setTimeout(() => {
                    cardDescription.style.opacity = 1; // Reveal description
                }, 1000); // Adjust delay as needed
            }, 1000); // Adjust delay as needed
        }, 100); // Small delay to ensure the image starts to show
    });
});
