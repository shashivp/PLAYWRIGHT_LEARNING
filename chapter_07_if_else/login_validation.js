//Login validation using username/password


username = false;

password = true;


if (username === true && password === true) {
    console.log("logged in successfully");
}

else if (username !== true || password !== true) {
    console.log("Cannot loigin with Invalid creds");
}

