(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{1139:function(e,t,n){e.exports=n.p+"assets/img/ecr-architecture.224007f3.png"},2061:function(e,t,n){"use strict";n.r(t);var a=n(36),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"entando-local-hub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-local-hub"}},[e._v("#")]),e._v(" Entando Local Hub")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("The Entando Local Hub is a repository of modular components accessible from an Entando App Builder. The Entando Bundles available to the Entando Application are represented in the Local Hub and can be deployed, installed, updated or versioned using the App Builder UI.")]),e._v(" "),a("p",[e._v("The functional blocks and services of the Local Hub are examined below in further detail.")]),e._v(" "),a("h3",{attrs:{id:"entando-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-component"}},[e._v("#")]),e._v(" Entando Component")]),e._v(" "),a("p",[e._v("Entando defines a component as an identifiable resource or block of code that can be used in an Entando Application. Examples of components are widgets, micro frontends, content types, labels, plugins, and static resources.")]),e._v(" "),a("h3",{attrs:{id:"entando-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-bundle"}},[e._v("#")]),e._v(" Entando Bundle")]),e._v(" "),a("p",[e._v("An "),a("RouterLink",{attrs:{to:"/v7.2/docs/getting-started/concepts-overview.html#entando-bundle"}},[e._v("Entando Bundle")]),e._v(" is a package containing one or more components, the required descriptor files, and bundle metadata.")],1),e._v(" "),a("p",[e._v("A git-based bundle requires a "),a("code",[e._v("descriptor.yaml")]),e._v(" and is published in a Git registry. A docker-based bundle requires an "),a("code",[e._v("entando.json")]),e._v(" and is published to Docker. Both git-based and docker-based bundles are shared with an Entando Application using the EntandoDeBundle custom resource.")]),e._v(" "),a("h3",{attrs:{id:"entandodebundle-custom-resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entandodebundle-custom-resource"}},[e._v("#")]),e._v(" EntandoDeBundle Custom Resource")]),e._v(" "),a("p",[e._v("The EntandoDeBundle custom resource is a Kubernetes resource read by the Entando Operator. It provides information about an Entando Bundle and makes the bundle available to the Entando Component Manager in Kubernetes.")]),e._v(" "),a("h3",{attrs:{id:"entando-component-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-component-manager"}},[e._v("#")]),e._v(" Entando Component Manager")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/v7.2/docs/compose/ecm-overview.html"}},[e._v("Entando Component Manager")]),e._v(" creates the connection between the EntandoApp\nand the Entando Kubernetes integration service. It is part of the EntandoApp and communicates with both the "),a("code",[e._v("entando-core")]),e._v(" and the Kubernetes cluster. It is also responsible for the installation and removal of components from the "),a("code",[e._v("entando-core")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"entando-kubernetes-integration-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-kubernetes-integration-service"}},[e._v("#")]),e._v(" Entando Kubernetes Integration Service")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/v7.2/docs/getting-started/concepts-overview.html#entando-kubernetes-service"}},[e._v("Entando Kubernetes integration service")]),e._v(", or "),a("code",[e._v("entando-k8S-service")]),e._v(", is part of the platform infrastructure and responsible for the low-level communication with the K8s cluster API. It reads the bundles in an Entando Cluster and serves them with an API accessible from the App Builder.")],1),e._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("p",[a("img",{attrs:{src:n(1139),alt:"ECR Architecture"}})]),e._v(" "),a("p",[e._v("The following flow describes how the App Builder, Entando Kubernetes integration service and Entando Component Manager interact to populate the Local Hub with available bundles.")]),e._v(" "),a("h3",{attrs:{id:"example-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-flow"}},[e._v("#")]),e._v(" Example Flow")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The user navigates to the Hub page in the App Builder to view the bundles shared with that EntandoApp")])]),e._v(" "),a("li",[a("p",[e._v("The App Builder requests a list of bundles available to the EntandoApp from the Entando Component Manager")])]),e._v(" "),a("li",[a("p",[e._v("The Entando Component Manager queries the "),a("code",[e._v("entando-k8S-service")]),e._v(" to retrieve the list of bundles")])]),e._v(" "),a("li",[a("p",[e._v("The "),a("code",[e._v("entando-k8s-service")]),e._v(" queries the cluster/namespace(s) and returns the list of available bundles to the Entando Component Manager")])]),e._v(" "),a("li",[a("p",[e._v("The Entando Component Manager sends the list of bundles to the App Builder")])]),e._v(" "),a("li",[a("p",[e._v("The available bundles appear in the Hub page of the App Builder, where they can be installed and managed by the user")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);