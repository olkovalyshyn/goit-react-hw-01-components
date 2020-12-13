import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">Upload stats</h2>}
      <div className={styles.infoBlock}>
        {stats.map(stat => (
          <ul key={stat.id} className={styles.statList}>
            <li className={styles.item}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
