import React from 'react';

class ControlPanel extends React.Component {
  
  // props: className, onSubmit
  constructor(props) {
    super(props);
    this.state = {
      view: 'update' 
    };
  }

  render() {
    const {className, onSubmit} = this.props;

    return (
      <div className={className}>
        (this.state == 'update') && (
          <h2>How many hours of sleep did you get last night?</h2>
          <input type="number"/> 
          <button onClick={onSubmit}>Submit</button>
        )
      </div>
    );  
  }
}

export default ControlPanel;