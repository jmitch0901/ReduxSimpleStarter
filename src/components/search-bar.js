import React, { Component } from 'react';


/*
  EVER class-based component has it's own STATE.
  When the STATE changes within the class,
  the RENDER method is re-ran. This re-renders this component, along with
  all of it's children.

  Functional components do NOT have state!
*/
export default class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term:'' }; //<- 'term' can be called something else; Customizable.
  }

  _onInputChanged(term){

    this.setState({ term });
    this.props.onSearchTermChanged(term);
  }

  render(){

    //This component essentially is 2-way data binding.
    return (
      <div className="search-bar">
        <input
        onChange={ event => this._onInputChanged(event.target.value )}//->Tells the STATE that it needs to update.
        value={this.state.term} //-> forces this to become a CONTROLLED COMPONENT. ONLY changes when state changes.
        />
      </div>
    );
  }



};
