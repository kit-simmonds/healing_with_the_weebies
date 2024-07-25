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

    let isImageRevealed = false;
    let isNameRevealed = false;
    let isDescriptionRevealed = false;

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

        // Reveal image first
        if (!isImageRevealed) {
            cardImage.style.opacity = 1;
            isImageRevealed = true;
            setTimeout(() => {
                // Reveal name after image
                cardName.style.opacity = 1;
                isNameRevealed = true;
                setTimeout(() => {
                    // Reveal description after name
                    cardDescription.style.opacity = 1;
                    isDescriptionRevealed = true;
                }, 1000); // Adjust delay as needed
            }, 1000); // Adjust delay as needed
        } else {
            // Reset the reveal states and perform the reveal again
            isImageRevealed = false;
            isNameRevealed = false;
            isDescriptionRevealed = false;
        }
    });
});
