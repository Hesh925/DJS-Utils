const utils = require("../main");
const io = require("@pm2/io");

// METRICS //

io.init({
	transactions: true,
	http: true
});

const TM = io.counter({
	name: "Total Messages",
	id: "app/stats/messages/sinceStartup"
});

const APIPING = io.metric({
	name: "API Ping",
	id: "app/stats/api/ping"
});
const APIRL = io.counter({
	name: "API Rate Limits",
	id: "app/stats/api/ratelimits"
});

const APIERR = io.counter({
	name: "API Errors",
	id: "app/stats/api/errors"
});

// USER METRICS //

const USRTOTAL = io.metric({
	name: "Users total",
	id: "app/stats/users/total"
});
const USRONLINE = io.metric({
	name: "Users online",
	id: "app/stats/users/online"
});
const USROFFLINE = io.metric({
	name: "Users offline",
	id: "app/stats/users/offline"
});
const USRIDLE = io.metric({
	name: "Users idle",
	id: "app/stats/users/idle"
});
const USRDND = io.metric({
	name: "Users dnd",
	id: "app/stats/users/dnd"
});

// FUNCTIONS //

function setData(client) {
	var membersTotal   = [];
	var membersOnline  = [];
	var membersOffline = [];
	var membersIdle    = [];
	var membersDnd     = [];
	client.guilds.cache.forEach(guild => {
		guild.members.cache.forEach(member => {
			membersTotal.push(member.user.username);
			if(member.presence !== null){
				if(member.presence.status === "online") {
					membersOnline.push(member.user.username);
				}
				if(member.presence.status === "idle") {
					membersIdle.push(member.user.username);
				}
				if(member.presence.status === "dnd") {
					membersDnd.push(member.user.username);
				}
			} else {
				membersOffline.push(member.user.username);
			}
		});
	});
	
	var membersTotalSorted   = utils.removeDuplicates(membersTotal);
	var membersOnlineSorted  = utils.removeDuplicates(membersOnline);
	var membersOfflineSorted = utils.removeDuplicates(membersOffline);
	var membersIdleSorted    = utils.removeDuplicates(membersIdle);
	var membersDndSorted     = utils.removeDuplicates(membersDnd);

	USRTOTAL.set(membersTotalSorted.length + 1);
	USRONLINE.set(membersOnlineSorted.length);
	USROFFLINE.set(membersOfflineSorted.length);
	USRIDLE.set(membersIdleSorted.length);
	USRDND.set(membersDndSorted.length);

	APIPING.set(Math.floor(client.ws.ping));

}

function init(client) {
	setData(client);
	TM.inc();
	TM.dec();
}

function incMessages() { 
	TM.inc();
}

function rateLimit() {
	APIRL.inc();
}

function apiError() {
	APIERR.inc();
}

module.exports = {
	incMessages,
	rateLimit,
	apiError,
	setData,
	init
};