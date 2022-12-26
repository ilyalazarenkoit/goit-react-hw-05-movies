import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'API/api';
import { Reviewer, ReviewItem, ReviewList } from './Reviews.styled';
import { nanoid } from 'nanoid';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetchReviews(filmId);

        if (response.length > 0) {
          setReviews(response);
        }
      } catch (error) {
        alert(error);
      }
    }
    getReviews();
  }, [filmId]);
  return (
    <>
      <h2>Reviewers</h2>
      <ReviewList>
        {reviews.length > 0
          ? reviews.map(reviewer => {
              const { author, content } = reviewer;
              return (
                <ReviewItem key={nanoid()}>
                  <Reviewer>{author}:</Reviewer>
                  <p>{content}</p>
                </ReviewItem>
              );
            })
          : 'No Reviews'}
      </ReviewList>
    </>
  );
};

export default Reviews;
