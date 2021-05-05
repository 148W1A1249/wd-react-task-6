import React, { useState } from 'react';

let UserContext = React.createContext();

export default UserContext;

// this will provide a data to all its children
export const UserProvider =({children})=>{
    let [userList,setUserList] = useState([]);
    return <UserContext.Provider value={{userList,setUserList}}>
        {children}
    </UserContext.Provider>
}