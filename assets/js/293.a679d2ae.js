(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1048:function(e,t,o){e.exports=o.p+"assets/img/init-containers-screenshot.d39576a8.png"},1991:function(e,t,o){"use strict";o.r(t);var n=o(36),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"entando-deployment-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-deployment-structure"}},[e._v("#")]),e._v(" Entando Deployment Structure")]),e._v(" "),n("p",[e._v("This page provides an overview of the key Entando GitHub repositories with brief descriptions\nof how these repositories are realized in a running Entando deployment. It also explores the architecture behind the Entando Platform and how its functions are structured.")]),e._v(" "),n("h2",{attrs:{id:"entando-operator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-operator"}},[e._v("#")]),e._v(" Entando Operator")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("Entando Operator")]),e._v(" coordinates the installation and configuration of all of the components of an Entando Application.")]),e._v(" "),n("ul",[n("li",[e._v("GitHub: "),n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-controller-coordinator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-controller-coordinator/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("DockerHub: "),n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-controller-coordinator",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-controller-coordinator"),n("OutboundLink")],1)])]),e._v(" "),n("h4",{attrs:{id:"customization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),n("p",[e._v("Use the "),n("RouterLink",{attrs:{to:"/v7.1/docs/reference/custom-resources.html"}},[e._v("Entando custom resources")]),e._v(" to extend the platform.")],1),e._v(" "),n("h2",{attrs:{id:"database-init-containers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#database-init-containers"}},[e._v("#")]),e._v(" Database Init Containers")]),e._v(" "),n("p",[e._v("During installation, an Entando Application needs to create and initialize several databases when deploying from a backup of your images.")]),e._v(" "),n("ul",[n("li",[e._v("GitHub: "),n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-dbjob",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-dbjob"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("DockerHub: "),n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-dbjob",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-dbjob"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("The screenshot below highlights the init containers for the Entando Application schema creation, DB initialization, and component repository database.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1048),alt:"Init Containers Screenshot"}})]),e._v(" "),n("p",[e._v("Many managed Kubernetes instances like OpenShift don’t display init containers on their dashboards. If you’re troubleshooting, the logs may provide some useful information. To fetch logs for an init container using kubectl, you must\npass the container name as an argument.")]),e._v(" "),n("p",[e._v("For example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    kubectl logs YOUR-POD -c YOUR-CONTAINER-NAME -n YOUR-NAMESPACE        \n    kubectl logs default-sso-in-namespace-deployment-db-preparation-job-ddbdbddb-a  -c default-sso-in-namespace-deployment-db-schema-creation-job -n sprint1-rc\n")])])]),n("h4",{attrs:{id:"customization-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customization-2"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),n("p",[e._v("The init containers automatically restore a backup included in your application so that you can create custom images with your application setup.")]),e._v(" "),n("h2",{attrs:{id:"entando-de-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-de-app"}},[e._v("#")]),e._v(" entando-de-app")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("entando-de-app")]),e._v(" is a J2EE application and an instance of the "),n("a",{attrs:{href:"#entando-core"}},[e._v("entando-core")]),e._v(". It provides pathways for Entando Components and the server image required by the Entando Operator to manage the deployment. The pom.xml for the application reveals its dependencies.")]),e._v(" "),n("ul",[n("li",[e._v("GitHub: "),n("a",{attrs:{href:"https://github.com/entando/entando-de-app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-de-app/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("DockerHub: "),n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-de-app-eap",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-de-app-eap"),n("OutboundLink")],1),e._v(","),n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-de-app-wildfly",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-de-app-wildfly"),n("OutboundLink")],1)])]),e._v(" "),n("h4",{attrs:{id:"customization-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customization-3"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("entando-de-app")]),e._v(" is very likely to be customized as part of an Entando implementation.\nA customized image can include:")]),e._v(" "),n("ul",[n("li",[e._v("New APIs")]),e._v(" "),n("li",[e._v("Legacy Entando plugins")]),e._v(" "),n("li",[e._v("New database tables")]),e._v(" "),n("li",[e._v("Other extensions to the "),n("code",[e._v("entando-core")])])]),e._v(" "),n("p",[e._v("In most cases, microservices should be used to extend the platform. However, legacy\nintegrations, extensions to the CMS, and migrations from earlier Entando versions may require changes to the "),n("strong",[e._v("entando-de-app")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"app-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-builder"}},[e._v("#")]),e._v(" App Builder")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("App Builder")]),e._v(" is the user-friendly frontend UI for the "),n("code",[e._v("entando-de-app")]),e._v(". A ReactJS application, it is served via Node in the default deployment. It communicates with the "),n("code",[e._v("entando-de-app")]),e._v(" and the Entando Component Manager via "),n("RouterLink",{attrs:{to:"/v7.1/docs/consume/entando-apis.html"}},[e._v("REST\nAPIs")]),e._v(". The Component Manager provides information about bundles deployed to the Local Hub.")],1),e._v(" "),n("ul",[n("li",[e._v("GitHub: "),n("a",{attrs:{href:"https://github.com/entando/app-builder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/app-builder/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("DockerHub: "),n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/app-builder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/app-builder/"),n("OutboundLink")],1)])]),e._v(" "),n("h4",{attrs:{id:"customization-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customization-4"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("App Builder")]),e._v(" is customized as part of many Entando implementations.\nIt can be customized via "),n("RouterLink",{attrs:{to:"/v7.1/tutorials/create/mfe/widget-configuration.html"}},[e._v("configuration micro frontends")]),e._v(" and "),n("RouterLink",{attrs:{to:"/v7.1/tutorials/create/mfe/epc.html"}},[e._v("Entando Platform Capabilities (EPCs)")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"entando-component-manager"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-component-manager"}},[e._v("#")]),e._v(" Entando Component Manager")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("Entando Component Manager")]),e._v(" provides the link between the "),n("code",[e._v("entando-de-app")]),e._v(", or your custom core instance, and the Local Hub. It queries the Entando Kubernetes service to fetch available\nbundles that have been deployed as custom resources inside the cluster.")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("Component Manager")]),e._v(" also administers the relationships between an Entando Application and the\ninstalled plugins. This is seen in the plugin link custom resource in Kubernetes.")]),e._v(" "),n("ul",[n("li",[e._v("GitHub: "),n("a",{attrs:{href:"https://github.com/entando-k8s/entando-component-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-component-manager/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("DockerHub: "),n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-component-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-component-manager/"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"entando-k8s-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-k8s-service"}},[e._v("#")]),e._v(" entando-k8s-service")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("entando-k8s-service")]),e._v(" acts as an abstraction layer to fetch data from Kubernetes APIs. It interacts with the Local Hub to show the available bundles, installs and manages microservice plugins, and\nmonitors the status of the installed EntandoApp.")]),e._v(" "),n("ul",[n("li",[e._v("GitHub: "),n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-service/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-service/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("DockerHub: "),n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-service/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-service/"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"keycloak"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keycloak"}},[e._v("#")]),e._v(" Keycloak")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("entando-keycloak")]),e._v(" project is an extension of the base Keycloak images. It provides default themes for Entando, a customized realm and clients, and Oracle JDBC JARs for connecting to Oracle databases.")]),e._v(" "),n("ul",[n("li",[e._v("GitHub: "),n("a",{attrs:{href:"https://github.com/entando/entando-keycloak/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-keycloak/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("DockerHub: "),n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-keycloak/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-keycloak/"),n("OutboundLink")],1)])]),e._v(" "),n("h4",{attrs:{id:"customization-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customization-5"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),n("p",[e._v("The Keycloak image can be customized as part of an Entando implementation. Some common extensions are:")]),e._v(" "),n("ul",[n("li",[e._v("Change the theme")]),e._v(" "),n("li",[e._v("Add default connections")]),e._v(" "),n("li",[e._v("Add default social logins")]),e._v(" "),n("li",[e._v("Add default clients")])]),e._v(" "),n("h2",{attrs:{id:"other-key-repositories"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other-key-repositories"}},[e._v("#")]),e._v(" Other Key Repositories")]),e._v(" "),n("h3",{attrs:{id:"entando-core"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-core"}},[e._v("#")]),e._v(" entando-core")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("entando-core")]),e._v(" project is a J2EE application that exposes APIs for the Entando CMS, including the Admin Console and the Portal UI project that performs the server-side composition for pages rendered via an Entando Application. Note that only the composition is performed server-side. JavaScript code is rendered client-side. The "),n("strong",[e._v("entando-core")]),e._v(" is realized via an instance that includes the WAR files as dependencies, which are generated from the core build. In a default deployment, this is the "),n("code",[e._v("entando-de-app")]),e._v(".")]),e._v(" "),n("ul",[n("li",[e._v("GitHub: "),n("a",{attrs:{href:"https://github.com/entando/entando-core/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-core/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("DockerHub: None (deployed to Maven Central)")])]),e._v(" "),n("h4",{attrs:{id:"customization-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customization-6"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),n("p",[e._v("For users familiar with versions prior to Entando 6, there will be cases where the "),n("strong",[e._v("entando-core")]),e._v(" is customized.\nOften, these customizations will be delivered via a WAR overlay in the project instance.\nUsing a WAR overlay is a functional approach for users familiar with the process, but it is highly\nrecommended to extend the platform using microservices for new projects.")]),e._v(" "),n("h3",{attrs:{id:"entando-cms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-cms"}},[e._v("#")]),e._v(" entando-cms")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("entando-cms")]),e._v(" project is the App Builder (ReactJS) side of the Entando WCMS. It is bundled into the\nApp Builder at build time and is included in the default deployment of the App Builder in most cases.")]),e._v(" "),n("ul",[n("li",[e._v("GitHub: "),n("a",{attrs:{href:"https://github.com/entando/entando-cms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-cms/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("DockerHub: None (deployed to npm)")])]),e._v(" "),n("h4",{attrs:{id:"customization-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customization-7"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),n("p",[e._v("In some cases, the "),n("strong",[e._v("entando-cms")]),e._v(" may be customized if new custom features are added to CMS-specific\nfunctionality. However, most cases will use the more general App Builder extension points noted above.")]),e._v(" "),n("h3",{attrs:{id:"entando-kubernetes-controllers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-kubernetes-controllers"}},[e._v("#")]),e._v(" Entando Kubernetes Controllers")]),e._v(" "),n("p",[e._v("A number of controllers are available to the Entando Operator to manage installations and\ncomponents in an Entando Cluster. These are small and lightweight images that execute as\nrun-to-completion pods, managing the installation flow for different parts of the infrastructure. For more information on controllers, Entando custom\nresources, and configuring your deployment, see\n"),n("RouterLink",{attrs:{to:"/v7.1/docs/reference/custom-resources.html"}},[e._v("Custom Resources")]),e._v(".")],1),e._v(" "),n("p",[e._v("GitHub:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-composite-app-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-composite-app-controller/"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-plugin-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-plugin-controller/"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-cluster-infrastructure-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-cluster-infrastructure-controller/"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-app-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-app-controller/"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-app-plugin-link-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-app-plugin-link-controller/"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("DockerHub:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-composite-app-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-composite-app-controller/"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-plugin-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-plugin-controller/"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-cluster-infrastructure-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-cluster-infrastructure-controller/"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-app-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-app-controller/"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-app-plugin-link-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-app-plugin-link-controller/"),n("OutboundLink")],1)])]),e._v(" "),n("h4",{attrs:{id:"customization-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customization-8"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),n("p",[e._v("It is unlikely that the controllers will be customized as part of an Entando implementation.")])])}),[],!1,null,null,null);t.default=r.exports}}]);