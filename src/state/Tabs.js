import React from 'react';
// import ReactDOM from 'react-dom';

class Tabs extends React.Component {
    static defaultProps = {
        tabs: []
    };
    state = {
        currentTabIndex: 0
    };
    handleButtonClick(index) {
        console.log('button clicked! Index is', { index })
        this.setState({ currentTabIndex: index })
    };
    renderButtons() {
        const buttons = this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        ))
        return buttons
    };
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    };
    render() {
        return (
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }
};

export default Tabs;