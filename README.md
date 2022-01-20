# VTU NG

A NodeJS wrapper for the [VTU NG](https://vtu.ng/api)


## Overview

This project is an easy to use API to access VTU NG endpoints.

## Getting Started

> Install from the NPM Registry

`	$ npm install --save vtu-ng `

# Usage

```
const vtu = require("vtu-ng");
require("dotenv").config();


// Using Promise
const response = vtu.getVTUBalance("balance", process.env.VTU_USERNAME, process.env.VTU_PASS);
	response.then(function(result) {
	return result;
});


// Using async/await

const checkBalance = async () => {
	const response = await vtu.getVTUBalance(
		"balance",
		process.env.VTU_USERNAME,
		process.env.VTU_PASS
	);
	return response;
}

const buyAirtime = async () => {
	const response = await vtu.purchaseAirtime(
		"balance",
		 process.env.VTU_USERNAME,
		 process.env.VTU_PASS,
		 phone,
		 network,
		 amount
	 );
	return response;
}

const buyData = async () => {
	const response = await vtu.purchaseData(
		"balance",
		 process.env.VTU_USERNAME,
		 process.env.VTU_PASS,
		 phone,
		 network,
		 plan
	 );
	return response;
}

const verifyCustomer = async () => {
	const response = await vtu.verifyCustomer(
		"balance",
		 process.env.VTU_USERNAME,
		 process.env.VTU_PASS,
		 customer,
		 service,
		 variation
	 );
	return response;
}

const payCableTV = async () => {
	const response = await vtu.subscribeCableTV(
		"balance",
		 process.env.VTU_USERNAME,
		 process.env.VTU_PASS,
		 phone,
		 provider,
		 smartcard,
		 plan
	 );
	return response;
}

const payElectricity = async () => {
	const response = await vtu.subscribeElectricity(
		"balance",
		 process.env.VTU_USERNAME,
		 process.env.VTU_PASS,
		 phone,
		 meter,
		 provider,
		 variation,
		 amount
	 );
	return response;
}


```



## Licence

MIT

## Credits

[Saviour Essien aka Celebrity Developer](https://twitter.com/celebritydev)

## Contributing

See the  **[CONTRIBUTING.md](https://github.com/celebritydeveloper)** file for information.