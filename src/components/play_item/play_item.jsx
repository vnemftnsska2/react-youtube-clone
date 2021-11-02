import React from 'react';
import styles from './play_item.module.css'


const PlayItem = ({ video, video: { snippet }, onClickVideo, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li className={`${styles.container} ${displayType}`} onClick={() => onClickVideo(video)}>
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
    </li >
  );
}

export default PlayItem;