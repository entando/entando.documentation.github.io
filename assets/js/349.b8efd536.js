(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{1449:function(e,t,n){"use strict";n.r(t);var a=n(36),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"how-microservices-connect-to-entando-apps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-microservices-connect-to-entando-apps"}},[e._v("#")]),e._v(" How Microservices Connect to Entando Apps")]),e._v(" "),n("p",[e._v("In this document, the assumptions and details related to the process of connecting a microservice to an Entando App is examined.")]),e._v(" "),n("p",[e._v("In order to fully understand the process, please familiarize yourself with these support documents:")]),e._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/next/docs/reference/custom-resources.html"}},[e._v("Entando custom resources")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/next/docs/getting-started/concepts-overview.html#entando-ingresses"}},[e._v("Entando ingresses")])],1)]),e._v(" "),n("h2",{attrs:{id:"how-a-microservice-from-a-bundle-gets-deployed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-a-microservice-from-a-bundle-gets-deployed"}},[e._v("#")]),e._v(" How a Microservice from a Bundle Gets Deployed")]),e._v(" "),n("p",[e._v("When a bundle containing a microservice is installed in the Local Hub, some behind the scenes actions take place.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("To begin, "),n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-custom-model/blob/master/src/main/resources/crd/entandoplugins.entando.org.crd.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("EntandoPlugin custom resources"),n("OutboundLink")],1),e._v(" are generated starting with the PluginDescriptor. Some fields will be automatically generated from the provided image.")]),e._v(" "),n("ul",[n("li",[e._v("From the "),n("code",[e._v("image")]),e._v(" field in the PluginDescriptor, the "),n("code",[e._v("organization")]),e._v(", "),n("code",[e._v("name")]),e._v(" and "),n("code",[e._v("version")]),e._v(" of the image will be extracted.")]),e._v(" "),n("li",[n("code",[e._v("organization")]),e._v(", "),n("code",[e._v("name")]),e._v(" and "),n("code",[e._v("version")]),e._v(" are then converted to valid characters and composed to form the plugin name ("),n("code",[e._v("metadata.name")]),e._v("), the labels ("),n("code",[e._v("metadata.labels")]),e._v(") and the ingressPath ("),n("code",[e._v("spec.ingressPath")]),e._v(") of the custom resource.")])]),e._v(" "),n("p",[n("strong",[e._v("NOTE")]),e._v(": Two PluginDescriptors having images with the same organization, name and version will generate a custom resource with the same "),n("code",[e._v("metadata.name")]),e._v(" and "),n("code",[e._v("spec.ingressPath")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("Next, a check for a microservice with the same name is performed to verify if a new deployment is required.")])]),e._v(" "),n("li",[n("p",[e._v("If a microservice with the same name does not exist in the namespace where the EntandoApp has been deployed, a new EntandoPlugin custom resource is created and deployed in that namespace, using the details defined in the bundle.")])]),e._v(" "),n("li",[n("p",[e._v("At the same time, an EntandoAppPluginLink custom resource is deployed in the namespace in order to expose the microservice ingress path on the EntandoApp ingress.")])]),e._v(" "),n("li",[n("p",[e._v("If both the EntandoPlugin and the EntandoAppPluginLink custom resources are deployed correctly, the APIs of the microservice will be available from the same domain of the EntandoApp, making it possible to reach those APIs from the EntandoApp using relative urls.")])])]),e._v(" "),n("p",[e._v("This is the standard flow when no other micorservice with the same name is already present in the EntandoApp namespace.")]),e._v(" "),n("p",[e._v("If there is an existing microservice with the same name as the one generated from the PluginDescriptor, the Local Hub will connect the EntandoApp to\nthe existing microservice by generating and deploying the required EntandoAppPluginLink per step three above.\nThis way, plugins can be reused by many applications at the same time.")]),e._v(" "),n("h2",{attrs:{id:"other-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other-options"}},[e._v("#")]),e._v(" Other Options")]),e._v(" "),n("p",[e._v("The naming convention recommended above are accurate for creating bundles and for self contained applications where the Entando Operator is managing the lifecycle of your microservices. If you have a substantial API infrastructure or intend to deploy a large number of versioned microservices, you can also utilize an API management infrastructure like API gateways. If you use an API gateway or other API abstraction layer, you will need to manually manage the ingress for the micro frontends in your application to point to the API gateway deployment.")]),e._v(" "),n("p",[e._v("In cases where conflicts occur, bundles can easily be renamed by updating metdata.")]),e._v(" "),n("h2",{attrs:{id:"kubernetes-naming-conventions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-naming-conventions"}},[e._v("#")]),e._v(" Kubernetes Naming Conventions")]),e._v(" "),n("p",[e._v("Here are a few recommendations about naming conventions extracted from the "),n("a",{attrs:{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes documentation on object names and ids"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Most resource types require a name that can be used as a DNS subdomain name as defined in RFC 1123. This means the name must:")]),e._v(" "),n("ul",[n("li",[e._v("contain no more than 253 characters")]),e._v(" "),n("li",[e._v("contain only lowercase alphanumeric characters, '-' or '.'")]),e._v(" "),n("li",[e._v("start with an alphanumeric character")]),e._v(" "),n("li",[e._v("end with an alphanumeric character")])])])}),[],!1,null,null,null);t.default=o.exports}}]);