import React from 'react';
import PropTypes from 'prop-types';

class Synonym extends React.Component{

    constructor(props) {    
        super(props);
    
        this.state = {
          value: props.synonym.name,
          edit:false
        };
         
      }

    componentWillMount(){
        if(this.props.edit)
            this.state.edit = this.props.edit;
    }
    
    deleteSynonym = () => {
        console.log("Delete Synonym");
    }

    handleClick = (event) => {
        event.stopPropagation();
        console.log("Edit Synonym");
        this.setState({edit:true});
      }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleBlur = (event) => {
        event.stopPropagation();
        console.log("Edit synonym finish");
        this.props.finishAddSynonym(this);
        this.setState({edit:false});
        if(this.state.value == ""){
            // Delete synonym
            console.log("Delete empty synonym");
            this.props.deleteSynonym(this);
        }
        else{
            // Add in synonym list
            this.props.addSynonym(this);
        }
    }

    render(){
        if(this.state.edit){
            return (
                <span className="synonym">
                    <input value={this.state.value} onChange={this.handleChange} onBlur={this.handleBlur} autoFocus/>
                    <span className="removeBtn" onClick={() => this.props.deleteSynonym(this)}>x</span>
                </span>
    
            )
        }
        else{
            return (
            <span className="synonym" onDoubleClick={this.handleClick}>
                {this.props.synonym.name} 
                <span className="removeBtn" onClick={() => this.props.deleteSynonym(this)}>x</span>
            </span>

            )
        }
    }

    static propTypes = {
        value:PropTypes.string,
        edit: PropTypes.bool
    };
}

export default Synonym;