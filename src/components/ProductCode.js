import React from 'react';
import PropTypes from 'prop-types';

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
                <h1>Produkt-Code</h1>
                <div className="btn nextBtn">
                {code}
                </div>

                <h2>Mail</h2>

                <p>
                    Wünschen Sie ein Angebot?
                </p>
                <a  target="_new"
                    href={'mailto:l.haselmaier@haselmaier.at?subject=Konfigurator Code: ' + code}>l.haselmaier@haselmaier.at</a>
            </div>
        );
    }
}

ProductCode.propTypes = {
    table: PropTypes.string,
    height: PropTypes.string,
    monitorRow: PropTypes.string,
    monitorSystem: PropTypes.string,
    blende: PropTypes.string,
    technikSide: PropTypes.string,
    technikContainer: PropTypes.string
};

export default ProductCode;