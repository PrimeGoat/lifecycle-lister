import React, {Component} from 'react';

class Album extends Component {
	constructor(props) {
		super();

		console.log("Rendering album number ", props.data[0].albumId);
		const thumbnails = props.data.map(entry => {
			return entry.thumbnailUrl;
		});

		this.albumData = {
			id: props.id,
			thumbnails: thumbnails
		};
	}

	render() {
		return (
			<div style={{
				display: "flex",
				flexDirection: "column"
			}}>
				<div>
					Album {this.albumData.id}
				</div>
				<div style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap"
				}}>
					{
						this.albumData.thumbnails.map(thumbnail => {
							return (
								<img src={thumbnail} alt="eh" />
							);
						})
					}
				</div>
			</div>
		)
	}
}

export default Album;
