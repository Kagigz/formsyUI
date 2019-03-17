import React from 'react';

class Navbar extends React.Component{

    render(){
        const currentTag = <span className="sr-only">(current)</span>;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Formsy Dashboard</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">All Projects</a>
                    <a className="nav-item nav-link" href="#">Create Project</a>
                    <a className="nav-item nav-link" href="#">Forms</a>
                    <a className="nav-item nav-link" href="#">Markup tool</a>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar;