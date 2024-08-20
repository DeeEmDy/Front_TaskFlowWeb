import * as React from 'react';

export default class WelcomeContent extends React.Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Bienvenido</h1>
                        <h1>Registrese para ver el contenido de TaskFlow</h1>
                    </div>
                </div>
            </div>
        );
    }
}