// app.tsx

import React, { useState } from 'react';
import { UserData, UserCard } from "./user";

function App() {
  const [userData, setUserData] = useState<UserData>({
    userid: "macorov",
    password: "12345",
    email: "macorov@gmail.com",
    address: "City, Country",
    nid: 12345,
    user_type: "admin",
  });

  return (
    <UserCard userData={userData} setUserData={setUserData} />
  );
}

export default App;
