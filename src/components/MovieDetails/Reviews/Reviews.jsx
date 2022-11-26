import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviewsById } from '../../../services/API';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviewsById(id).then(response => setReviews(response.results));
  }, [id]);

  return (
    <div>
      <ul>
        {reviews.length === 0 ? (
          <li>
            <p>We don`t find reviews for you</p>
          </li>
        ) : (
          reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
