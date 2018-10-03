import React from 'react'

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        }
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.text}
                       onChange={ (e) => { this.handleChange(e) }} 
                />
            </div>
        )
    }
}

export default TextInput