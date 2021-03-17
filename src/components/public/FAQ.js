const FAQ = (props) => {
  return (
    <div>
      <h3>{props.question}</h3>
      <ul>
        {props.answers.map((answer) => {
          return <li>{answer}</li>;
        })}
      </ul>
    </div>
  );
};

export default FAQ;
