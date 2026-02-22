/*! byojs/Storage: many.mjs
    v0.12.1 (c) 2025 Kyle Simpson
    MIT License: http://getify.mit-license.org
*/function o(t,e){return e==null||typeof e!="object"||Array.isArray(e)||(e=[...Object.entries(e)]),Promise.all(e.map(([a,n])=>t(a,n))).then(()=>!0)}function s(t,e){return e==null||typeof e!="object"||Array.isArray(e)||(e=[...Object.keys(e)]),Promise.all(e.map(a=>t(a)))}function y(t,e){return e==null||typeof e!="object"||Array.isArray(e)||(e=[...Object.keys(e)]),Promise.all(e.map(a=>t(a))).then(()=>!0)}export{s as g,y as r,o as s};
