document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        { 
            name: 'Balance', 
            image: 'images/balance.png', 
            description: 'Balance represents the equilibrium between opposing forces. It signifies the importance of finding a harmonious middle ground in all aspects of life. Whether it\'s work and play, rest and activity, or giving and receiving, balance ensures that all elements coexist peacefully. This card encourages you to seek stability and avoid extremes.',
            affirmation: 'I find harmony and balance in all aspects of my life.'
        },
        { 
            name: 'Harmony', 
            image: 'images/harmony.png', 
            description: 'Harmony symbolizes the blending of diverse elements to create a pleasing and cohesive whole. It speaks to the beauty of unity and cooperation, whether in relationships, work, or personal endeavors. This card reminds you to cultivate peaceful interactions and appreciate the symphony created when different parts come together in perfect accord.',
            affirmation: 'I create harmony and peace in my relationships.'
        },
        { 
            name: 'Courage', 
            image: 'images/courage.png', 
            description: 'Courage is the strength to face fears and overcome obstacles, even when the outcome is uncertain. It represents the inner fortitude required to take risks and stand up for what you believe in. This card encourages you to embrace bravery in your challenges and forge ahead with confidence.',
            affirmation: 'I have the courage to face my fears and move forward confidently.'
        }
    ];

    const revealButton = document.getElementById('revealButton');
    const card = document.getElementById('card');
    const cardImage = document.getElementById('cardImage');
    const cardName = document.getElementById('cardName');
    const cardDescription = document.getElementById('cardDescription');
    const cardAffirmation = document.getElementById('cardAffirmation');
    const affirmationContainer = document.getElementById('affirmationContainer');

    // Fade-in effect for the button on page load
    setTimeout(() => {
        revealButton.classList.add('fade-in');
    }, 500); // Adjust delay as needed

    revealButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const selectedCard = cards[randomIndex];

        // Update the card content
        cardImage.src = selectedCard.image;
        cardName.textContent = selectedCard.name;
        cardDescription.textContent = selectedCard.description;
        cardAffirmation.textContent = selectedCard.affirmation;

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
        affirmationContainer.style.opacity = 0; // Set initial opacity of affirmation container

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
                            setTimeout(() => {
                                affirmationContainer.style.opacity = 1; // Fade in the affirmation container
                            }, 20000); // Delay before showing the affirmation
                        }, 1000); // Adjust delay as needed
                    }, 20000); // Adjust delay as needed
                }, 1500); // Adjust delay as needed
            }, 500); // Small delay to ensure the display property is set before changing opacity
        }, 500); // Small delay to ensure the button is hidden first
    });
});
