import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="User avatar" width={250} />
        <p className={styles.info_user}>{name}</p>
        <p className={styles.info_user}>@{tag}</p>
        <p className={styles.info_user}>{location}</p>
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
