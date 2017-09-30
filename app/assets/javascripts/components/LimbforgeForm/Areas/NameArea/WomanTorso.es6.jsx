class WomanTorso extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hover: false
      }
      this.hoverState = this.hoverState.bind(this);
    }
    hoverState(){
      if (this.state.hover){
        this.setState({hover: false});
      }
      else{
        this.setState({hover: true});
      }
    }
    render() {
      var fillColor = this.props.selected_gender == "female" ? "#1578b5" : "#bfbfbf";
      var imgStyle = {
        width: "130px",
        fill: this.state.hover ? '#6c9bb9' : fillColor
      };
      return(
        <svg onMouseEnter={this.hoverState} onMouseLeave={this.hoverState} style={imgStyle} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 648 864">
          <path className="st0" d="M511.8,641.3c-0.2-9.9-0.6-17.1-0.7-19.3c-1.6-32.1,7-50.1,3.9-85.8c-0.9-10.3-3.3-17.2-4.1-32.1
            c-0.8-12.5,0-17-1.5-31.9c-1.3-13.2-2.9-19.9-4.4-24.9c-1.8-5.9-4-11.7-6.8-17.2c-2.4-47.4-6-77.3-8.9-96.4
            c-2.4-15.6-4.2-22-4.7-35.8c-0.7-20,2.2-29.9-2.7-43.3c-2.8-7.2-6.3-14.2-10.4-20.8c-4.1-6.7-9.2-12.7-15.2-17.8
            c-9-7.7-18.7-14.6-29-20.4c-31.8-16.9-44-13-56.1-22.9c-11.1-9-20.7-28.4-14.5-74H324h-32.9c6.3,45.6-3.4,65-14.5,74
            c-12.1,9.8-24.3,6-56.1,22.9c-10.3,5.8-20,12.7-29,20.4c-6,5.1-11.1,11.1-15.2,17.8c-4.1,6.6-7.5,13.6-10.4,20.8
            c-4.9,13.4-2.1,23.3-2.7,43.3c-0.5,13.8-2.2,20.2-4.7,35.8c-3,19.1-6.6,49.1-8.9,96.4c-2.8,5.5-5,11.3-6.8,17.2
            c-1.5,5-3,11.6-4.4,24.9c-1.4,14.9-0.7,19.4-1.5,31.9c-0.9,15-3.3,21.8-4.1,32.1c-3,35.7,5.5,53.6,3.9,85.8
            c-0.1,2.3-0.5,9.4-0.7,19.3c-0.2,12.8,0.2,13.7,0,21.6c-0.6,22.9-4.7,25.4-1.2,33.2c3.9,8.7,12.2,13.1,18.2,15.5
            c1.2,0.3,18.2,5.1,22.8-1.3c0.5-0.7,2.6-3.5,1.7-6c-0.5-1.2-1.4-2.1-2.5-2.6c-7.8-5.1-11.1-10.8-12.4-13.9c-3.1-7-2.9-14.1-2.6-24.4
            c0.1-4,0.4-7.3,0.7-9.6c0.6,1.2,1.5,3.4,2.7,6c7.1,16,8.3,20.1,12.9,24c1.9,1.6,6.9,5.8,9.8,4.3c5.6-2.9,0.5-26.1-7.9-44.5
            c-7.8-16.9-11.3-14.1-14.9-25.5c-2.1-6.6-1.8-10.4,3.8-54.7c2.1-16.2,2.7-21.1,3.9-28.5c2.2-13.7,3.4-20.9,5.5-29.7
            c6.5-26.3,12.7-28.8,16.9-52.4c1.4-7.9,2.3-16,2.5-24c0.2-7.6,0-15.2-0.7-22.8c-1.1-12,2.4-42.1,21.4-119.4l4.3,12
            c2.7,0.6-9.2,31.5,7,64c2.2,4.3,4.7,8.4,7.6,12.3c11.7,16,14.1,58.4-20.3,169.4l98,0.5v0.1l10.7-0.1l10.7,0.1v-0.1l98-0.5
            c-34.5-111-32.1-153.4-20.5-169.4c2.9-3.8,5.5-8,7.6-12.3c16.3-32.5,4.4-63.3,7-64l4.3-12c19,77.3,22.5,107.4,21.4,119.4
            c-0.6,7.6-0.8,15.2-0.7,22.8c0.3,8.1,1.1,16.1,2.5,24c4.2,23.6,10.4,26.1,16.9,52.4c2.2,8.7,3.3,16,5.5,29.7
            c1.2,7.4,1.8,12.3,3.9,28.5c5.6,44.3,5.9,48,3.8,54.7c-3.6,11.4-7.1,8.6-14.9,25.5c-8.5,18.4-13.5,41.5-7.9,44.5
            c2.9,1.5,7.8-2.7,9.8-4.3c4.6-3.9,5.8-8,12.9-24c1.2-2.7,2.2-4.8,2.7-6c0.3,2.2,0.5,5.5,0.7,9.6c0.3,10.3,0.5,17.5-2.6,24.4
            c-1.4,3.1-4.6,8.8-12.4,13.9c-1.1,0.5-2,1.4-2.5,2.5c-0.9,2.5,1.2,5.4,1.7,6c4.6,6.4,21.6,1.6,22.8,1.3c6-2.4,14.3-6.8,18.2-15.5
            c3.5-7.8-0.7-10.3-1.2-33.2C511.6,655,512,654,511.8,641.3z"/>
        </svg>
      )
    }
  };