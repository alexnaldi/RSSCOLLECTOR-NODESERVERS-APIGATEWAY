'use strict'

const AbstractServer = require('abstract-server')

class ApiGateway extends AbstractServer{
	constructor() {
		super();
	}
}

/*Initialization Server Instance*/
var apiGateway = new ApiGateway();

var serverInstance = apiGateway.getServerInstance();

var logger = apiGateway.getLoggerInstance();

/*Starting the server*/
serverInstance.listen(process.env.PORT, function () {
  logger.info(`${process.env.TYPE_ENV} listening on port ${process.env.PORT}!`);
});
