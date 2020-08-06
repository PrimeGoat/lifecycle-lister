import React, { Component } from 'react';

class Album extends Component {
  constructor(props) {
    super(props);

    // console.log("Rendering album number ", props.data[0].albumId);

    this.state = {
      id: props.id,
      thumbnails: []
    };
  }

  componentDidMount() {
    const thumbnails = this.props.data.map((entry) => {
      return entry.thumbnailUrl;
    });
    this.setState(
      {
        thumbnails
      },
      () => {
        console.log('thumbs', this.state.thumbnails);
      }
    );
  }

  render() {
    console.log('id', this.props);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div>Album {this.props.id}</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
        >
          {this.state.thumbnails.map((thumbnail) => {
            return <img src={thumbnail} alt='eh' />;
          })}
        </div>
      </div>
    );
  }
}

export default Album;
