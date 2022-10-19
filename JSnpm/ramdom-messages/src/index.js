const messages = [
    'Oscar',
    'Ana',
    'Pedro',
    'Daniela',
    'Junior',
    'Dayana',
    'Juan'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()* messages.length)];
    console.log(message);
}

module.exports = {randomMsg };
