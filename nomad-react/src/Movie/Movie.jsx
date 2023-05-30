import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Movie({ coverImg, id, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}` }>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...f` : summary}</p>
      <ul>
        {genres.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
  </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes
  .arrayOf(PropTypes.string).isRequired,
};