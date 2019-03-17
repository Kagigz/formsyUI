import React from 'react';
import Field from './field';
import Admin from '../../general/admin';

const API = 'http://localhost:3004/fields';

class FieldList extends React.Component{

    constructor(props) {    
        super(props);
        this.state = {
          fields: [],
        };
      }
    
      componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({ fields : data }))
      }

      addField = () => {  
        console.log("Add Field");
        let allFields = [...this.state.fields];
        allFields.push({
          id: Date.now(),
          name: "New Field",
          type: "ORG",
          synonyms:[]
        });
        this.setState({fields:allFields});
      };

      deleteField = (field) => {
          console.log("Delete Field");
          let index = this.state.fields.indexOf(field.props.field);
          this.state.fields.splice(index,1);
          this.setState({fields:this.state.fields});    
      }


    render(){
        const fieldList = this.state.fields
            .map(f => <Field key={f.id} field={f} deleteField={this.deleteField}/>);
        return (
            <div className="fieldList">
                
                <Admin addField={this.addField}/>
                <div className="row fieldsLabels align-items-center">
                        <div className="col-3">
                            <h4>Name</h4>
                        </div>
                        <div className="col-4">
                        <h4>Type</h4>
                        </div>
                        <div className="col-4">
                        <h4>Synonyms</h4>
                        </div>
                  </div>
                {fieldList}
                
            </div>
        );
    }
}

export default FieldList;