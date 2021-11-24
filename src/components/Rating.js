import ReactStars from "react-rating-stars-component";
import React from "react";

function Rating({ setRating }) {
  const RatingChanged = (newRating) => {
  setRating (newRating);
  };

  return (
    <ReactStars
      count={5}
      onChange={RatingChanged}
      size={24}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
}
export default Rating;
