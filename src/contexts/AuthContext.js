import React, { useContext, useState, useEffect } from "react";
import { Auth,Hub } from 'aws-amplify';
// eslint-disable-next-line

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line

  async function signup(username, password, name, vname) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email: "",          // optional
                phone_number: username,   // optional - E.164 number convention
                name: name,
                picture: "",
                preferred_username: vname,
                // other custom attributes
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });
        await setCurrentUser(user);
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

async function resendConfirmationCode(username) {
    try {
        await Auth.resendSignUp(username);
        
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}

async function confirmSignUp(username, code) {
    try {
        return await Auth.confirmSignUp(username, code, { forceAliasCreation: false });
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

async function login(email, password) {
    try {
        const user = await Auth.signIn(email, password);
        setCurrentUser(user)
        return {
            status: true,
            data: user
        }
    } catch (e) {
        console.log(e)
        return {
            status: false,
            error: e.message,
        }
    }
}

function logout() {
    Auth.signOut({ global: true });
}

async function resetPassword(email) {
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

async function getDetails(){
  return await Auth.currentAuthenticatedUser()
}

useEffect(() => {
  Hub.listen('auth', async ({ payload }) => {
    await setLoading(true)
    const { event } = payload;
    if (event === 'autoSignIn') {
        const user = payload.data;
        console.log(user)
        await setCurrentUser(user);
        let details = await getDetails()
        console.log("User : ", details)
        await setUserDetails(details)
        // assign user
    } else if (event === 'autoSignIn_failure') {
        // redirect to sign in page
        console.log("failed")
        await setCurrentUser(null);
    }
    await setLoading(false)
  })
  setLoading(false)
}, [])

  const value = {
    currentUser,
    userDetails,
    signup,
    resendConfirmationCode,
    confirmSignUp,
    login,
    logout,
    resetPassword
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}