export const infoEmojiConfig = (value: string | undefined) => {
    switch (value) {
        case 'Alive':
            return '💚';
        case 'Dead':
            return '💀';
        case 'Human':
            return '👱‍♂️';
        case 'Alien':
            return '👽';
        case 'Humanoid':
            return '🧞‍♂️';
        case 'Robot':
            return '🤖';
        case 'Animal':
            return '🐾';
        case 'Male':
            return '🙋🏻‍♂️';
        case 'Female':
            return '🙋🏻‍♀️';
        default:
            return '❔';
    }
};