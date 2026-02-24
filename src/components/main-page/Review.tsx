type reviewProps = {
  content: string;
  name: string;
};

export default function Review({ content, name }: reviewProps) {
  return (
    <article className="review">
      <p className="review-quote">{content}</p>
      <p className="review-name">- {name}</p>
    </article>
  );
}
