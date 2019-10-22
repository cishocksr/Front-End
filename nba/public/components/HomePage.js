import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Input from 'react-enhanced-form';

class HomePage extends React.Component {
    style = {
    default: { width: 300 },
    onFocus: { borderBottom: '1px solid green' },
    onError: { borderBottom: '1px solid red' }
    }

    check = newValue => newValue < 10
    format = value => `${value} $`

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    // .post('', this.state)
    .then(res=> {
        localStorage.setItem('id', res.data.payload);
    })
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <Input
            type='number'
            value='1'
            onChange={(data, error) => console.log('change', data, error)}
            onMount={(data,error) => console.log('mount', data, error)}
            style={this.style}
            check={this.check}
            format={this.format}
            required
            />
      </form>
    ); 
  }
}

export default HomePage;