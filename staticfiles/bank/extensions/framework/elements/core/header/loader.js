define('text!extensions/framework/elements/core/header/header.html', [], function() {
    return '<div class="header"><!-- ko if: $properties.baseModel.large() --><!-- ko if: corpLogin() --><div class="cz-entity-switch cz-entity-switch-small-corp"><entity-switch base-model="[[$properties.baseModel]]" dashboard="[[$properties.dashboard]]" root-model="[[$properties.rootModel]]" change-menu-state="[[$properties.changeMenuState]]"></entity-switch></div><!-- /ko --><!-- /ko --><!-- ko if: $properties.baseModel.large() --><!-- ko if: !corpLogin() --><div class="cz-entity-switch-small-retail"><entity-switch base-model="[[$properties.baseModel]]" dashboard="[[$properties.dashboard]]" root-model="[[$properties.rootModel]]" change-menu-state="[[$properties.changeMenuState]]"></entity-switch></div><!-- /ko --><!-- /ko --><!-- ko if: $properties.baseModel.small() --><!-- ko if: !corpLogin() --><div class="header-container cz-entity-switch-small-retail"><entity-switch base-model="[[$properties.baseModel]]" dashboard="[[$properties.dashboard]]" root-model="[[$properties.rootModel]]" change-menu-state="[[$properties.changeMenuState]]"></entity-switch></div><!-- /ko --><!-- /ko --><!-- ko if: $properties.baseModel.small() --><!-- ko if: corpLogin() --><div class="header-container cz-entity-switch-small-corp"><entity-switch base-model="[[$properties.baseModel]]" dashboard="[[$properties.dashboard]]" root-model="[[$properties.rootModel]]" change-menu-state="[[$properties.changeMenuState]]"></entity-switch></div><!-- /ko --><!-- /ko --><!-- ko if:!corpLogin() --><div class="header-container fixed-header"><!-- ko if: isHelpDeskSession() && $properties.rootModel.isUserDataSet() --><div class="oj-flex oj-flex-items-pad helpdesk-header-container"><div class="oj-flex-item oj-md-10 helpdesk-header-container__title helpdesk-header-container-title"><span class="icons icon-user"></span><h2 class="helpdesk-header-container-title__text" data-bind="text:$properties.baseModel.format(resourceBundle.topProfile.labels.helpDeskheading,{firstName:$properties.dashboard.userData.userProfile.firstName,lastName:$properties.dashboard.userData.userProfile.lastName})"></h2><span data-bind="text:$properties.baseModel.format(resourceBundle.topProfile.labels.helpDeskUserName,{userName:$properties.dashboard.userData.userProfile.userName})"></span></div><div class="oj-flex-item oj-md-2 helpdesk-header-container__icon right"><a href="#" data-bind="click: logOutHelpDeskSession.bind($data, $properties.dashboard),attr:{\'alt\':resourceBundle.topProfile.labels.logout ,\'aria-label\':resourceBundle.topProfile.labels.logout }"><span class="icons icon-cancel"></span></a></div></div><!-- /ko --><div class="fixed-header-container"><!-- ko if: !$properties.baseModel.large() || $properties.baseModel.cordovaDevice() --><div class="vertical-align-middle" data-bind="css:{\'logo-container\' : $properties.baseModel.small() , \'logo-container-medium\' : $properties.baseModel.medium()}"><!-- ko if: !$properties.dashboard.isDashboard() && $properties.rootModel.menuNavigationAvailable && $properties.dashboard.rootRouter.currentState().canExit --><!-- /ko --><!-- ko if: $properties.rootModel.isUserDataSet() && $properties.rootModel.menuNavigationAvailable --><div class="icon menu-bar-container"><a href="#" data-bind="attr:{\'aria-label\':resourceBundle.topProfile.labels.openMenu ,\'alt\':resourceBundle.topProfile.labels.toggleInner ,\'title\':resourceBundle.topProfile.labels.toggleInner },click:changeMenuState.bind(null, \'toggle\')"><span class="hamburger-icon"><svg viewBox="275 200 300 300" preserveAspectRatio="xMinYMin"><path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" class="top"></path><path d="M300,320 L540,320" class="middle"></path><path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" class="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path></svg></span></a></div><!-- /ko --></div><div class="logo-header-container vertical-align-middle"><!-- ko if: $properties.dashboard.isDashboard()--><div class="logo-container"><div class="icon-logo"><img class="icon-logo" placeholder-img="common/logo-small.svg" data-bind="loadImage:\'common/logo-small.svg\', click:openDashboard, attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} " width="35px;"/></div></div><!-- /ko --><!-- ko if: !$properties.dashboard.isDashboard()--><!-- ko if: !corpLogin() --><div class="logo-container"><div class="icon-logo"><img class="icon-logo" placeholder-img="common/logo-small.svg" data-bind="loadImage:\'common/logo-small.svg\', click:openDashboard, attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} " width="35px;"/></div></div><!-- /ko --><!-- ko if: corpLogin() --><div class="logo-container"><div class="icon-logo"><img class="icon-logo" placeholder-img="common/omni-lite.svg" data-bind="loadImage:\'common/omni-lite.svg\', click:openCorpDashboard, attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} " width="35px;"/></div></div><!-- /ko --><!-- /ko --></div><div class="right nav-menu vertical-align-middle"><ul><!-- ko if :  $properties.rootModel.menuNavigationAvailable --><!-- ko ifnot: $properties.baseModel.small() --><!-- ko if:isSearchVisible() --><li><oj-label class="hide-label" :for="[[$properties.baseModel.incrementIdCount()]]"><span data-bind="text:resourceBundle.topProfile.labels.search"></span></oj-label><oj-combobox-one class="oj-combobox" :id="[[$properties.baseModel.currentIdCount()]]" options="[[searchTags]]" value="{{searchKeyword}}" filter-on-open="rawValue" :placeholder="[[resourceBundle.topProfile.labels.search]]"><span slot="end" class="icons icon-search"></span></oj-combobox-one></li><!-- /ko --><!-- ko ifnot: isSearchVisible() --><li><a href="#" data-bind="click:showSearchBar, attr:{\'alt\':resourceBundle.topProfile.labels.search, \'aria-label\':resourceBundle.topProfile.labels.search }"><span class="icons icon-search"></span></a></li><!-- /ko --><!-- /ko --><!-- /ko --><!-- ko if: !$properties.dashboard.isDashboard() && $properties.dashboard.isHelpAvailable() && !$properties.baseModel.large() --><li><a href="#" data-bind="click: showInformation, attr:{\'alt\':resourceBundle.topProfile.labels.info, \'aria-label\':resourceBundle.topProfile.labels.info }"><span class="icons icon-information"></span></a></li><!-- /ko --><!-- ko if: $properties.rootModel.isUserDataSet() --><li><a data-bind="click:openDashboard,attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} " href="#"><span class="icons icon-home"></span></a></li><li><a href="#" data-bind="click: logout,attr:{\'alt\':resourceBundle.topProfile.labels.logout ,\'aria-label\':resourceBundle.topProfile.labels.logout }"><span class="icons icon-logout"></span></a></li><!-- /ko --><!-- ko if: !$properties.rootModel.isUserDataSet() && $properties.baseModel.large() && $properties.dashboard.isDashboard() && $properties.rootModel.menuNavigationAvailable && ($properties.baseModel.cordovaDevice() && $properties.baseModel.large())--><li><oj-button class="action-button-primary" display="icons" on-oj-action="[[login]]"><span class="icons icon-login"></span> <span data-bind="text : resourceBundle.topProfile.labels.login"></span></oj-button></li><!-- /ko --></ul></div><!-- /ko --><!-- ko if: $properties.baseModel.large() && !$properties.baseModel.cordovaDevice() --><div class="logo-header-container logo-container vertical-align-middle"><!-- ko if : $properties.rootModel.isUserDataSet() && $properties.rootModel.menuNavigationAvailable --><div class="icon-menu"><a href="#" data-bind="attr:{\'aria-label\':resourceBundle.topProfile.labels.openMenu ,\'alt\':resourceBundle.topProfile.labels.toggleInner ,\'title\':resourceBundle.topProfile.labels.toggleInner },click:changeMenuState.bind(null, \'toggle\')"><span class="hamburger-icon"><img data-bind="loadImage : \'common/menu-bar.svg\'" height="80%" width="90%" style="margin-top:-5px"></span></a></div><!-- /ko --><!-- ko if:!corpLogin() --><div class="icon-logo"><img placeholder-img="common/logo-small.svg" data-bind="loadImage:\'common/logo.svg\', click:openDashboard, attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} "/></div><!-- /ko --><!-- ko if:corpLogin() --><div class="icon-logo"><img placeholder-img="common/omni-lite.svg" data-bind="loadImage:\'common/omni-lite.svg\', click:openCorpDashboard, attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} "/></div><!-- /ko --></div><div class="right nav-menu alternate-primary"><ul><li><!-- ko if: $properties.rootModel.isUserDataSet() && $properties.rootModel.menuNavigationAvailable --><!-- ko if:isSearchVisible() --><oj-label class="hide-label" :for="[[$properties.baseModel.incrementIdCount()]]"><span data-bind="text:resourceBundle.topProfile.labels.search"></span></oj-label><oj-combobox-one class="alternate-primary" :id="[[$properties.baseModel.currentIdCount()]]" value="{{searchKeyword}}" options="[[searchTags]]" filter-on-open="rawValue" :placeholder="[[resourceBundle.topProfile.labels.search]]"><span slot="end" class="icons icon-search"></span></oj-combobox-one><!-- /ko --><!-- ko ifnot: isSearchVisible() --> <a href="#" data-bind="click:showSearchBar, attr:{\'alt\':resourceBundle.topProfile.labels.search, \'aria-label\':resourceBundle.topProfile.labels.search }"><span class="icons icon-search"></span> </a><!-- /ko --><!-- /ko --></li><!-- ko if: $properties.rootModel.isUserDataSet()--><li><a data-bind="click:openDashboard,attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} " href="#"><span class="icons icon-home"></span></a></li><!-- /ko --><!-- ko if: $properties.rootModel.isUserDataSet() && $properties.rootModel.menuNavigationAvailable --><li><a href="#" id="mailbox-holder" data-bind="attr:{\'alt\': resourceBundle.topProfile.labels.notificationAlt,\'title\':resourceBundle.topProfile.labels.notifications},click:openMailBox"><!-- ko if: totalMailboxCount() !== 0  --><!-- ko if: corpLogin() --> <img style="height:27px;width:24px" alt class="" data-bind="loadImage: \'bell_icon_black.svg\'" src="/images/bell_icon_black.svg" loading="lazy"/> <span class="badge" data-bind="text : totalMailboxCount()"></span><!-- /ko --><!-- ko if: !corpLogin() --> <img style="height:27px;width:24px" alt class="" data-bind="loadImage: \'bell_icon.png\'" src="/images/bell_icon.png" loading="lazy"/> <span class="badge" data-bind="text : totalMailboxCount()"></span><!-- /ko --><!-- /ko --><!-- ko if: totalMailboxCount() === 0  --><!-- ko if:corpLogin() --> <img style="height:27px;width:24px" alt class="" data-bind="loadImage: \'bell_icon_black.svg\'" src="/images/bell_icon_black.svg" loading="lazy"/><!-- /ko --><!-- ko if: !corpLogin() --> <img style="height:27px;width:24px" alt class="" data-bind="loadImage: \'bell_icon.png\'" src="/images/bell_icon.png" loading="lazy"/><!-- /ko --><!-- /ko --></a></li><!-- /ko --><!-- ko if: $properties.rootModel.isUserDataSet()--><li class="loggedInUser"><div><div class="welcomeUser" data-bind="text : $properties.baseModel.format(resourceBundle.welcome,{firstName : $properties.dashboard.userData.userProfile.firstName, lastName : $properties.dashboard.userData.userProfile.lastName})"></div><div class="lastLogin" data-bind="text : $properties.baseModel.format(resourceBundle.lastLogin,{lastLoginDate : $properties.formatter.formatDate($properties.dashboard.userData.userProfile.preLastLoggedInDateTime, \'dateTimeFormat\')})"></div></div><!-- ko if:  $properties.rootModel.menuNavigationAvailable --> <a href="#" data-bind="click: launchProfileMenu, attr:{\'alt\':resourceBundle.openProfileLauncherTitle, \'aria-label\':resourceBundle.openProfileLauncher}"><span id="profileLauncher" slot="endIcon" class="icons icon-arrow-down vertical-align-middle"></span> </a><!-- /ko --><!-- ko if: !$properties.rootModel.menuNavigationAvailable --> <a href="#" class="no-navigation-logout" data-bind="click: profilePopupAction.bind(null, \'logout\'), attr:{\'alt\':resourceBundle.topProfile.labels.logout ,\'aria-label\':resourceBundle.topProfile.labels.logout }"><span class="icons icon-logout"></span> </a><!-- /ko --></li><!-- /ko --><!-- ko if: !$properties.rootModel.isUserDataSet() && $properties.dashboard.isDashboard() && $properties.rootModel.menuNavigationAvailable --><li><oj-button class="action-button-primary" on-oj-action="[[login]]"><span data-bind="text : resourceBundle.topProfile.labels.login"></span></oj-button></li><!-- /ko --></ul><!-- ko if: $properties.rootModel.isUserDataSet() --><oj-popup class="hide header-mailbox-launcher" id="popup1"><!-- ko if:loadMiniMailBox() --><!-- ko let: {$baseModel: $properties.baseModel, $dashboard: $properties.dashboard, $formatter: $properties.formatter, $root: $properties.rootModel}--><div class="mini-mailbox" data-bind="component: {name:\'mini-mailbox\', params: {}}"></div><!-- /ko --><!-- /ko --></oj-popup><!-- /ko --><!-- ko if: $properties.rootModel.menuNavigationAvailable --><oj-popup class="hide header-profile-launcher" id="profileLauncherPopup" modality="modal"><div class="oj-flex oj-flex-items-pad"><div class="oj-flex-item oj-sm-12"><ul><!-- ko if: $properties.rootModel.isUserDataSet() --><li><a href="#" data-bind="click: profilePopupAction.bind(null, \'profile\'), attr:{\'alt\':resourceBundle.topProfile.labels.profile ,\'aria-label\':resourceBundle.topProfile.labels.profile }"><span class="icons icon-user"></span> <span data-bind="text : resourceBundle.topProfile.labels.profile"></span></a></li><li><a href="#" data-bind="click: profilePopupAction.bind(null, \'logout\'), attr:{\'alt\':resourceBundle.topProfile.labels.logout ,\'aria-label\':resourceBundle.topProfile.labels.logout }"><span class="icons icon-logout"></span> <span data-bind="text : resourceBundle.topProfile.labels.logout"></span></a></li><!-- /ko --></ul></div></div></oj-popup><!-- /ko --></div><!-- /ko --></div><div class="se-pre-con load-bar"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div><div class="notification-clear-all" data-bind="css: { visible: $properties.baseModel.messages().length > 1 } "><!-- ko if: $properties.baseModel.messages().length > 1 --> <a href="#" data-bind="click: $properties.baseModel.closeNotificationMessages.bind(null, null), attr:{\'alt\':resourceBundle.clearAllNotificationsTitle, \'aria-label\':resourceBundle.clearAllNotifications}"><span class="icons icon-minus-circle"></span> <span class="oj-sm-only-hide" data-bind="text: resourceBundle.clearAllNotifications"></span> </a><!-- /ko --></div><oj-messages id="message-box" messages="{{$properties.baseModel.messages}}" on-oj-close="[[$properties.baseModel.closeMessageHandler]]" display="notification" position="[[messagePosition]]"></oj-messages></div><!-- /ko --><!-- ko if:corpLogin() --><div class="omni-header-container fixed-header"><!-- ko if: isHelpDeskSession() && $properties.rootModel.isUserDataSet() --><div class="oj-flex oj-flex-items-pad helpdesk-header-container"><div class="oj-flex-item oj-md-10 helpdesk-header-container__title helpdesk-header-container-title"><span class="icons icon-user"></span><h2 class="helpdesk-header-container-title__text" data-bind="text:$properties.baseModel.format(resourceBundle.topProfile.labels.helpDeskheading,{firstName:$properties.dashboard.userData.userProfile.firstName,lastName:$properties.dashboard.userData.userProfile.lastName})"></h2><span data-bind="text:$properties.baseModel.format(resourceBundle.topProfile.labels.helpDeskUserName,{userName:$properties.dashboard.userData.userProfile.userName})"></span></div><div class="oj-flex-item oj-md-2 helpdesk-header-container__icon right"><a href="#" data-bind="click: logOutHelpDeskSession.bind($data, $properties.dashboard),attr:{\'alt\':resourceBundle.topProfile.labels.logout ,\'aria-label\':resourceBundle.topProfile.labels.logout }"><span class="icons icon-cancel"></span></a></div></div><!-- /ko --><div class="fixed-header-container"><!-- ko if: !$properties.baseModel.large() || $properties.baseModel.cordovaDevice() --><div class="vertical-align-middle" data-bind="css:{\'logo-container\' : $properties.baseModel.small() , \'logo-container-medium\' : $properties.baseModel.medium()}"><!-- ko if: !$properties.dashboard.isDashboard() && $properties.rootModel.menuNavigationAvailable && $properties.dashboard.rootRouter.currentState().canExit --><!-- /ko --><!-- ko if: $properties.rootModel.isUserDataSet() && $properties.rootModel.menuNavigationAvailable --><div class="icon menu-bar-container"><a href="#" data-bind="attr:{\'aria-label\':resourceBundle.topProfile.labels.openMenu ,\'alt\':resourceBundle.topProfile.labels.toggleInner ,\'title\':resourceBundle.topProfile.labels.toggleInner },click:changeMenuState.bind(null, \'toggle\')"><span class="hamburger-icon"><svg viewBox="275 200 300 300" preserveAspectRatio="xMinYMin"><path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" class="top"></path><path d="M300,320 L540,320" class="middle"></path><path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" class="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path></svg></span></a></div><!-- /ko --></div><div class="logo-header-container vertical-align-middle"><!-- ko if: $properties.dashboard.isDashboard()--><div class="logo-container"><div class="icon-logo"><img class="icon-logo" placeholder-img="common/logo-small.svg" data-bind="loadImage:\'common/logo-small.svg\', click:openDashboard, attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} " width="35px;"/></div></div><!-- /ko --><!-- ko if: !$properties.dashboard.isDashboard()--><!-- ko if: !corpLogin() --><div class="logo-container"><div class="icon-logo"><img class="icon-logo" placeholder-img="common/logo-small.svg" data-bind="loadImage:\'common/logo-small.svg\', click:openDashboard, attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} " width="35px;"/></div></div><!-- /ko --><!-- ko if: corpLogin() --><div class="logo-container"><div class="icon-logo"><img class="icon-logo" placeholder-img="common/omni-lite.svg" data-bind="loadImage:\'common/omni-lite.svg\', click:openCorpDashboard, attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} " width="35px;"/></div></div><!-- /ko --><!-- /ko --></div><div class="right nav-menu vertical-align-middle"><ul><!-- ko if :  $properties.rootModel.menuNavigationAvailable --><!-- ko ifnot: $properties.baseModel.small() --><!-- ko if:isSearchVisible() --><li><oj-label class="hide-label" :for="[[$properties.baseModel.incrementIdCount()]]"><span data-bind="text:resourceBundle.topProfile.labels.search"></span></oj-label><oj-combobox-one class="oj-combobox" :id="[[$properties.baseModel.currentIdCount()]]" options="[[searchTags]]" value="{{searchKeyword}}" filter-on-open="rawValue" :placeholder="[[resourceBundle.topProfile.labels.search]]"><span slot="end" class="icons icon-search"></span></oj-combobox-one></li><!-- /ko --><!-- ko ifnot: isSearchVisible() --><li><a href="#" data-bind="click:showSearchBar, attr:{\'alt\':resourceBundle.topProfile.labels.search, \'aria-label\':resourceBundle.topProfile.labels.search }"><span class="icons icon-search"></span></a></li><!-- /ko --><!-- /ko --><!-- /ko --><!-- ko if: !$properties.dashboard.isDashboard() && $properties.dashboard.isHelpAvailable() && !$properties.baseModel.large() --><li><a href="#" data-bind="click: showInformation, attr:{\'alt\':resourceBundle.topProfile.labels.info, \'aria-label\':resourceBundle.topProfile.labels.info }"><span class="icons icon-information"></span></a></li><!-- /ko --><!-- ko if: $properties.rootModel.isUserDataSet() --><li><a data-bind="click:openDashboard,attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} " href="#"><span class="icons icon-home"></span></a></li><li><a href="#" data-bind="click: logout,attr:{\'alt\':resourceBundle.topProfile.labels.logout ,\'aria-label\':resourceBundle.topProfile.labels.logout }"><span class="icons icon-logout"></span></a></li><!-- /ko --><!-- ko if: !$properties.rootModel.isUserDataSet() && $properties.baseModel.large() && $properties.dashboard.isDashboard() && $properties.rootModel.menuNavigationAvailable && ($properties.baseModel.cordovaDevice() && $properties.baseModel.large())--><li><oj-button class="action-button-primary" display="icons" on-oj-action="[[login]]"><span class="icons icon-login"></span> <span data-bind="text : resourceBundle.topProfile.labels.login"></span></oj-button></li><!-- /ko --></ul></div><!-- /ko --><!-- ko if: $properties.baseModel.large() && !$properties.baseModel.cordovaDevice() --><div class="logo-header-container logo-container vertical-align-middle"><!-- ko if : $properties.rootModel.isUserDataSet() &&  $properties.rootModel.menuNavigationAvailable --><div class="icon-menu"><a href="#" data-bind="attr:{\'aria-label\':resourceBundle.topProfile.labels.openMenu ,\'alt\':resourceBundle.topProfile.labels.toggleInner ,\'title\':resourceBundle.topProfile.labels.toggleInner },click:changeMenuState.bind(null, \'toggle\')"><span class="hamburger-icon"><img data-bind="loadImage : \'common/menu-bar.svg\'" height="80%" width="90%" style="margin-top:-5px"></span></a></div><!-- /ko --><!-- ko if:!corpLogin() --><div class="icon-logo"><img placeholder-img="common/logo-small.svg" data-bind="loadImage:\'common/logo.svg\', click:openDashboard, attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} "/></div><!-- /ko --><!-- ko if:corpLogin() --><div class="icon-logo"><img placeholder-img="common/omni-lite.svg" data-bind="loadImage:\'common/omni-lite.svg\', click:openCorpDashboard, attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} "/></div><!-- /ko --></div><div class="right nav-menu alternate-primary"><ul><li><!-- ko if: $properties.rootModel.isUserDataSet() && $properties.rootModel.menuNavigationAvailable --><!-- ko if:isSearchVisible() --><oj-label class="hide-label" :for="[[$properties.baseModel.incrementIdCount()]]"><span data-bind="text:resourceBundle.topProfile.labels.search"></span></oj-label><oj-combobox-one class="alternate-primary" :id="[[$properties.baseModel.currentIdCount()]]" value="{{searchKeyword}}" options="[[searchTags]]" filter-on-open="rawValue" :placeholder="[[resourceBundle.topProfile.labels.search]]"><span slot="end" class="icons icon-search"></span></oj-combobox-one><!-- /ko --><!-- ko ifnot: isSearchVisible() --> <a href="#" data-bind="click:showSearchBar, attr:{\'alt\':resourceBundle.topProfile.labels.search, \'aria-label\':resourceBundle.topProfile.labels.search }"><span class="icons icon-search"></span> </a><!-- /ko --><!-- /ko --></li><!-- ko if: $properties.rootModel.isUserDataSet()--><li><a data-bind="click:openDashboard,attr:{alt:resourceBundle.topProfile.labels.logo_alt, title:resourceBundle.topProfile.labels.logo_title} " href="#"><span class="icons icon-home"></span></a></li><!-- /ko --><!-- ko if: $properties.rootModel.isUserDataSet() && $properties.rootModel.menuNavigationAvailable --><li><a href="#" id="mailbox-holder" data-bind="attr:{\'alt\': resourceBundle.topProfile.labels.notificationAlt,\'title\':resourceBundle.topProfile.labels.notifications},click:openMailBox"><!-- ko if: totalMailboxCount() !== 0  --> <img style="height:27px;width:24px" alt class="" data-bind="loadImage: \'bell_icon_black.svg\'" src="/images/bell_icon_black.svg" loading="lazy"/> <span class="badge" data-bind="text : totalMailboxCount()"></span><!-- /ko --><!-- ko if: totalMailboxCount() === 0  --> <img style="height:27px;width:24px" alt class="" data-bind="loadImage: \'bell_icon_black.svg\'" src="/images/bell_icon_black.svg" loading="lazy"/><!-- /ko --></a></li><!-- /ko --><!-- ko if: $properties.rootModel.isUserDataSet()--><li class="loggedInUser"><div><div class="welcomeUser" data-bind="text : $properties.baseModel.format(resourceBundle.welcome,{firstName : $properties.dashboard.userData.userProfile.firstName, lastName : $properties.dashboard.userData.userProfile.lastName})"></div><div class="lastLogin" data-bind="text : $properties.baseModel.format(resourceBundle.lastLogin,{lastLoginDate : $properties.formatter.formatDate($properties.dashboard.userData.userProfile.preLastLoggedInDateTime, \'dateTimeFormat\')})"></div></div><!-- ko if:  $properties.rootModel.menuNavigationAvailable --> <a href="#" data-bind="click: launchProfileMenu, attr:{\'alt\':resourceBundle.openProfileLauncherTitle, \'aria-label\':resourceBundle.openProfileLauncher}"><span id="profileLauncher" slot="endIcon" class="icons icon-arrow-down vertical-align-middle"></span> </a><!-- /ko --><!-- ko if: !$properties.rootModel.menuNavigationAvailable --> <a href="#" class="no-navigation-logout" data-bind="click: profilePopupAction.bind(null, \'logout\'), attr:{\'alt\':resourceBundle.topProfile.labels.logout ,\'aria-label\':resourceBundle.topProfile.labels.logout }"><span class="icons icon-logout"></span> </a><!-- /ko --></li><!-- /ko --><!-- ko if: !$properties.rootModel.isUserDataSet() && $properties.dashboard.isDashboard() && $properties.rootModel.menuNavigationAvailable --><li><oj-button class="action-button-primary" on-oj-action="[[login]]"><span data-bind="text : resourceBundle.topProfile.labels.login"></span></oj-button></li><!-- /ko --></ul><!-- ko if: $properties.rootModel.isUserDataSet() --><oj-popup class="hide header-mailbox-launcher" id="popup1"><!-- ko if:loadMiniMailBox() --><!-- ko let: {$baseModel: $properties.baseModel, $dashboard: $properties.dashboard, $formatter: $properties.formatter, $root: $properties.rootModel}--><div class="mini-mailbox" data-bind="component: {name:\'mini-mailbox\', params: {}}"></div><!-- /ko --><!-- /ko --></oj-popup><!-- /ko --><!-- ko if: $properties.rootModel.menuNavigationAvailable --><oj-popup class="hide header-profile-launcher" id="profileLauncherPopup" modality="modal"><div class="oj-flex oj-flex-items-pad"><div class="oj-flex-item oj-sm-12"><ul><!-- ko if: $properties.rootModel.isUserDataSet() --><li><a href="#" data-bind="click: profilePopupAction.bind(null, \'profile\'), attr:{\'alt\':resourceBundle.topProfile.labels.profile ,\'aria-label\':resourceBundle.topProfile.labels.profile }"><span class="icons icon-user"></span> <span data-bind="text : resourceBundle.topProfile.labels.profile"></span></a></li><li><a href="#" data-bind="click: profilePopupAction.bind(null, \'logout\'), attr:{\'alt\':resourceBundle.topProfile.labels.logout ,\'aria-label\':resourceBundle.topProfile.labels.logout }"><span class="icons icon-logout"></span> <span data-bind="text : resourceBundle.topProfile.labels.logout"></span></a></li><!-- /ko --></ul></div></div></oj-popup><!-- /ko --></div><!-- /ko --></div><div class="se-pre-con load-bar"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div><div class="notification-clear-all" data-bind="css: { visible: $properties.baseModel.messages().length > 1 } "><!-- ko if: $properties.baseModel.messages().length > 1 --> <a href="#" data-bind="click: $properties.baseModel.closeNotificationMessages.bind(null, null), attr:{\'alt\':resourceBundle.clearAllNotificationsTitle, \'aria-label\':resourceBundle.clearAllNotifications}"><span class="icons icon-minus-circle"></span> <span class="oj-sm-only-hide" data-bind="text: resourceBundle.clearAllNotifications"></span> </a><!-- /ko --></div><oj-messages id="message-box" messages="{{$properties.baseModel.messages}}" on-oj-close="[[$properties.baseModel.closeMessageHandler]]" display="notification" position="[[messagePosition]]"></oj-messages></div><!-- /ko --></div><!-- ko ifnot: $properties.baseModel.large()  --><!-- ko let: {$dashboard : $properties.dashboard, $baseModel: $properties.baseModel, $formatter: $properties.formatter, $root: $properties.rootModel}--><floating-panel panel-id="informationPopupHeader"><help params="baseModel : $baseModel, dashboard: $dashboard, transaction: $dashboard.helpComponent.componentName"></help></floating-panel><!-- /ko --><!-- /ko -->';
});

