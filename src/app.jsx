import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import PlayList from './components/play_list/play_list';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => { // 값 변경 시 에만 Render 되도록 해주는 Hooks
    youtube
      .getMostPopularList()
      .then(items => setVideos(items));
  }, [youtube]);


  return (
    <div className={styles.app}>
      <Header />
      <PlayList videos={videos} />
    </div>
  );
}

export default App;
