import { useNavigate } from "react-router-dom";
import styles from "./Enter.module.css";

const Enter = () => {
  const navigate = useNavigate();
  const userHandler = () => {
    navigate("/users");
  };

  const addHandler = () => {
    navigate("/addUser");
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Welcome to User's Page</p>
      </div>
      <div className={styles.Buttons}>
        <div>
          <button className={styles.btn} onClick={userHandler}>
            User Data
          </button>
        </div>
        <div>
          <button className={styles.btn} onClick={addHandler}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enter;