define('extensions/framework/elements/core/header/model', ["baseService"], function(e) {
    "use strict";
    return new function() {
        const n = e.getInstance();
        return {
            showLoginTime: function() {
                return n.fetch({
                    url: "me"
                })
            },
            helpDeskSessionOut: function(e) {
                return n.update({
                    url: "helpDeskSession",
                    data: e
                })
            },
            getMailCount: function() {
                return n.fetch({
                    url: "mailbox/count?msgFlag=T"
                })
            },
            baseServiceProps: function(e, t) {
                return n.props(e, t)
            }
        }
    }
});
define('resources/nls/header', [], function() {
    "use strict";
    return new function() {
        return {
            root: {
                welcome: "Welcome, {firstName} {lastName}",
                lastLogin: "Last login {lastLoginDate}",
                openProfileLauncher: "Options Menu",
                openProfileLauncherTitle: "Click to open options menu",
                clearAllNotifications: "Clear all notifications",
                clearAllNotificationsTitle: "Click here to clear all notifications",
                topProfile: {
                    labels: {
                        profile: "Profile",
                        inbox: "Mailbox",
                        settings: "Settings",
                        logout: "Logout",
                        login: "Login",
                        logoutTitle: "Click to Logout",
                        changePassword: "Change Password",
                        changePasswordTitle: "Click to Change Password",
                        mylimits: "My Limits",
                        setSecQues: "Set Security Question",
                        myalerts: "Manage Alerts",
                        help: "Help",
                        about: "About",
                        mailbox: "Mailbox",
                        logo_title: "Go to Dashboard",
                        logo_alt: "Open Dashboard",
                        back_title: "Click to Go Back",
                        back_alt: "Back",
                        requestfunds: "Request Funds",
                        unclaimedfunds: "Unclaimed Funds",
                        requestfundsTitle: "Click to view funds requested",
                        unclaimedfundsTitle: "Click to view Unclaimed Funds",
                        location: "Location",
                        locationTitle: "Click to view Location",
                        toggleInner: "Toggle Menu",
                        openMenu: "Open Menu",
                        openMail: "Open Mails",
                        openAlerts: "Open Alerts",
                        openProfile: "Open Profile",
                        openProfileTitle: "Click to Open Profile",
                        manageAlerts: "Manage Alerts",
                        notifications: "Click here for notifications",
                        notificationAlt: "Notifications",
                        locateMe: "ATM/Branch Locator",
                        locateMeAlt: "Locate ATM Branch",
                        search: "Search for transactions example Bills",
                        info: "Information",
                        helpDeskheading: "You are logged on behalf of {firstName} {lastName}",
                        helpDeskUserName: "({userName})"
                    },
                    quickMenu: {
                        dashboard: "Dashboard",
                        trends: "Trends",
                        "quick-access": "Quick Access",
                        payments: "Payments"
                    },
                    bankName: "Ecobank"
                }
            },
            ar: !0,
            es: !0,
            pt: !0,
            fr: !0,
            zh_CN: !0,
            cs: !0,
            sv: !0,
            en: !1,
            "en-us": !1,
            el: !0
        }
    }
});

