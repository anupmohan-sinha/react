import React from 'react';

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Mohan'};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({name: 'Anup Mohan Sinha'})
        }, 1000 )
    }

    render() {
        return(
            <div>Hello {this.state.name}</div>
        )
    }
}

export default HelloMessage;