import React from 'react';

class ProductCodeForm extends React.PureComponent {


    // I dont know if this is a better approach, but instead of using the constructor, handleChange
    // we can use refs for forms
    codeInput = React.createRef();
  /*
    constructor(props) {
        super(props);
        this.state = { code: '' };
    }*/

    /*handleChange = (event) => {
        this.setState({ code: event.target.value });
    }*/

    handleSubmit = (event) => {
        // prevent the reload
        event.preventDefault();
        
        // do the magic in parent component
        // notice: inversion of control
        // current.value to get the value of the form
        this.props.callback(this.codeInput.current.value);
        // For resetting the value after submitting
        event.currentTarget.reset()

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    TTV-Code eingeben:
                    <input
                        type="text" placeholder="TTV." name="code" ref={this.codeInput}
                        // onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Laden" />
            </form>
        );
    }
}  

export default ProductCodeForm;