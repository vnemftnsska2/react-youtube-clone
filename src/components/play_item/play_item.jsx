import React from 'react';
import styles from './play_item.module.css'


const PlayItem = ({ video, video: { snippet } }) => {
  // console.log(video);
  return (
    <li className={styles.container}>
      <article className={styles.article}>
        <img
          className={styles.thumbnails}
          src={snippet.thumbnails.medium.url}
          alt="Youtube Video Thum"
        />
        <div className={styles.info}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}># {snippet.channelTitle}</p>
        </div>
      </article>
    </li>
  );
}

export default PlayItem;