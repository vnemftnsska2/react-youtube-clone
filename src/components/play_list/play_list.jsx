import React from 'react';
import PlayItem from '../play_item/play_item';
import styles from './play_list.module.css'

const PlayList = ({ videos }) => {
  return (
    <ul className={styles.playList}>
      {videos && videos.map(video => <PlayItem key={video.id} video={video} />)}
    </ul>
  );
};

export default PlayList;