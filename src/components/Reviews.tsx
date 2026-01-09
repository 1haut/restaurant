import Review from "./Review";
import ReviewHeadline from "./ReviewHeadline";
import { reviews } from "../info";

export default function Reviews() {
  return (
    <section className="reviews">
      <ReviewHeadline />
      <div className="reviews-container">
        {reviews.map(review => (
          <Review key={review.id} content={review.content} name={review.name} />
        ))}
      </div>
    </section>
  );
}