define('extensions/framework/elements/core/header/header', ["ojs/ojcore", "knockout", "jquery", "./model", "ojL10n!resources/nls/header", "platform", "base-models/utils/obdx-data-aggregation", "framework/js/constants/constants", "ojs/ojpopup", "ojs/ojselectcombobox", "ojs/ojmenu", "ojs/ojmessages", "framework/elements/core/entity-switch/loader", "framework/elements/api/floating-panel/loader"], function(e, o, t, n, r, a, s, i) {
    "use strict";

    function l(l) {
        const p = this;
        let d, u, c, m, h;
        p.changeMenuState = l.properties.changeMenuState, p.mailbox = l.properties.mailbox, p.resourceBundle = r, p.isExternalPayment = p.isExternalPayment ? p.isExternalPayment : null, p.searchKeyword = o.observableArray(), p.searchTags = o.observableArray(), p.isSearchVisible = o.observable(!1), p.loadMiniMailBox = o.observable(!1), p.totalMailboxCount = o.observable(0), p.corpLogin = o.observable(!1), window.location.href.match(/logincorporate/g) ? (window.status = "corp", p.corpLogin(!0)) : (window.status = "", p.corpLogin(!1)), p.messagePosition = {
            my: {
                vertical: "top",
                horizontal: "end"
            },
            at: {
                vertical: "bottom",
                horizontal: "end"
            },
            of: ".notification-clear-all"
        }, l.properties.baseModel.registerComponent("search", "common"), l.properties.baseModel.registerComponent("mini-mailbox", "mailbox"), l.properties.baseModel.registerComponent("side-menu", "security"), l.properties.baseModel.registerComponent("profile", "base-components"), l.properties.baseModel.registerComponent("locator", "atm-branch-locator"), l.properties.baseModel.registerElement("help"), l.properties.baseModel.registerComponent("login-form", "widgets/pre-login"), p.openMailBox = function() {
            t("#popup1").ojPopup("isOpen") ? t("#popup1").ojPopup("close", "#mailbox-holder") : (p.loadMiniMailBox(!1), o.tasks.runEarly(), t("#popup1_wrapper_layer").show(), t("#popup1").ojPopup("open", "#mailbox-holder", {
                my: {
                    horizontal: "right",
                    vertical: "top"
                },
                at: {
                    horizontal: "end",
                    vertical: "bottom"
                }
            }), p.loadMiniMailBox(!0))
        }, p.showInformation = function() {
            l.properties.dashboard.isHelpAvailable() && t("#informationPopupHeader")[0].dispatchEvent(new CustomEvent("openFloatingPanel"))
        }, p.launchProfileMenu = function() {
            document.querySelector("#profileLauncherPopup").open("#profileLauncher")
        }, p.showSearchBar = function() {
            p.searchKeyword(null), p.isSearchVisible(!0), o.tasks.runEarly();
            const t = document.querySelector("oj-combobox-one.alternate-primary");
            e.Context.getContext(t).getBusyContext().whenReady().then(function() {
                t.focus(), corp
            })
        }, l.properties.baseModel.addEvent("roleChanged", {
            element: window,
            eventName: "roleChanged",
            eventHandler: function(e) {
                h = e.detail.value
            }
        }), p.openDashboard = function() {
            l.properties.rootModel.menuNavigationAvailable && l.properties.dashboard.switchModule(h || "home")
        }, p.openCorpDashboard = function() {
            window.status = "corp", l.properties.rootModel.menuNavigationAvailable && l.properties.dashboard.switchModule(h || "home")
        }, p.profilePopupAction = function(e) {
            switch (document.querySelector("#profileLauncherPopup") && document.querySelector("#profileLauncherPopup").close(), e) {
                case "profile":
                    "ADMIN" !== l.properties.dashboard.appData.segment ? l.properties.dashboard.loadComponent("side-menu") : l.properties.dashboard.loadComponent("profile");
                    break;
                case "logout":
                    p.logout()
            }
        }, p.searchKeyword.subscribe(function(e) {
            if (e) {
                let o;
                try {
                    if ("object" != typeof(o = JSON.parse(e))) return
                } catch (e) {
                    return
                }
                l.properties.menuOptionSelect(o), p.isSearchVisible(!1)
            }
        }), p.login = function() {
            a.getInstance("authentication").then(function(e) {
                e("behaviour", "externalAuthenticator") ? l.properties.baseModel.switchPage({}, !0) : l.properties.dashboard.loadComponent("login-form")
            })
        }, l.properties.baseModel.addEvent("login", {
            element: window,
            eventName: "login",
            eventHandler: p.login
        }), p.logout = function(e) {
            window.onbeforeunload = null, p.corpLogin() ? window.status = "corp" : window.status = "", s.addEvent({
                event: "LOGOUT"
            }), s.pushAggregatedData().then(function() {
                return navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage("logout"), a.getInstance("authentication")
            }).then(function(e) {
                l.properties.rootModel.queryMap = null, p.corpLogin() && l.properties.baseModel.medium(!0), e("logout").then(function() {
                    l.properties.rootModel.resetLayout()
                })
            })
        }, l.properties.baseModel.addEvent("logout", {
            element: window,
            eventName: "logout",
            eventHandler: p.logout
        });
        const g = function() {
            d = document.querySelector(".fixed-header"), c && m && (d.parentNode.removeChild(c), d.classList.remove("sticky")), u = null, c = document.createElement("div"), m = !1
        };
        l.properties.baseModel.addEvent("searchReload", {
            element: window,
            eventName: "headerMenuChanged",
            eventHandler: function() {
                const e = i.jsonContext ? i.jsonContext : "framework/json";
                require(["load!" + e + "/menu/" + l.properties.computeContext(l.properties.dashboard.appData.segment) + ".json", "ojL10n!resources/nls/menu"], function(e, o) {
                    const t = function e(o, t) {
                        let n = [];
                        return o.forEach(function(o) {
                            Array.isArray(o.submenus) ? n = n.concat(e(o.submenus, o.name)) : (o.parent = t, n.push(o))
                        }), n
                    }(l.properties.filterMenu(e)).map(function(e) {
                        return {
                            value: JSON.stringify(e),
                            label: e.parent ? l.properties.baseModel.format("{type} - {selection}", {
                                type: o.menu.groups[e.parent],
                                selection: o.menu.groups[e.name]
                            }) : o.menu.groups[e.name]
                        }
                    });
                    p.searchTags(t)
                })
            }
        }), l.properties.rootModel.userInfoPromise.then(function(e) {
            var o;
            l.properties.baseModel.dispatchCustomEvent(window, "headerMenuChanged"), e.userData.userProfile && l.properties.rootModel.menuNavigationAvailable && (o && o.detail ? p.totalMailboxCount(o.detail) : n.getMailCount().then(function(e) {
                return p.totalMailboxCount(e.summary.items[0].unReadCount + e.summary.items[1].unReadCount + e.summary.items[2].unReadCount)
            }), "corporateuser" === e.userData.userProfile.roles[0] ? (window.status = "corp", p.corpLogin(!0)) : (window.status = "", p.corpLogin(!1)))
        }), l.properties.baseModel.addEvent("stickyHeader", {
            element: window,
            eventName: "scroll",
            eventHandler: function() {
                d || g(), u = d.getBoundingClientRect(), c.style.width = u.width + "px", c.style.height = u.height + "px", t(this).scrollTop() >= 60 ? t(".header-container").addClass("shadow") : t(".header-container").removeClass("shadow"), window.pageYOffset >= u.top && !m ? (d.classList.add("sticky"), d.parentNode.insertBefore(c, d), m = !0) : window.pageYOffset <= u.top && m && (d.classList.remove("sticky"), d.parentNode.removeChild(c), m = !1)
            }
        }), l.properties.baseModel.addEvent("showTopHeader", {
            element: window,
            eventName: "showTopHeader",
            eventHandler: function() {
                d && m && (d.classList.remove("sticky"), d.parentNode.removeChild(c), m = !1)
            }
        }), p.resetModalComponent = function() {
            l.properties.dashboard.modalComponent("")
        };
        const b = o.computed(function() {
            l.properties.baseModel.large() ^ l.properties.baseModel.medium() ^ l.properties.baseModel.small() && g()
        });
        p.dispose = function() {
            b.dispose()
        }, p.menuHeight = t(window).height() + "px", p.isHelpDeskSession = function() {
            return !!n.baseServiceProps("helpDeskSessionKey")
        }, p.logOutHelpDeskSession = function() {
            const e = {
                sessionKey: n.baseServiceProps("helpDeskSessionKey")
            };
            n.baseServiceProps("helpDeskSessionKey", ""), n.helpDeskSessionOut(JSON.stringify(e)).then(function() {
                l.properties.rootModel.resetLayout()
            })
        }
    }
    return l.prototype.connected = function() {
        document.getElementById("mailbox-holder").addEventListener("notificationUpdated", this.getMailCount)
    }, l
});

