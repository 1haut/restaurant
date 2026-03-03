import { reviews } from "../../utils/constants";
import Review from "./Review";

export default function ReviewList() {
  return (
    <section className="reviews">
      <h2 className="review-headline">Omtale</h2>
      <div className="reviews-container">
        {reviews.map(review => (
          <Review key={review.id} content={review.content} name={review.name} />
        ))}
      </div>
    </section>
  );
}
