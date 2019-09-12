import React, {Component} from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            name: '',
            job: '',
        }
        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target
      
        this.setState({
          [name]: value,
        })
    }

    submitForm = () => {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;
      
        return (
          <form>
            <label>Name</label><br/>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange} /><br/>
            <label>Job</label><br/>
            <input
              type="text"
              name="job"
              value={job}
              onChange={this.handleChange} /><br/>
              <input type="button" value="Submit" onClick={this.submitForm} />
          </form>
        );
      }

}