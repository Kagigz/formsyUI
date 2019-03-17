import React from 'react';
import PropTypes from 'prop-types';

class Admin extends React.Component{

    render(){
       return (
           <div className="adminActions">
            <button type="button" className="btn btn-lg btn-primary" onClick={this.props.addField}>Add Field</button>
            </div>
        );
    }

    static propTypes = {
        addField: PropTypes.func.isRequired,
      };
}

export default Admin;