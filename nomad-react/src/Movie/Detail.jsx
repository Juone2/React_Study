import { useEffect, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const { id } = useParams();

  const getMovies = useCallback(async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const data = response.json();
    setMovies(data.movie);
    setLoading(false);
  }, [id])

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div>
      <h1>Hello React</h1>
    </div>
  )
}
