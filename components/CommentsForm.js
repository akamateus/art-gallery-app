import styled from "styled-components";

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 60%;
`;


const Button = styled.button`
  background-color: grey;
  border-radius: 1rem;
  border: 1px solid black;

`;

export default function CommentForm({ addComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    addComment(comment.value);
    event.target.reset();
  }
  return (
    <Form onSubmit={handleSubmit} aria-label="add comments about art piece">
      <label htmlFor="comment">Add comment:</label>
      <textarea type="text" id="comment" name="comment" rows="3" required />
      <Button type="submit">Send</Button>
    </Form>
  );
}
