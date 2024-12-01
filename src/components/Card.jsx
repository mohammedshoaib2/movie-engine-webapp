function Card({ movieCategory, movieTitle, movieImage, movieYear }) {
  return (
    <div className="Card">
      <div className="movie-info">
        <div className="movie-data">
          <p className="movie-category">{movieCategory.toUpperCase()}</p>
          <p className="movie-year">{movieYear}</p>
        </div>

        <p className="movie-title">{movieTitle}</p>
      </div>
      <img
        src={
          movieImage == "N/A" ? "https://via.placeholder.com/400" : movieImage
        }
        alt={movieTitle}
      />
    </div>
  );
}

export default Card;
