import React from 'react';
import styles from './play_detail.module.css'

const PlayDetail = ({ video, video: { snippet } }) => {
  return (
    <section>
      <iframe
        width="100%"
        height="600px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
      ></iframe>
      <h1 className={styles.title}>{snippet.title}</h1>
      <div className={styles.channelBox}>
        <img
          className={styles.avatar}
          src="images/avatar.png"
          width="60"
          height="60"
        />
        <div className={styles.channel}>{snippet.channelTitle}</div>
      </div>
      <pre className={styles.description}>{snippet.description}</pre>
    </section >
  );
};

export default PlayDetail;