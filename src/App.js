
import {useState} from 'react';
import {useEffect} from 'react';
 import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/searchbox.component';
import './App.css';

//Making changes fro here

const App = () => {

  const [searchfield,setsearchfield] = useState('');
  const [robots , setrobots] = useState([]);

useEffect( () => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => setrobots(users));

} , [] );


const filteredrobots = robots.filter((robo) => {
  return robo.name.toLocaleLowerCase().includes(searchfield); })

  const onSearchChange = (event) => {
 const searchfieldstring = event.target.value.toLocaleLowerCase();
setsearchfield(searchfieldstring);
 }
  return (
    <div className="App">
    <h1 className = "app-title">ROBO ROLODEX</h1>
 <SearchBox className = {"Search-box"} placeholder = {"Search Robots"} onchangehandler = {onSearchChange} />

   < CardList robots = {filteredrobots}/>

  <p>@tusharganotra</p>

    </div>
  )
};

// {class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       Robots : [],
//       searchfield  : ''
// };
// };
//
// componentDidMount(){
//
// }
//
//
//
//   render() {
//
//
//     return (
//       <div className="App">
//       <h1 className = "app-title">ROBO ROLODEX</h1>
// <SearchBox className = {"Search-box"} placeholder = {"Search Robots"} onchangehandler = {this.onSearchChange} />
//
//       < CardList robots = {filteredrobots}/>
//     <p>@tusharganotra</p>
//
//       </div>
//     );
//   };
//
// }
// }

export default App;
