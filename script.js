const thingsToDo = ['Create a bet with someone that only you can win.',
    'Go outside with a friend, get them to drin.k',
    'Have a war with your friends in the middle of cafe.',
    'Do a mini workout.',
    'Make a smoothie or shake.',
    'Actually clean up your room.'];
const dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const partOfTheDay = ['Dawn', 'Morning', 'Noon', 'Afternoon', 'Dusk', 'Evening'];

const randomElement = array => {
    return Math.floor(Math.random() * array.length);
}

const getThingsToDo = () => {
    let thing = thingsToDo[randomElement(thingsToDo)];
    return thing;
};

const getDayOfTheWeek = () => {
    let day = dayOfTheWeek[randomElement(dayOfTheWeek)];
    return day;
}

const getPartOfTheDay = () => {
    let part = partOfTheDay[randomElement(partOfTheDay)];
    return part;
}

console.log(`On ${getDayOfTheWeek()} in the ${getPartOfTheDay()} you will ${getThingsToDo()}`);