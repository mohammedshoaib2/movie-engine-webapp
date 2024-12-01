async function getMovieData(title, setMovieData) {
  const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=a380b4a5`;
  try {
    let resopnse = await fetch(`${API_URL}&s=${title}`);
    let data = await resopnse.json();
    setMovieData(data["Search"]);
  } catch (e) {
    setMovieData([]);
  }
}

export default getMovieData;
