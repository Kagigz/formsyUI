import React from 'react';
import PropTypes from 'prop-types';

class TypeField extends React.Component{

  constructor(props) {    
    super(props);

    this.state = {
      typeValue: props.type,
    };

    this.options = [
      {"value":"ORG", "name":"Company/Institution"},
      {"value":"GPE", "name":"Country/City/State"},
      {"value":"MONEY", "name":"Currency Value"},
      {"value":"PERSON", "name":"Person"},
      {"value":"DATE", "name":"Date"},
      {"value":"PRODUCT", "name":"Product"},
      {"value":"QUANTITY", "name":"Quantity"},
      {"value":"MASK", "name":"Format Mask"}
    ]
     
  }

    handleChange = (event) => {
      this.setState({ typeValue: event.target.value });
      console.log("Change Type");

    }

    componentWillMount(){
     
    }

    render(){
        const options = Object
        .keys(this.options)
        .map(key => <option key={key} value={this.options[key].value}>{this.options[key].name}</option>);
        return (
        <div className="form-group">
            <select name="typeSelect" className="form-control" value={this.state.typeValue || ""} onChange={this.handleChange}>
              {options}
            </select>
          </div>
        )
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
    };
}

export default TypeField;