import './card-list.styles.css'
import CardConatiner from './card-container/card-container.js'

const CardList = ({robots}) => (
      <div className = "card-list">
      {robots.map((robo) => (

   <CardConatiner robo = {robo} />

      ))}
      </div>

  );



export default CardList;
