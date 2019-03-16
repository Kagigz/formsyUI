import React from 'react';
import { runInThisContext } from 'vm';

class ProjectCreate extends React.Component{

    constructor(props) {    
        super(props);
    
        this.state = {
          projectName:this.props.projectName,
          edit:false
        };
         
      }

        handleClick = () => {
            console.log("Edit project name");
            this.setState({edit:true});
        }
  
        handleChange = (event) => {
            this.setState({projectName: event.target.value})
        }

        handleBlur = () => {
            console.log("Edit project name finish");
            this.setState({edit:false});
        }


    render(){

        if(this.state.edit){
            var nameDisplay = <input className="form-control" value={this.state.projectName} onChange={this.handleChange} onBlur={this.handleBlur} autoFocus/>
        }
        else{
            var nameDisplay = <span>{this.state.projectName}</span>
        }
        return (
            <div className="projectDetails">
                Name: 
                <span onDoubleClick={this.handleClick} className="projectName">
                    {nameDisplay}
                </span>
                                
            </div>
        )
    }
}

export default ProjectCreate;