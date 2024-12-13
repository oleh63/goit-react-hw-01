import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_profile}>
        <img src={image} alt="User avatar" width={250} />
        <p className={styles.user_name}>{name}</p>
        <p className={styles.info_user}>@{tag}</p>
        <p className={styles.info_user}>{location}</p>
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <span className={styles.span_profile}>Followers</span>
          <span className={styles.span_info}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.span_profile}>Views</span>
          <span className={styles.span_info}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.span_profile}>Likes</span>
          <span className={styles.span_info}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
