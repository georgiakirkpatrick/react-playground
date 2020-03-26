import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };
    state = {
        currentSectionIndex: 0,
        paragraph: ""
    };
    // renderPararaph(index) {
    //     this.setState({})
    // }
    handleButtonClick(section, index) {
        console.log('button was clicked', index)
        this.setState({
            currentSectionIndex: index,
            currentSectionContent: section.content
        })
        // this.renderParagraph(index)
    };
    render() {
        return (
            <div>
                {/* {this.renderButtons()} */}
                <ul>
                    {this.props.sections.map((section, index) => 
                    <li key={index} >
                        <button  key={index} onClick={() => this.handleButtonClick(section, index)}>{ section.title }</button>
                        <p key={index}>{ this.state.currentSectionContent }</p>
                    </li>
                    )}
                </ul>
            </div>
        )
    };
}
 
export default Accordion;