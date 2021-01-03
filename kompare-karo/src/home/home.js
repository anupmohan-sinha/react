import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome to Home!',
            subMsg: ''
        }
    }

    render() {
        return (
            <div>{this.state.message}</div>
        )
    }
}

export default Home;