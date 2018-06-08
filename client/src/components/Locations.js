import React from 'react';
import MyMapComponent from './Map';
import { Row, Col } from 'react-bootstrap';
import key from './../config/keys';

const url = "http://maps.google.cn/maps/api/js?key=" + key.mapsApiKey + "&v=3.exp&libraries=geometry,drawing,places"

const Locations = () => {
	return (
		<div className="container">
			<h1 id="locations" className="locations__header">Locations</h1>
			<Row>
				<Col sm={12} md={4} mdOffset={2}>
					<MyMapComponent
					  isMarkerShown
					  googleMapURL={url}
					  loadingElement={<div style={{ height: `100%` }} />}
					  containerElement={<div style={{ height: `300px` }} />}
					  mapElement={<div style={{ height: `100%` }} />}
					  location={ {lat: 31.185, lng: 121.432} }
					/>
					<p className="map__contact">
						<b>Shanghai Xujiahui (HQ)</b><br/>Unit F, G, H, 25th Floor, No. 899, Lingling Road, Cross Region Building, Xuhui District<br/>
						<b>+86-21-5432-5782</b>
					</p>
				</Col>
				<Col sm={12} md={4}>
					<MyMapComponent
					  isMarkerShown
					  googleMapURL={url}
					  loadingElement={<div style={{ height: `100%` }} />}
					  containerElement={<div style={{ height: `300px` }} />}
					  mapElement={<div style={{ height: `100%` }} />}
					  location={ {lat: 31.194, lng: 121.394} }
					/>
					<p className="map__contact">
						<b>Shanghai Gubei</b><br/>9th Floor, No. 37, South Shuicheng Road, North Wanke Building, Changning District<br/>
						<b>+86-21-6275-4553</b>
					</p>

				</Col>
			</Row>
			<Row>
				<Col sm={12} md={4} mdOffset={2}>
					<MyMapComponent
					  isMarkerShown
					  googleMapURL={url}
					  loadingElement={<div style={{ height: `100%` }} />}
					  containerElement={<div style={{ height: `300px` }} />}
					  mapElement={<div style={{ height: `100%` }} />}
					  location={ {lat: 31.225, lng: 121.552} }
					/>
					<p className="map__contact">
						<b>Shanghai Pudong</b><br/>1705, No. 58 Changliu Road, Pudong New District<br/>
						<b>+86-21-3382-0351</b>
					</p>
				</Col>

				<Col sm={12} md={4}>
					<MyMapComponent
					  isMarkerShown
					  googleMapURL={url}
					  loadingElement={<div style={{ height: `100%` }} />}
					  containerElement={<div style={{ height: `300px` }} />}
					  mapElement={<div style={{ height: `100%` }} />}
					  location={ {lat: 40.105, lng: 116.544} }
					/>
					<p className="map__contact">
						<b>Beijing</b><br/>Lemon Lake Clubhouse, Tianbei Rd, Houshayu Town, Shunyi District<br/>
						<b>+86-10-6475-6678</b>
					</p>
				</Col>
			</Row>
		</div>
	)

}

export default Locations;