class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
  }

  //베스트 인기 영상 20
  getMostPopularList() {
    return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=60&key=${this.key}`,
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => result.items);
  }

  //검색 영상 20
  getSearchList(keyword) {
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&q=${keyword}&key=${this.key}`,
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => result.items);
  }

}

export default Youtube;