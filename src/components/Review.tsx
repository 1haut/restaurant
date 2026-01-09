type reviewProps = {
  content: string;
  name: string;
};

export default function Review({ content, name }: reviewProps) {
  return (
    <article className="review-container">
      <blockquote>{content}</blockquote>
      <p className="review-name">- {name}</p>
    </article>
  );
}
