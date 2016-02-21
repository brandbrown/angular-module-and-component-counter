# angular-diagnostics
A quick roll call into the browser console to count your Angular 1.x projects modules and components.

Include the angular-diagnostic.js file into your project after angulars main script and before your first app module is declared. 

After all JS initialization is complete, use the browser console to run diagnostics. 

angular.runDiagnostic();

Example output: 

myApp: 3 components
directive: myMainDirective
factory: someService
register: someController
directive : 1
factory : 1
register : 1


some.other.module.name: 1 components
register: activeFilter
register : 1


=SUMMARY= 

Total modules: 2
register : 2
directive : 1
value : 0
factory : 1
Total Components: 4
Excluding these modules: ["ngAnimate", "ui.bootstrap", "ngCookies"]

Tip: register can be controllers or filters, this is Angulars name for them, not mine.
