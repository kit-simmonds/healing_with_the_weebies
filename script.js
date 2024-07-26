document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        { 
            name: 'Balance', 
            image: 'images/balance.png', 
            description: 'Balance represents the equilibrium between opposing forces. It signifies the importance of finding a harmonious middle ground in all aspects of life. Whether it\'s work and play, rest and activity, or giving and receiving, balance ensures that all elements coexist peacefully. This card encourages you to seek stability and avoid extremes.',
            affirmation: '\"I find harmony and balance in all aspects of my life.\"'
        },
        { 
            name: 'Harmony', 
            image: 'images/harmony.png', 
            description: 'Harmony symbolizes the blending of diverse elements to create a pleasing and cohesive whole. It speaks to the beauty of unity and cooperation, whether in relationships, work, or personal endeavors. This card reminds you to cultivate peaceful interactions and appreciate the symphony created when different parts come together in perfect accord.',
            affirmation: '\"I create harmony and peace in my relationships.\"'
        },
        { 
            name: 'Courage', 
            image: 'images/courage.png', 
            description: 'Courage is the strength to face fears and overcome obstacles, even when the outcome is uncertain. It represents the inner fortitude required to take risks and stand up for what you believe in. This card encourages you to embrace bravery in your challenges and forge ahead with confidence.',
            affirmation: '\"I have the courage to face my fears and move forward confidently.\"'
        }
        // { 
        //     name: 'Gratitude', 
        //     image: 'images/gratitude.png', 
        //     description: 'Gratitude is the appreciation for the good things in life, both big and small. It encourages a positive mindset and fosters a sense of contentment. This card reminds you to recognize and cherish the blessings around you, cultivating an attitude of thankfulness.',
        //     affirmation: '\"I am grateful for all the blessings in my life.\"'
        // },
        // { 
        //     name: 'Wisdom', 
        //     image: 'images/wisdom.png', 
        //     description: 'Wisdom is the deep understanding and insight gained from life experiences. It represents the ability to make sound decisions and offer guidance to others. This card encourages you to seek knowledge, reflect on past lessons, and apply them to current situations.',
        //     affirmation: '\"I trust my inner wisdom and make wise decisions.\"'
        // },
        // { 
        //     name: 'Compassion', 
        //     image: 'images/compassion.png', 
        //     description: 'Compassion is the empathetic concern for the suffering of others and the desire to alleviate it. It embodies kindness, understanding, and a willingness to help. This card encourages you to show empathy and kindness to others and to yourself.',
        //     affirmation: '\"I am compassionate and understanding towards others and myself.\"'
        // },
        // { 
        //     name: 'Patience', 
        //     image: 'images/patience.png', 
        //     description: 'Patience is the ability to endure difficulties and delays with a calm and tolerant attitude. It signifies perseverance and the understanding that some things take time. This card encourages you to remain patient and trust that everything will unfold in its own time.',
        //     affirmation: '\"I am patient and trust the timing of my life.\"'
        // },
        // { 
        //     name: 'Joy', 
        //     image: 'images/joy.png', 
        //     description: 'Joy is the feeling of great pleasure and happiness. It represents the ability to find delight in the simple things and to spread positivity. This card encourages you to embrace joy in your daily life and to share your happiness with others.',
        //     affirmation: '\"I embrace joy and spread happiness to those around me.\"'
        // },
        // { 
        //     name: 'Strength', 
        //     image: 'images/strength.png', 
        //     description: 'Strength is the inner power to withstand challenges and overcome obstacles. It signifies resilience and determination. This card encourages you to recognize your inner strength and to use it to face life’s challenges head-on.',
        //     affirmation: '\"I am strong and resilient in the face of challenges.\"'
        // },
        // { 
        //     name: 'Peace', 
        //     image: 'images/peace.png', 
        //     description: 'Peace is the state of tranquility and calmness. It represents the absence of conflict and the presence of inner harmony. This card encourages you to seek peace within yourself and to foster peaceful relationships with others.',
        //     affirmation: '\"I cultivate peace within myself and in my relationships.\"'
        // }
    ];
    
    const revealButton = document.getElementById('revealButton');
    const card = document.getElementById('card');
    const cardImage = document.getElementById('cardImage');
    const cardName = document.getElementById('cardName');
    const cardDescription = document.getElementById('cardDescription');
    const cardAffirmation = document.getElementById('cardAffirmation');
    const affirmationContainer = document.getElementById('affirmationContainer');

    // Function to reveal affirmation letter by letter
    function revealAffirmation(affirmation) {
        let index = 0;
        cardAffirmation.textContent = '';
        const interval = setInterval(() => {
            cardAffirmation.textContent += affirmation[index];
            index++;
            if (index === affirmation.length) {
                clearInterval(interval);
            }
        }, 100); // Adjust speed of letter reveal here
    }

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
        cardAffirmation.textContent = ''; // Clear previous affirmation text

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
        affirmationContainer.style.opacity = 1; // Ensure container is visible

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
                                revealAffirmation(selectedCard.affirmation); // Reveal affirmation letter by letter
                            }, 15000); // Delay before showing the affirmation
                        }, 1500); // Delay before showing the description
                    }, 18000); // Delay before flipping the card
                }, 1500); // Delay before showing the name
            }, 500); // Small delay to ensure the display property is set before changing opacity
        }, 500); // Small delay to ensure the button is hidden first
    });
});
