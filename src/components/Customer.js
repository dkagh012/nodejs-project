import React from 'react';

class Customer extends React.Component {
    render(){
        return(
        <div>
            <h2>{this.props.name}</h2>
        </div>
        );
    }
}

export default Customer;