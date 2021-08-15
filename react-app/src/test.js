import React from 'react'
import './test.css'

var url = 'http://localhost:8080'

class Test extends React.Component {
    state = {
        message: ""
    }

    async getMessage(route) {
        return fetch(url + route).then(data => data.text())
          .then(response => {
              console.log('Success:', response)
              this.setState({message: response})
            }).catch(error => console.error('Error:', error));
    }
    render() {
        if (this.state.message) {
            return (
                <div class="center btn-group">
                    <div>{this.state.message}</div>
                    <button onClick={() => this.setState({message:""})}>Reset</button>
                </div>
            )
        } else {
            return (
                <div class="btn-group center">
                    <button onClick={() => this.getMessage('/1')}>
                        1
                    </button>
                    <button onClick={() => this.getMessage('/2')}>
                        2
                    </button>
                    <button onClick={() => this.getMessage('/3')}>
                        3
                    </button>
                </div>
            )
        }
    }
}

export default Test;