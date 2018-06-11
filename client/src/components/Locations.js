import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BaiduMap, Marker, asyncWrapper } from 'react-baidu-maps';
import key from './../config/keys';



const url = `https://api.map.baidu.com/api?v=2.0&ak=EgeDVs86fhrPgkTNnyzdU3tyCnCthk9z`;
const AsyncMap = asyncWrapper(BaiduMap);

const Locations = () => {
	return (
		<div className="container">
			<h1 id="locations" className="locations__header">Campus Locations</h1>
			<Row>
				<Col xs={12} md={2} mdOffset={2}>
					<div className="campus">
						<h1>Xuhui (HQ)</h1>
						<p className="campus__address">25th Floor, No. 899, Lingling Road, Xuhui District, Shanghai</p>
						<p className="campus__number">86-21-5432-5782</p>
					</div>
				</Col> 
				<Col xs={12} md={2}>
					<div className="campus">
						<h1>Gubei</h1>
						<p className="campus__address">9th Floor, No. 37, South Shuicheng Road, North Wanke Building, Changning District</p>
						<p className="campus__number">86-21-6275-4553</p>
					</div>
				</Col> 
				<Col xs={12} md={2}>
					<div className="campus">
						<h1>Pudong</h1>
						<p className="campus__address">1705, No. 58 Changliu Road, Pudong New District</p>
						<p className="campus__number">86-21-3382-0351</p>
					</div>
				</Col> 
				<Col xs={12} md={2}>
					<div className="campus">
						<h1>Beijing</h1>
						<p className="campus__address">Lemon Lake Clubhouse, Tianbei Rd, Houshayu Town, Shunyi District</p>
						<p className="campus__number">86-10-6475-6678</p>
					</div>
				</Col> 
			</Row>
		</div>
	)

}

export default Locations;