import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile(props) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={props.avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{props.name}</p>
        <p className="tag">{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.activity}>
          <span className="label">Followers</span>
          <span className="quantity">{props.stats.followers}</span>
        </li>
        <li className={styles.activity}>
          <span className="label">Views</span>
          <span className="quantity">{props.stats.views}</span>
        </li>
        <li className={styles.activity}>
          <span className="label">Likes</span>
          <span className="quantity">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
