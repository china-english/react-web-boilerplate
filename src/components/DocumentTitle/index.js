import React from 'react';

import Helmet from 'react-helmet';

const DocumentTitle = (props) => <Helmet {...props} />;

export default DocumentTitle;

/**
* 参数
* base: {"target": "_blank", "href": "http://mysite.com/"} => object
* bodyAttributes: {"className": "root"} => object
* defaultTitle: "Default Title" => string
* defer: true => boolean
* encodeSpecialCharacters: true => boolean
* htmlAttributes: {"lang": "en", "amp": undefined}  => object
* link: [{"rel": "canonical", "href": "http://mysite.com/example"}] => array
* meta: [{"name": "description", "content": "Test description"}] => array
* noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}] => array
* onChangeClientState: (newState) => console.log(newState) => func
* script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}] => array
* style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}] => array
* title: "Title" => string
* titleAttributes: {"itemprop": "name"} => object
* titleTemplate: "MySite.com - %s" => string
*/
