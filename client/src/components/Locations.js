import React from 'react';
import { Row, Col } from 'react-bootstrap';
import shbuilding1 from './../images/shbuilding1.svg';
import shbuilding2 from './../images/shbuilding2.svg';
import shbuilding3 from './../images/shbuilding3.svg';
import bjbuilding1 from './../images/bjbuilding1.svg';

const Locations = () => {
	return (
		<div className="container">
			<h1 id="locations" className="locations__header">Campus Locations</h1>
			<Row>
				<Col xs={12} md={2} mdOffset={2}>
					<a href="https://map.baidu.com" className="campus">
						<img src={shbuilding1}/>
						<h1>Xuhui (HQ)</h1>
						<p className="campus__address">25th Floor, No. 899, Lingling Road, Xuhui District, Shanghai</p>
						<p className="campus__number">86-21-5432-5782</p>
					</a>
				</Col> 
				<Col xs={12} md={2}>
					<a href="https://map.baidu.com" className="campus">
						<img src={shbuilding2}/>
						<h1>Gubei</h1>
						<p className="campus__address">9th Floor, No. 37, South Shuicheng Road, North Wanke Building, Changning District</p>
						<p className="campus__number">86-21-6275-4553</p>
					</a>
				</Col> 
				<Col xs={12} md={2}>
					<a href="https://map.baidu.com" className="campus">
						<img src={shbuilding3}/>
						<h1>Pudong</h1>
						<p className="campus__address">1705, No. 58 Changliu Road, Pudong New District</p>
						<p className="campus__number">86-21-3382-0351</p>
					</a>
				</Col> 
				<Col xs={12} md={2}>
					<a href="https://map.baidu.com" className="campus">
						<img src={bjbuilding1}/>
						<h1>Beijing</h1>
						<p className="campus__address">Lemon Lake Clubhouse, Tianbei Rd, Houshayu Town, Shunyi District</p>
						<p className="campus__number">86-10-6475-6678</p>
					</a>
				</Col> 
			</Row>
			<br/><br/>
		</div>
	)

}

export default Locations;