import React from 'react';
import TypeField from './typefield';
import TextField from './textfield';
import Synonym from './synonym';
import PropTypes from 'prop-types';

class Field extends React.Component{

    constructor(props) {    
        super(props);
        this.state = {
            name: this.props.field.name,
            type: this.props.field.type,
            synonyms: this.props.field.synonyms,
            addingSynonym:false
        };
      }

      clickAddSynonym = () => {  
        console.log("Click Add Synonym");
        this.setState({addingSynonym:true});
      };

      finishAddSynonym = () => {
        console.log("Finish Add Synonym");
        this.setState({addingSynonym:false});
      }

      addSynonym = (synonym) => {
        console.log("Add Synonym");
        this.state.synonyms.push(synonym);
        this.setState({synonyms:this.state.synonyms});
      }

    deleteSynonym = (synonym) => {
        console.log("Delete Synonym");
        let index = this.state.synonyms.indexOf(synonym.props.synonym);
        this.state.synonyms.splice(index,1);
        this.setState({synonyms:this.state.synonyms});
      }

    
    render(){

        /*if(this.state.addingSynonym){
            let allButOneSynonyms = this.state.synonyms;
            allButOneSynonyms.pop();
            var synonymsList = allButOneSynonyms
            .map(s => <Synonym key={s.id} synonym={s} addSynonym={this.addSynonym} deleteSynonym={this.deleteSynonym} finishAddSynonym={this.finishAddSynonym}/>); 
            let newSynonym = this.state.synonyms.slice(-1);
            synonymsList.push(<Synonym key={newSynonym.id} synonym={newSynonym} addSynonym={this.addSynonym} edit={true} deleteSynonym={this.deleteSynonym} finishAddSynonym={this.finishAddSynonym}/>)
            //let newSynonym = {id: Date.now(),name: ""};
            //synonymsList.push(<Synonym key={newSynonym.id} synonym={newSynonym} addSynonym={this.addSynonym} edit={true} deleteSynonym={this.deleteSynonym} finishAddSynonym={this.finishAddSynonym}/>)
        }   
        else{
            var synonymsList = this.state.synonyms
            .map(s => <Synonym key={s.id} synonym={s} addSynonym={this.addSynonym} deleteSynonym={this.deleteSynonym} finishAddSynonym={this.finishAddSynonym}/>); 
        }*/
        const synonymsList = this.state.synonyms
        .map(s => <Synonym key={s.id} synonym={s} addSynonym={this.addSynonym} deleteSynonym={this.deleteSynonym} finishAddSynonym={this.finishAddSynonym}/>); 
        if(this.state.addingSynonym){
            let newSynonym = {id: Date.now(),name: ""};
            synonymsList.push(<Synonym key={newSynonym.id} synonym={newSynonym} addSynonym={this.addSynonym} edit={true} deleteSynonym={this.deleteSynonym} finishAddSynonym={this.finishAddSynonym}/>)
        
        }

        return (
                    <div className="row field align-items-center">
                        <div className="col-3 nameField">
                            <TextField value={this.state.name}/>
                        </div>
                        <div className="col-4 typeField">
                            <TypeField type={this.state.type}/>
                        </div>
                        <div className="col-4 synonymsField">
                            <div className="scrollbar" onDoubleClick={this.clickAddSynonym}>
                                {synonymsList}
                            </div>
                        </div>
                        <div className="col-1 deleteField">
                            <svg onClick={() => this.props.deleteField(this)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                        </div>
                    </div>
        )
    }

    static propTypes = {
        deleteField: PropTypes.func.isRequired,
    };

}

export default Field;