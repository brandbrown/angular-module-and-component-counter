# angular-diagnostics
A quick roll call into the browser console to count your Angular 1.x projects modules and components.

Include the angular-diagnostic.js file into your project after angulars main script and before your first app module is declared. 

After all JS initialization is complete, use the browser console to run diagnostics. 

angular.runCounter();

Example output: 

myApp: 3 components<br>
directive: myMainDirective<br>
factory: someService<br>
register: someController<br>
directive : 1<br>
factory : 1<br>
register : 1<br>


some.other.module.name: 1 components<br>
register: activeFilter<br>
register : 1<br>


=SUMMARY= <br>

Total modules: 2<br>
register : 2<br>
directive : 1<br>
value : 0<br>
factory : 1<br>
Total Components: 4<br>
Excluding these modules: ["ngAnimate", "ui.bootstrap", "ngCookies"]<br>

Tip: register can be controllers or filters, this is Angulars name for them, not mine.
