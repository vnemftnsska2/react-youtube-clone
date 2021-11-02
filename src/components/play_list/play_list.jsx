import React from 'react';
import PlayItem from '../play_item/play_item';
import styles from './play_list.module.css'

const PlayList = ({ videos, onClickVideo, display }) => {
  return (
    <ul className={styles.playList}>
      {
        videos
        &&
        videos
          .map(video => <PlayItem
            key={video.id}
            video={video}
            onClickVideo={onClickVideo}
            display={display}
          />)}
    </ul>
  );
};

export default PlayList;