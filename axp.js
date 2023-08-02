console.log("Hello world!");


async function getUsers() {
    const res = await axios.get('http://hack-or-snooze-v3.herokuapp.com/users');
    console.log(res);
}

async function signUp(username, password, name) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: {name, username, password } })
    console.log(res);
}
// getUsers();

signUp('ilovebagels', 'jhhg38724', 'death machine')