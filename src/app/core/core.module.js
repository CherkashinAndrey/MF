'use strict';

const shared = angular.module('core.shared', []);

require('./directives/validation-test/validation-test.directive')(shared);

require('./services/constants')(shared);
require('./services/store.factory')(shared);
require('./services/resolver.provider')(shared);
require('./services/tab.service')(shared);
require('./services/login.service')(shared);

require('./services/persmissions.service')(shared);


require('./constants/index.const')(shared);
// require('./services/persmissions.service')(shared);
// require('./services/sailsResolver.provider')(shared);
// require('./services/resolver.provider')(shared);

// require('./filters/status.filter')(shared);
// require('./filters/statusUser.filter')(shared);
// require('./filters/phoneFilter.filter')(shared);
// require('./filters/userFilterVacation.filter')(shared);
// require('./filters/orderByObject.filter')(shared);

export default shared;
