import styles from "./Form.module.css";
import { useState } from "react";

const UserForms = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      age.trim().length === 0 ||
      contact.trim().length === 0 ||
      address.trim().length === 0
    ) {
      setError("Please fill all details");
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          age: age,
          contact: contact,
          address: address,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }

    setName("");
    setAge("");
    setContact("");
    setAddress("");
    setSuccess("Sent to Backend Successfully");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.divi}>
          <label>Enter your name:</label>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.divi}>
          <label>Enter your age:</label>
          <input
            type="number"
            className={styles.input}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className={styles.divi}>
          <label>Enter your Contact:</label>
          <input
            type="text"
            className={styles.input}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className={styles.divi}>
          <label>Enter your Address:</label>
          <input
            type="text"
            className={styles.input}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.divi}>
          <button className={styles.btn}>Submit</button>
        </div>
      </form>
      <div>{error}</div>
      <div>{success}</div>
    </div>
  );
};

export default UserForms;
