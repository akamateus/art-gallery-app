import styled from "styled-components";




export default function Comments({ comments }) {
  return (
    <section>
      <h3>Comments</h3>
      <li role="list">
        {comments.map((comment, index) => (
          <li key={index}>
            <p>
              <q>{comment}</q>
            </p>
          </li>
        ))}
      </li>
    </section>
  );
}
