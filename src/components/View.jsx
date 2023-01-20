import "./View.css";

const View = ({ name, author, country, description, image , ingredients , instructions}) => {
  
  
  return (
    <div className="view">
      
      <span class="h2"n>Please check your post</span>
      <p>
        NAMING: <span>{name}</span>
      </p>
      <p>
        COOKING TIME <span>{author}</span>
      </p>
      <p>
        COUNTRY: <span>{country}</span>
      </p>
      <p>
        DESCRIPTION: <span>{description}</span>
      </p>
      <p >
        IMAGE: <span>{image}</span>
      </p>
      <p>
        INSTRUCTIONS: <span>{instructions}</span>
      </p>
    </div>
  );
};

export default View;
