import { reviews } from "../../info";
// import ReviewHeadline from "./main-page/ReviewHeadline";
import Review from "./Review";

export default function Reviews() {
  return (
    <section className="reviews">
      {/* <ReviewHeadline /> */}
      <h2 className="review-headline">Omtale</h2>
      <div className="reviews-container">
        {reviews.map(review => (
          <Review key={review.id} content={review.content} name={review.name} />
        ))}
      </div>
    </section>
  );
}
