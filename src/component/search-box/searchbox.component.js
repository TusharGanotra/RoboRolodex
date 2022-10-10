
import './searchbox.styles.css';
const SearchBox = ( {className , placeholder ,onchangehandler} ) => (
  <input type = "search" className = {`search-box ${className}`} placeholder = {placeholder} onChange = {onchangehandler} />
);
export default SearchBox;
