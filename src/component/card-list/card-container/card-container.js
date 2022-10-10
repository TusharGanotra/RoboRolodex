
import './card-container.styles.css'

const CardContainer = ({robo}) => (
      <div className = "card-container" key = {robo.id}>
      <img alt = {`Robot ${robo.name}`} src={`https://robohash.org/${robo.id+5}?set=set1&size=180x180`} />
      <h2>{robo.name}</h2>
      <p>{robo.email}</p>
      </div>

  );


export default CardContainer;
