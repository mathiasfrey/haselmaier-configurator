import React from 'react';
import useCollapse from 'react-collapsed';

const Settings = () => {
    const {getCollapseProps, getToggleProps, isOpen} = useCollapse();
    return (
            <>
                <div className="padding-left">
                    <h2>Configure your own product </h2>
                </div>
               <button className="btn btn-1 btn-1e">Tisch</button>
                <button className="btn btn-1 btn-1e">Monitoraufhängung</button>
                <button className="btn btn-1 btn-1e">Servereinschübe </button>
                <button className="btn btn-1 btn-1e">Höhenverstellbar </button>
                <button className="btn btn-1 btn-1e">Lichtsystem </button>
                <button className="btn btn-1 btn-1e">Stromleisten </button>
                <button className="btn btn-1 btn-1e">Gewünschter Monteur </button>
                <br />
                <button {...getToggleProps()}>{isOpen ? 'Collapse' : 'Expand'}</button>
                <section {...getCollapseProps()}>Collapsed content</section>
            </>
       )
};

export default Settings;