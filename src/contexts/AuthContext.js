import React, { useContext, useState, useEffect } from "react";
// eslint-disable-next-line

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line

  async function signup(email, password, firstName, lastName, phoneNumber, organization, message) {
    try{

      return {
        status: true,
        data: "res",
        data2: "res2"
      }
    }catch(e){
      console.log(e)
      return {
        status: false,
        error: e.message
      }
    }
    
  }

  async function login(email, password) {
    try{
      
      return {
        status: true,
        data: "res"
      }
    }catch(e){
      console.log(e)
      return {
        status : false,
        error: e.message,
      }
    }
  }

  function logout() {
  }

  async function resetPassword(email) {
    try{
      return {
        status: true,
        data: "res"
      }
    }catch(e){
      console.log(e)
      return {
        status : false,
        error: e.message,
      }
    }
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  async function getUserData(){
  }
  


  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged(async (user) => {
    //   if(user){
    //     setCurrentUser(user);
    //     const data = await getUserDetail(user.uid)
    //     console.log(data)
    //     setUserDetails(data);
    //   }else{
    //     setCurrentUser(null);
    //     setUserDetails(null);
    //   }
    //   setLoading(false);
    // });    

    // return unsubscribe;

  }, []);



  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    userDetails,
    getUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}