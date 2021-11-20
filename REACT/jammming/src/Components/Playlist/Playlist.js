import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends React.Component {

  constructor(props) {
    super(props);
    this.handNameChange = this.handNameChange.bind(this);
  }

handNameChange(event){
  this.props.onNameChange(event.target.value)
}

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} 
        onChange = {this.handNameChange}/>
        <TrackList tracks = {this.props.playListTracks} 
        onRemove = {this.props.onRemove}
        isRemoval = {true} />
        <button className="Playlist-save" onClick = {this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
