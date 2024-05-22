import './News.css'

const News = ({newsContent}) => {
  const Article1 = newsContent[0];
  const Article2 = newsContent[1];
  const Article3 = newsContent[2];
  const Article4 = newsContent[3];
  return (
    <div className='News-container'>
      <div  className="left">
        <img src={Article1.urlToImage} alt="image" />
      <div className="text-small">{Article1.author}</div>
      <div className="text-large">{Article1.title}</div>
      </div>
      <div className="right">
        <div className="top">
          <div className="topLeft">
          <img src={Article2.urlToImage} alt="image" />
          
      <div className="text-small bottom-13vh">{Article2.author}</div>
      <div className="text-large font-3vh">{Article2.title}</div>
          </div>
          <div className="topRight">
          <img src={Article3.urlToImage} alt="image" />
      <div className="text-small bottom-13vh">{Article3.author}</div>
      <div className="text-large font-3vh">{Article3.title}</div>
          </div>
        </div>
        <div className="bottom">
        <img src={Article4.urlToImage} alt="image" />
      <div className="text-small bottom-6vh ">{Article4.author} </div>
      <div className="text-large font-3vh">{Article4.title}</div>
        </div>
      </div>
    </div>
  )
}

export default News