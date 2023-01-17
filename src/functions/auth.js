import { Auth, Hub } from 'aws-amplify';

export async function signup(username, password, name, phone, vname) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email: username,          // optional
                phone_number: phone,   // optional - E.164 number convention
                name: name,
                picture: "",
                preferred_username: vname,
                // other custom attributes 
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });

        await resendConfirmationCode(username)
        console.log(user);
        return {
            status: true,
            data: user,
        }
    } catch (e) {
        console.log(e)
        return {
            status: false,
            error: e.message
        }
    }

}

export async function resendConfirmationCode(username) {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}

export async function confirmSignUp(username, code) {
    try {
        await Auth.confirmSignUp(username, code, { forceAliasCreation: false });
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

export async function login(email, password) {
    try {
        const user = await Auth.signIn(email, password);
        return {
            status: true,
            data: "res"
        }
    } catch (e) {
        console.log(e)
        return {
            status: false,
            error: e.message,
        }
    }
}

export function logout() {
    Auth.signOut({ global: true });
}

export async function resetPassword(email) {
    try {
        Auth.forgotPassword(email)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        return {
            status: true,
            data: "res"
        }
    } catch (e) {
        console.log(e)
        return {
            status: false,
            error: e.message,
        }
    }
}