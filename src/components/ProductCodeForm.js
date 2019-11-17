import React from 'react';

class ProductCodeForm extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = { code: '' };
    }

    handleChange = (event) => {
        this.setState({ code: event.target.value });
    }

    handleSubmit = (event) => {
        // prevent the reload
        event.preventDefault();
        
        // do the magic in parent component
        // notice: inversion of control
        this.props.callback(this.state.code);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    TTV-Code eingeben:
                    <input
                        type="text" placeholder="TTV." name="code"
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Konfiguration laden" />
            </form>
        );
    }
}  

export default ProductCodeForm;