(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1877:function(e,t,a){"use strict";a.r(t);var r=a(36),A=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"filtering-bundles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filtering-bundles"}},[e._v("#")]),e._v(" Filtering bundles")]),e._v(" "),r("p",[e._v("ECR bundles are filterable by component, by status or by textual research.")]),e._v(" "),r("h2",{attrs:{id:"filtering-bundles-by-component"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filtering-bundles-by-component"}},[e._v("#")]),e._v(" Filtering bundles by component")]),e._v(" "),r("p",[e._v("ECR bundles are filterable by component from App Builder user interface.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(923),alt:"App Builder bundle filtering"}})]),e._v(" "),r("p",[e._v("Behind the scenes, filtering is done using the label-based filtering provided out of the box from Kubernetes.")]),e._v(" "),r("p",[e._v("To enable filtering of a bundle, the custom-resource representing the bundle on the Entando Cluster needs to contain the correct labels. An important note on the values to add the "),r("code",[e._v("labels")]),e._v(" field, even if to correctly define a label in a k8s resource both the key and the value are required, from an Entando point of view only the key part of the label is used for filtering. The value could be set to anything, but our reccomendation is to use "),r("code",[e._v('"true"')]),e._v(" for clarity and simplicity.")]),e._v(" "),r("h3",{attrs:{id:"supported-labels-keys-are"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-labels-keys-are"}},[e._v("#")]),e._v(" Supported labels keys are:")]),e._v(" "),r("table",[r("colgroup",[r("col",{attrs:{width:"50%"}}),e._v(" "),r("col",{attrs:{width:"50%"}})]),e._v(" "),r("thead",[r("tr",{staticClass:"header"},[r("th",{attrs:{align:"left"}},[e._v("Label entry")]),e._v(" "),r("th",{attrs:{align:"left"}},[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",{staticClass:"odd"},[r("td",{attrs:{align:"left"}},[r("p",[r("code",[e._v('widget: "true"')])])]),e._v(" "),r("td",{attrs:{align:"left"}},[r("p",[e._v("The bundle contains one or more microfrontends (widgets) ")])])]),e._v(" "),r("tr",{staticClass:"even"},[r("td",{attrs:{align:"left"}},[r("p",[r("code",[e._v('plugin: "true"')])])]),e._v(" "),r("td",{attrs:{align:"left"}},[r("p",[e._v("The bundle contains one or more microservices (plugins)")])])]),e._v(" "),r("tr",{staticClass:"odd"},[r("td",{attrs:{align:"left"}},[r("p",[r("code",[e._v('fragment: "true"')])])]),e._v(" "),r("td",{attrs:{align:"left"}},[r("p",[e._v("The bundle contains one or more fragments")])])]),e._v(" "),r("tr",{staticClass:"odd"},[r("td",{attrs:{align:"left"}},[r("p",[r("code",[e._v('pageTemplate: "true"')])])]),e._v(" "),r("td",{attrs:{align:"left"}},[r("p",[e._v("The bundle contains one or more page templates")])])]),e._v(" "),r("tr",{staticClass:"even"},[r("td",{attrs:{align:"left"}},[r("p",[r("code",[e._v('contentType: "true"')])])]),e._v(" "),r("td",{attrs:{align:"left"}},[r("p",[e._v("The bundle contains one or more content types")])])]),e._v(" "),r("tr",{staticClass:"odd"},[r("td",{attrs:{align:"left"}},[r("p",[r("code",[e._v('contentTemplate: "true"')])])]),e._v(" "),r("td",{attrs:{align:"left"}},[r("p",[e._v("The bundle contains one or more content templates")])])])])]),e._v(" "),r("h3",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),r("p",[e._v("Here is an example of the metadata for a ecr bundle containg micro-frontends, some microservices and page templates")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('apiVersion: entando.org/v1\nkind: EntandoDeBundle\nmetadata:\n  name: demo-bundle\n  labels:\n    widget: "true"\n    plugin: "true"\n    pageTemplate: "true"\nspec:\n  details:\n  ...\n')])])]),r("h2",{attrs:{id:"filtering-bundles-by-status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filtering-bundles-by-status"}},[e._v("#")]),e._v(" Filtering bundles by status")]),e._v(" "),r("p",[e._v("ECR bundles are filterable by status from App Builder user interface.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(924),alt:"App Builder bundle filtering"}})]),e._v(" "),r("p",[e._v("You can choose to see the full list of the bundles available in Kubernetes cluster by selecting the "),r("code",[e._v("Explore")]),e._v(" tab, or the list of the currently installed bundles by clicking on the "),r("code",[e._v("Installed")]),e._v(" tab.")]),e._v(" "),r("h2",{attrs:{id:"filtering-bundles-by-textual-search"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filtering-bundles-by-textual-search"}},[e._v("#")]),e._v(" Filtering bundles by textual search")]),e._v(" "),r("p",[e._v("You can search for bundles containing some keywords by executing a textual search.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(925),alt:"App Builder bundle filtering"}})]),e._v(" "),r("p",[e._v("You can open the menu on the left to select which field to target.")]),e._v(" "),r("p",[e._v("If you are creating a new bundle, keep in mind the textual search is performed against data extracted from the bundle CRD file.")]),e._v(" "),r("h2",{attrs:{id:"mixing-search-criteria"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mixing-search-criteria"}},[e._v("#")]),e._v(" Mixing search criteria")]),e._v(" "),r("p",[e._v("You can mix all previous search criteria to refine the scope of your search as you want.\nFor example, you could search for all available bundles ("),r("code",[e._v("Explore")]),e._v(" tab) that contain "),r("code",[e._v("Page Templates")]),e._v(" components\n(using the checkboxes) and the word "),r("code",[e._v("Login")]),e._v(" in their name (using the textual search).")])])}),[],!1,null,null,null);t.default=A.exports},923:function(e,t,a){e.exports=a.p+"assets/img/app-builder-ecr-bundle-component-filters.e6a2bd7a.png"},924:function(e,t,a){e.exports=a.p+"assets/img/app-builder-ecr-bundle-status-filters.0d25ae06.png"},925:function(e,t){e.exports="data:image/png;base64,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"}}]);