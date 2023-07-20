import styles from "./UserCard.module.css";

const UserCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <div>
        <p>{data.name}</p>
      </div>
      <div>
        <p>{data.age}</p>
      </div>
      <div>
        <p>{data.contact}</p>
      </div>
      <div>
        <p>{data.address}</p>
      </div>
    </div>
  );
};

export default UserCard;
