import React from "react";
import StarIcon from "@mui/icons-material/Star";

const reviewers = [
  {
    image: "/assets/person1.png",
    name: "Martin Kinyua",
    noOfStars: 3,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    image: "/assets/person2.png",
    name: "Laxix K",
    noOfStars: 4,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    image: "/assets/person4.png",
    name: "Nelly",
    noOfStars: 5,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    image: "/assets/person5.png",
    name: "Kush",
    noOfStars: 3,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const Review = ({ image, name, reviewText, noOfStars }) => {
  return (
    <div>
      <div className="reviewer-container">
        <div className="reviewer-top-container">
          <div className="reviewer-image-rating-container">
            <div className="reviewer-star-number-container">
              <div className="star-container">
                {Array(noOfStars)
                  .fill(true)
                  .map((_, i) => (
                    <StarIcon key={i} className="star" />
                  ))}
              </div>
              <div className="bold">{noOfStars}</div>
            </div>
            <div className="reviewer-image-container">
              <img src={image} width="" height="" alt={name} />
            </div>
          </div>
          <div className="bold">{name}</div>
        </div>
        <div className="reviewer-bottom-container">
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default function Testmonials() {
  return (
    <section>
      <div className="testmonials-section-container">
        <div className="testimonials-header">
          <p className="title">Testimonials</p>
        </div>
        <div className="reviews-container">
          {reviewers.map((item, index) => (
            <Review key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