define('text!extensions/framework/elements/core/header/component.json', [], function() {
    return '{\r\n  "name": "obdx-header",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "rootModel": {\r\n      "description": "Root Model Context",\r\n      "type": "object",\r\n      "writeback": true\r\n    },\r\n    "dashboard": {\r\n      "description": "Dashboard Context",\r\n      "type": "object",\r\n      "writeback": true\r\n    },\r\n    "baseModel": {\r\n      "description": "BaseModel Context",\r\n      "type": "object"\r\n    },\r\n    "formatter": {\r\n      "description": "Formatter Context",\r\n      "type": "object"\r\n    },\r\n    "computeContext": {\r\n      "description": "Compute Context Function",\r\n      "type": "function"\r\n    },\r\n    "menuOptionSelect": {\r\n      "description": "Menu Option Select Function",\r\n      "type": "function"\r\n    },\r\n    "changeMenuState": {\r\n      "description": "Change Menu State Function",\r\n      "type": "function"\r\n    },\r\n    "filterMenu": {\r\n      "description": "Filter Menu Function",\r\n      "type": "function"\r\n    }\r\n  },\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {}\r\n}';
});

define('extensions/framework/elements/core/header/loader', ["ojs/ojcomposite", "text!./header.html", "./header", "text!./component.json"], function(e, t, o, a) {
    "use strict";
    e.register("obdx-header", {
        view: t,
        viewModel: o,
        metadata: JSON.parse(a)
    })
});