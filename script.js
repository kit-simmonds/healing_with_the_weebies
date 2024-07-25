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
        // },
        // { 
        //     name: 'Wisdom', 
        //     image: 'images/wisdom.png', 
        //     description: 'Wisdom is the ability to make sound decisions based on knowledge and experience. It signifies a deep understanding and insight gained over time. This card invites you to reflect on your experiences and use your accumulated wisdom to guide your actions and decisions.' 
        // },
        // { 
        //     name: 'Creativity', 
        //     image: 'images/creativity.png', 
        //     description: 'Creativity is the power to generate original ideas and solutions. It represents innovation and the ability to think outside the box. This card inspires you to embrace your imaginative side and explore new possibilities in your projects and endeavors.' 
        // },
        // { 
        //     name: 'Serenity', 
        //     image: 'images/serenity.png', 
        //     description: 'Serenity signifies a state of calm and tranquility, even in the midst of chaos. It represents inner peace and the ability to remain composed. This card encourages you to seek moments of stillness and cultivate a serene mindset amidst life’s challenges.' 
        // },
        // { 
        //     name: 'Gratitude', 
        //     image: 'images/gratitude.png', 
        //     description: 'Gratitude is the recognition and appreciation of the positive aspects of life. It signifies thankfulness and the ability to see the good in every situation. This card prompts you to focus on what you are thankful for and to express appreciation for the blessings in your life.' 
        // },
        // { 
        //     name: 'Adventure', 
        //     image: 'images/adventure.png', 
        //     description: 'Adventure represents the spirit of exploration and the thrill of discovering new horizons. It signifies a willingness to step out of your comfort zone and embrace new experiences. This card encourages you to take bold steps and embark on new journeys with enthusiasm.' 
        // },
        // { 
        //     name: 'Healing', 
        //     image: 'images/healing.png', 
        //     description: 'Healing is the process of restoring health and well-being, both physically and emotionally. It represents recovery and renewal. This card invites you to focus on self-care, nurture yourself, and allow time for healing in your life.' 
        // },
        // { 
        //     name: 'Empathy', 
        //     image: 'images/empathy.png', 
        //     description: 'Empathy is the ability to understand and share the feelings of others. It signifies compassion and emotional connection. This card encourages you to practice empathy in your interactions, listen deeply, and offer support to those around you.' 
        // },
        // { 
        //     name: 'Transformation', 
        //     image: 'images/transformation.png', 
        //     description: 'Transformation represents significant change and growth. It signifies the process of evolving and adapting to new circumstances. This card prompts you to embrace change and view it as an opportunity for personal development and renewal.' 
        // },
        // { 
        //     name: 'Joy', 
        //     image: 'images/joy.png', 
        //     description: 'Joy is a profound sense of happiness and delight. It represents moments of pure pleasure and satisfaction. This card encourages you to seek out and celebrate the joyful experiences in your life, and to spread positivity to others.' 
        }
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
                }, 1500); // Adjust delay as needed
            }, 1500); // Adjust delay as needed
        }, 500); // Small delay to ensure the image starts to show
    });
});
