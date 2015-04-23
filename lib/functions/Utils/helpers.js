// name: helpers
// outputs: 1
var moment = context.global.moment;

var now = function() { 
	return moment().format('DD MMM YYYY HH:mm:ss');
};
context.global.now = now;

var logger = function(title, message) {
	node.log(now() + " - " + msg._session.id + "/" + msg._msgid + " | " + title + " > " + message);
}; 
context.global.logger = logger;

return msg;