import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  var hello = "hello world"; // stored hello world in the variable hello
  return (
    <div className="container">
      <h1>{hello}</h1>
    </div>
  );
};

export default ExploreContainer;
