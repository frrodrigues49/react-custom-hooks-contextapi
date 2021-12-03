import { useState } from "react";

export default function useUserProvider() {
  const [usersData, setUsersData] = useState({
    name: "Fagner",
    age: 40,
    country: "Brasil",
  });
  return { usersData, setUsersData };
}
