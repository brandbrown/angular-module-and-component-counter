(function (orig) {
    angular.modules = angular.modules || [];
    angular.module = function () {
        if (arguments.length > 1) {
            if (angular.modules.indexOf(arguments[0]) == -1) {
                angular.modules.push(arguments[0]);

            }
            arguments[1].map(function (name) {
                if (angular.modules.indexOf(name) == -1) {
                    angular.modules.push(name);
                }

            });
        }
        return orig.apply(null, arguments);
    }

    

})(angular.module);

angular.runCounter = function () {
    var exclusions = [];
    var allComponents = [];
    var componentsRecord = {};
    
    angular.modules.forEach(function (module) {
        var componentStorage = [];
        var componentTypes = {};
        if ((module.indexOf('ng') == -1 || module.indexOf('ng') != 0) && module.indexOf('ui') != 0) {
            console.log('\n');
            console.log('%c' + module + ':', "color: red;", angular.module(module)['_invokeQueue'].length, 'components');

            angular.module(module)['_invokeQueue'].forEach(function (value) {

                //store in local list
                if (componentStorage.indexOf(value[1].toLowerCase()) == -1) {
                    componentStorage.push(value[1].toLowerCase());
                    componentTypes[value[1].toLowerCase()] = 1;
                } else {
                    componentTypes[value[1].toLowerCase()] = componentTypes[value[1].toLowerCase()] + 1;
                }

                //store in master list
                if (allComponents.indexOf(value[1].toLowerCase()) == -1) {
                    allComponents.push(value[1].toLowerCase());
                    componentsRecord[value[1].toLowerCase()] = 1;
                } else {
                    componentsRecord[value[1].toLowerCase()] = componentsRecord[value[1].toLowerCase()] + 1;
                }

                // display
                console.log(value[1] + ": " + value[2][0]);
            });
        } else {
            exclusions.push(module);
        }
        
            for (var i = 0; i < componentStorage.length; i++) {
                console.log(componentStorage[i], ':', componentTypes[componentStorage[i]]);
            }
        ;

    });
    console.log('\n');
    console.log('%c=SUMMARY=', 'color: blue; font-weight:bold;' ,'\n\nTotal modules:', angular.modules.length);
    var totalComponents = 0;
    for (var j = 0; j < allComponents.length; j++) {
        console.log(allComponents[j], ':', componentsRecord[allComponents[j]]);
        totalComponents += componentsRecord[allComponents[j]];
    }
    console.log('Total Components:', totalComponents);
    console.log('Excluding these modules:', exclusions);
};
