import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BaiduMap } from 'react-baidu-maps';
import key from './../config/keys';


const Locations = () => {
	return (
		<div className="container">
			<h1 id="locations" className="locations__header">Locations</h1>
			<Row>
				<Col sm={12} md={4} mdOffset={2}>
					
					<p className="map__contact">
						<b>Shanghai Xujiahui (HQ)</b><br/>Unit F, G, H, 25th Floor, No. 899, Lingling Road, Cross Region Building, Xuhui District<br/>
						<b>+86-21-5432-5782</b>
					</p>
				</Col>
				<Col sm={12} md={4}>
					
					<p className="map__contact">
						<b>Shanghai Gubei</b><br/>9th Floor, No. 37, South Shuicheng Road, North Wanke Building, Changning District<br/>
						<b>+86-21-6275-4553</b>
					</p>

				</Col>
			</Row>
			<Row>
				<Col sm={12} md={4} mdOffset={2}>
					
					<p className="map__contact">
						<b>Shanghai Pudong</b><br/>1705, No. 58 Changliu Road, Pudong New District<br/>
						<b>+86-21-3382-0351</b>
					</p>
				</Col>

				<Col sm={12} md={4}>
					
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