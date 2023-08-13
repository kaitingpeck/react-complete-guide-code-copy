import Concept from "./Concept";

const Concepts = (props) => {
  return (
    <div>
      <ul id={props.id}>
        {props.items.map((item) => (
          <Concept
            image={item.image}
            altText={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default Concepts;
