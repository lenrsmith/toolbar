var pages = require('pageutils');
var current_view;

Titanium.UI.addEventListener('app:updateMessagesBadge',function(e){
	var messageCount = Alloy.Globals.getMessageCount();
	$.badge.text = messageCount;

	$.badge.visible = messageCount > 0 ? true : false;
});

Titanium.UI.fireEvent('app:updateMessagesBadge');

function checkMessages(e) {
	pages.toggle({type: 'controller', name: 'messages'});
}

function goBack(e){
	pages.close({name: current_view});
}

function goRefresh(e){
	Titanium.UI.fireEvent('app:refreshPage');
}

function goSettings(e){
	pages.toggle({type: 'controller', name: 'settings'});
}

function hideBack(){
	$.btn_toolbar_back.visible = false;
}

function showBack(){
	$.btn_toolbar_back.visible = true;
}

function showSettings(){
	$.btn_toolbar_settings.visible = true;
}

function hideSettings(){
	$.btn_toolbar_settings.visible = false;
}

function showRefresh(){
	$.btn_toolbar_refresh.visible = true;
}

function hideRefresh(){
	$.btn_toolbar_refresh.visible = false;
}

function setCurrentView(str){
	pages.log('TOOLBAR WIDGET: SETTING current_view to ' + str);
	current_view = str;
}

exports.setCurrentView = setCurrentView;
exports.showBack = showBack;
exports.hideBack = hideBack;
exports.showSettings = showSettings;
exports.hideSettings = hideSettings;
exports.showRefresh = showRefresh;
exports.hideRefresh = hideRefresh;