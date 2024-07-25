document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        { 
            name: 'Balance', 
            image: 'images/balance.png', 
            description: 'Balance represents the equilibrium between opposing forces. It signifies the importance of finding a harmonious middle ground in all aspects of life. Whether it\'s work and play, rest and activity, or giving and receiving, balance ensures that all elements coexist peacefully. This card encourages you to seek stability and avoid extremes.' 
        },
        { 
            name: 'Harmony', 
            image: 'images/harmony.png', 
            description: 'Harmony symbolizes the blending of diverse elements to create a pleasing and cohesive whole. It speaks to the beauty of unity and cooperation, whether in relationships, work, or personal endeavors. This card reminds you to cultivate peaceful interactions and appreciate the symphony created when different parts come together in perfect accord.' 
        },
        { 
            name: 'Courage', 
            image: 'images/courage.png', 
            description: 'Courage is the strength to face fears and overcome obstacles, even when the outcome is uncertain. It represents the inner fortitude required to take risks and stand up for what you believe in. This card encourages you to embrace bravery in your challenges and forge ahead with confidence.' 
        }
        // Add more cards here as needed
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

        // Hide the card content and update it after the previous content has been hidden
        setTimeout(() => {
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
                    }, 1500); // Adjust delay as needed
                }, 1500); // Adjust delay as needed
            }, 100); // Small delay to ensure the image starts to show
        }, 1000); // Delay to ensure the previous content has been hidden
    });
});
