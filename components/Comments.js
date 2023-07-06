


export default function Comments({ comments }) {
  return (
    <section>
      <h3>Comments</h3>
      <li role="list">
        {comments.map((comment, slug) => (
          <li key={slug}>
            <p>
              <q>{comment}</q>
            </p>
          </li>
        ))}
      </li>
    </section>
  );
}
