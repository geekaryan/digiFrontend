import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import styles from "./Users.module.css";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const apiFetchHandler = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUserData(data.data.users);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    apiFetchHandler();
  }, []);

  console.log(userData);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>User Data</p>
      </div>

      {loading && (
        <div style={{ textAlign: "center", fontSize: "45px" }}>
          <p>Loading....</p>
        </div>
      )}

      {userData.map((data) => (
        <UserCard key={data._id} data={data} />
      ))}
    </div>
  );
};

export default Users;
