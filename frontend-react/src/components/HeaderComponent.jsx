import React, {Component} from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <nav className={"navbar navbar-expand-md navbar-dark bg-dark"}>
                        <div className={"navbar-brand"}>Employees Managment System</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;