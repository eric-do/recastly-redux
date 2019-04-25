import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var SearchContainer = () => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      value={props.value}
      onChange={props.handleSearchInputChange.bind(this)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
