import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import PlayDetail from './components/play_detail/play_detail';
import PlayList from './components/play_list/play_list';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearch = useCallback((keyword) => {
    youtube
      .getSearchList(keyword)
      .then(items => {
        setSelectedVideo(null);
        setVideos(items.map(item => {
          item.id = item.id.videoId;
          return item;
        }));
      });
  }, [youtube]);

  const onClickVideo = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => { // 값 변경 시 에만 Render 되도록 해주는 Hooks
    youtube
      .getMostPopularList()
      .then(items => setVideos(items));
  }, [youtube]);


  return (
    <div className={styles.app}>
      <Header onSearch={onSearch} />
      <secition className={styles.contents}>
        {
          selectedVideo && (
            <div className={styles.detail}>
              <PlayDetail video={selectedVideo} />
            </div>
          )
        }
        <div className={styles.list}>
          <PlayList
            videos={videos}
            onClickVideo={onClickVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </secition>
    </div>
  );
}

export default App;
