import React, {Component} from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <footer className={"footer"}>
                    <span className={ "text-muted"}>Build by Gilad Abudi</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;