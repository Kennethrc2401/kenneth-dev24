import React from 'react';
import styles from './AnimatedCard.module.css';

interface AnimatedCardProps {
  title: string;
  description: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AnimatedCard;
