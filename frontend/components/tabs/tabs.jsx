import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:0
    };

  }

  _determineSelected(){
    if (this.state.selected === this.props.children.length - 1) {
      this.setState({ selected: (this.props.children.length - 2)});
    }
    return(
      <div>
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  _renderContent() {
   return (
     <ul className="tabs-content">
       {this._determineSelected()}
     </ul>
   );
 }


  _titleText(label){
    if (label === "") {
      return "untitled";
    } else {
      return label;
    }
  }

  _renderTitles() {
    let lastInd = this.props.children.length - 1;
   const labels = (child, index) => {
     let activeClass = (this.state.selected === index ? 'active' : '');
     let addTab = (index === lastInd ? 'add-tab' : '');
     return(
       <li key={index} className={`${activeClass} ${addTab}`}>
         <a href="#"
           onClick={this.handleClick.bind(this, index)}>
           {this._titleText.bind(this, child.props.label)()}
         </a>
       </li>
     );
   };
   return(
     <ul className="tabs-labels">
       {this.props.children.map(labels.bind(this))}
     </ul>
   );
 }

handleClick(index, e) {
  e.preventDefault();
  if ((this.props.children.length - 1)  === index) {
    if (this.props.newSection) {
      this.props.newSection();
    }
  }
  this.setState({
    selected: index
  });
}

  render() {
    return(
      <div className="tabs">

          {this._renderTitles()}
          {this._renderContent()}
      </div>
    );
  }
}

export default Tabs;
