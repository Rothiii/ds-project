/* eslint-disable react/prop-types */
function News({ imgSrc, title, description, href }) {
  return (
    <div className="news-container">
      <div className="image-container">
        <img src={imgSrc} alt="News Image" />
      </div>
      <div className="content-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href}>More about</a>
      </div>
    </div>
  );
}

export default News;
