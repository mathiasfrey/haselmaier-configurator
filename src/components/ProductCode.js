import React from 'react';

class ProductCode extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = { code: '' };
    }

    generate_code() {
        return 'TTV.' +
            this.props.table +
            this.props.height +
            this.props.monitorRow +
            // this.props.monitorCount +
            this.props.monitorSystem +
            this.props.blende +
            // this.props.cable +
            this.props.technikSide +
            this.props.technikContainer

        ;
    }
    render() {
        // nothing unless FULLY filled out
        if (!this.props.table || !this.props.height || !this.props.monitorRow /*||
            ! this.props.monitorCount*/ || !this.props.monitorSystem || !this.props.technikSide ||!this.props.technikContainer
        ) {
            return null;
        }

        var code = this.generate_code();

        return (
            <div id="code">
                <h1>Ihr Produkt Code</h1>
                <div className="code">
                {code}
                </div>

                <h2>Mail</h2>
                <a  target="_new"
                    href={'mailto:haselmaier@haselmaier.at?subject=Konfigurator Code: ' + code}>Mail</a>
            </div>
        );
    }
}  

export default ProductCode;