import React from "react";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "update"
    };
  }

  render() {
    const { className, onSubmit } = this.props;

    return (
      <div className={className}>
        <div>
          <h2>How many hours of sleep did you get last night?</h2>
          <input type="number" />
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
