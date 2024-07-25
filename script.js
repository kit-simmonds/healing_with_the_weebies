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
    ];

    const revealButton = document.getElementById('revealButton');
    const card = document.getElementById('card');
    const cardImage = document.getElementById('cardImage');
    const cardName = document.getElementById('cardName');
    const cardDescription = document.getElementById('cardDescription');

    revealButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const selectedCard = cards[randomIndex];

        // Update the card content
        cardImage.src = selectedCard.image;
        cardName.textContent = selectedCard.name;
        cardDescription.textContent = selectedCard.description;

        // Adjust font size to fit the description
        let fontSize = 18;
        cardDescription.style.fontSize = `${fontSize}px`;
        cardDescription.style.opacity = 1;

        while (cardDescription.scrollHeight > cardDescription.clientHeight && fontSize > 10) {
            fontSize--;
            cardDescription.style.fontSize = `${fontSize}px`;
        }

        // Hide the button and reveal the card front
        revealButton.style.opacity = 0;
        cardImage.style.opacity = 0;
        cardName.style.opacity = 0;
        cardDescription.style.opacity = 0;

        setTimeout(() => {
            revealButton.style.display = 'none'; // Hide the button
            cardImage.style.display = 'block'; // Show the image
            setTimeout(() => {
                cardImage.style.opacity = 1; // Fade in the image
                setTimeout(() => {
                    cardName.style.opacity = 1; // Fade in the name
                    setTimeout(() => {
                        card.classList.add('flipped'); // Flip the card to reveal the description
                        setTimeout(() => {
                            cardDescription.style.opacity = 1; // Fade in the description
                        }, 1000); // Adjust delay as needed
                    }, 1000); // Adjust delay as needed
                }, 1000); // Adjust delay as needed
            }, 100); // Small delay to ensure the display property is set before changing opacity
        }, 500); // Small delay to ensure the button is hidden first
    });
});
