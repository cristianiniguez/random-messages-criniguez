const messages = [
    'Cristian',
    'Mary',
    'Dario',
    'Felix',
    'Nicol',
    'Melani',
    'Carlos',
    'Jessica'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };