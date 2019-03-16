import React from 'react';
import PropTypes from 'prop-types';

class TextField extends React.Component{

  constructor(props) {    
    super(props);

    this.state = {
      value: props.value,
      edit:false
    };
     
  }

    handleClick = () => {
      console.log("Edit name");
      this.setState({edit:true});
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleBlur = () => {
        console.log("Edit name finish");
        this.setState({edit:false});
    }

    render(){
        if(this.state.edit){
            return(
                <span><input className="form-control" value={this.state.value} onChange={this.handleChange} onBlur={this.handleBlur} autoFocus/></span>
            )
        }
        else{
            return(
                <span onDoubleClick={this.handleClick}>{this.state.value}</span>
            )
        }
    }

    static propTypes = {
        value: PropTypes.string.isRequired,
    };
}

export default TextField;