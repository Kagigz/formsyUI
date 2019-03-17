import React from 'react';

class HintBox extends React.Component{

    constructor(props) {    
        super(props);        
      }

    render(){
            switch(this.props.page){
                case("edit"):
                    var hint = "Click on any field to edit, the changes will be saved when you leave this page.";
                    break;
                default:
                    var hint = "Click on any field to edit";
            }
        return (
            <div className="hintBox">
                {hint}
            </div>
        )
    }
}

export default HintBox;