function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
    }


    let user = {
    name: 'John',
    loginOk() {
    alert(`${this.name} logged in`);
    },
    loginFail() {
    alert(`${this.name} failed to log in`);
    },
    };
    // console.log(user.loginOk.call(user),user.loginFail.call(user));

    // console.log(user.loginOk.bind(user),user.loginFail.bind(user));
   askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//    به وسیله متد بایند میتواینم یک فانکشن جدید ایجاد کنیم ک این فانکشن جدید برای ما ریترن میشود