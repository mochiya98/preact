!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],t):t(n.preactHooks={},n.preact)}(this,function(n,t){var u,r,f=[],i=t.options.render;t.options.render=function(n){i&&i(n),u=0,(r=n.__c).__H&&(r.__H.t=s(r.__H.t))};var e=t.options.diffed;t.options.diffed=function(n){e&&e(n);var t=n.__c;if(t){var u=t.__H;u&&(u.u=s(u.u))}};var o=t.options.unmount;function c(n){t.options.hook&&t.options.hook(r);var u=r.__H||(r.__H={i:[],t:[],u:[]});return n>=u.i.length&&u.i.push({}),u.i[n]}function a(n,t,f){var i=c(u++);return null==i.__c&&(i.__c=r,i.o=[null==f?_(null,t):f(t),function(t){var u=n(i.o[0],t);i.o[0]!==u&&(i.o[0]=u,i.__c.setState({}))}]),i.o}function v(n,t){var r=c(u++);return x(r.v,t)?(r.v=t,r.l=n,r.o=n()):r.o}t.options.unmount=function(n){o&&o(n);var t=n.__c;if(t){var u=t.__H;u&&u.i.forEach(function(n){return n.p&&n.p()})}};var l=function(){};function p(){f.forEach(function(n){n.s=!1,n.__P&&(n.__H.t=s(n.__H.t))}),f=[]}function d(){setTimeout(p,0)}function s(n){return n.forEach(y),n.forEach(m),[]}function y(n){n.p&&n.p()}function m(n){var t=n.o();"function"==typeof t&&(n.p=t)}function x(n,t){return null==n||t.some(function(t,u){return t!==n[u]})}function _(n,t){return"function"==typeof t?t(n):t}"undefined"!=typeof window&&(l=function(n){!n.s&&(n.s=!0)&&1===f.push(n)&&(t.options.requestAnimationFrame?t.options.requestAnimationFrame(p):requestAnimationFrame(d))}),n.useState=function(n){return a(_,n)},n.useReducer=a,n.useEffect=function(n,t){var f=c(u++);x(f.v,t)&&(f.o=n,f.v=t,r.__H.t.push(f),l(r))},n.useLayoutEffect=function(n,t){var f=c(u++);x(f.v,t)&&(f.o=n,f.v=t,r.__H.u.push(f))},n.useRef=function(n){var t=c(u++);return null==t.o&&(t.o={current:n}),t.o},n.useImperativeHandle=function(n,t,r){var f=c(u++);x(f.v,r)&&(f.v=r,n.current=t())},n.useMemo=v,n.useCallback=function(n,t){return v(function(){return n},t)},n.useContext=function(n){var t=r.context[n.__c];if(null==t)return n.__p;var f=c(u++);return null==f.o&&(f.o=!0,t.sub(r)),t.props.value},n.useDebugValue=function(n,u){t.options.useDebugValue&&t.options.useDebugValue(u?u(n):n)}});
//# sourceMappingURL=hooks.umd.js.map
