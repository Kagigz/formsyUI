import React from 'react';
import ProjectDetails from './projectDetails'
import FieldList from './fields/fieldList'

class ProjectCreate extends React.Component{
    render(){
        return (
            <div className="container content">
                <h1 className="title">
                    {this.props.title}
                </h1>
                <ProjectDetails projectName="Example project"/>
                <FieldList/>
            </div>
        )
    }
}

export default ProjectCreate;