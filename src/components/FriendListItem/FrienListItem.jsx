import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li className={styles.list_item}>
        <img src={avatar} alt="Friend avatar" width="70" />
        <p className={styles.name_friend}>{name}</p>
        <p
          className={clsx(
            styles.status,
            isOnline ? styles.online : styles.offline
          )}
        >
          {isOnline ? "Online" : "Offline"}
        </p>
      </li>
    </>
  );
};

export default FriendListItem;
