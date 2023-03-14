
// async function hello() {

// }

const sing = async () => {
    throw "Oh No, Error!"
    return "LA LA LA LA"
}

sing()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecurte') return 'WELCOME!'
    throw 'Invalid Password'
}

login('sldkj', 'corgifeetarecurte')
    .then(msg => {
        console.log("LOGED IN!");
        console.log(msg);
    })
    .catch(err => {
        console.log("ERROR!");
        console.log(err);
    })

// 얘를 async로 어떻게 바꾸지?
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
}

rainbow().then(() => console.log("END OF RAINBOW!"))