(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{1842:function(e,t,a){"use strict";a.r(t);var n=a(36),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation-on-openshift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-openshift"}},[e._v("#")]),e._v(" Installation on OpenShift")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This tutorial shows how to manually install Entando into OpenShift 3.11 or 4.x. If you're working with OpenShift 4.6+ then you also have the option of using the Red Hat-certified Entando Operator which should be available in your OperatorHub thanks to the Red Hat Marketplace. See "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/devops/installation/open-shift/openshift-install-by-operator-hub.html"}},[e._v("this tutorial")]),e._v(" for instructions specific to the "),a("code",[e._v("Entando Operator.")])],1),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("An OpenShift installation (3.11 or 4.x)")]),e._v(" "),a("li",[a("code",[e._v("oc")]),e._v(" command line tool")]),e._v(" "),a("li",[e._v("A helm 3 client")])]),e._v(" "),a("h2",{attrs:{id:"local-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-installation"}},[e._v("#")]),e._v(" Local Installation")]),e._v(" "),a("p",[e._v("If you want to run OpenShift in your local development environment you can run Minishift (OpenShift 3.11) or Code Ready Containers (OpenShift 4). Use the local development version that matches the cluster where you intend to deploy your application.")]),e._v(" "),a("p",[e._v("For Minishift: "),a("a",{attrs:{href:"https://docs.okd.io/3.11/minishift/getting-started/installing.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.okd.io/3.11/minishift/getting-started/installing.html"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("For CRC: "),a("a",{attrs:{href:"https://developers.redhat.com/products/codeready-containers/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.redhat.com/products/codeready-containers/download"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Once you've completed the installation above capture the local IP address of your development instance using "),a("code",[e._v("minishift ip")]),e._v(" or "),a("code",[e._v("crc ip")]),e._v(". You'll need it when configuring your Entando application.")]),e._v(" "),a("p",[e._v("Login to your OpenShift environment from the command line with "),a("code",[e._v("oc login")]),e._v(" using the URL and credentials for your cluster.")]),e._v(" "),a("h3",{attrs:{id:"install-the-entando-custom-resource-definitions-crds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-entando-custom-resource-definitions-crds"}},[e._v("#")]),e._v(" Install the Entando Custom Resource Definitions (CRDs)")]),e._v(" "),a("p",[e._v("Once per cluster you need to deploy the "),a("code",[e._v("Entando Custom Resources")]),e._v(". This is the only step in this guide that requires cluster level access. If you are running on Minishift or CRC make sure you are connected using the administrator login provided when you started your local instance.")]),e._v(" "),a("ol",[a("li",[e._v("Download the Custom Resource Definitions (CRDs) and unpack them:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -L -C - https://raw.githubusercontent.com/entando/entando-releases/v6.3.0/dist/qs/custom-resources.tar.gz | tar -xz\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Install the Entando CRDs:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("oc create -f dist/crd\n")])])]),a("h3",{attrs:{id:"get-your-cluster-default-ingress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-your-cluster-default-ingress"}},[e._v("#")]),e._v(" Get your Cluster Default Ingress")]),e._v(" "),a("p",[e._v("If you're deploying on a managed cluster get the default hostname from your cluster administrator. Entando uses wildcard addressing to connect different parts of your Entando application and the default route for applications exposed on your cluster is needed. You'll set this value in step 3 below.")]),e._v(" "),a("h3",{attrs:{id:"setup-and-deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-deploy"}},[e._v("#")]),e._v(" Setup and Deploy")]),e._v(" "),a("ol",[a("li",[e._v("Download and unpack the entando-helm-quickstart release you want to use from here:\n"),a("a",{attrs:{href:"https://github.com/entando-k8s/entando-helm-quickstart/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-helm-quickstart/releases"),a("OutboundLink")],1)])]),e._v(" "),a("ul",[a("li",[e._v("See the included README file for more information on the following steps.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -sfL https://github.com/entando-k8s/entando-helm-quickstart/archive/v6.3.0.tar.gz | tar xvz\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Change into the new directory")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd entando-helm-quickstart-6.3.0\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Edit "),a("code",[e._v("values.yaml")]),e._v("in the root directory:\n"),a("ul",[a("li",[e._v("Set "),a("code",[e._v("supportOpenshift: true")])]),e._v(" "),a("li",[e._v("If you're deploying to a managed cluster:\n"),a("ul",[a("li",[e._v("Set "),a("code",[e._v("ENTANDO_DEFAULT_ROUTING_SUFFIX")]),e._v(" to the default URL of applications deployed in your OpenShift cluster. If you're unsure of this value, please check with your cluster administrator for this URL.")]),e._v(" "),a("li",[e._v("Entando will create applications using that default URL and relies on wildcard DNS resolution.")])])]),e._v(" "),a("li",[e._v("If you're using Minishift or CRC:\n"),a("ul",[a("li",[e._v("Set "),a("code",[e._v("ENTANDO_DEFAULT_ROUTING_SUFFIX")]),e._v(" to the value from "),a("code",[e._v("minishift ip")]),e._v(" or "),a("code",[e._v("crc ip")]),e._v(" plus "),a("code",[e._v("nip.io")]),e._v(". For example, "),a("code",[e._v("ENTANDO_DEFAULT_ROUTING_SUFFIX: 192.168.64.10.nip.io")])])])]),e._v(" "),a("li",[e._v("See "),a("a",{attrs:{href:"#appendix-b-example-values-yaml-file-for-helm-quickstart"}},[e._v("Appendix B")]),e._v(" for an example values.yaml")])])]),e._v(" "),a("li",[e._v("Create the Entando namespace:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("oc new-project entando\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Update helm dependencies:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("helm dependency update\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Run helm to generate the template file:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("helm template my-app --namespace=entando ./ > my-app.yaml\n")])])]),a("ul",[a("li",[e._v("If you're using Helm 2 instead of Helm 3, then replace "),a("code",[e._v("helm template my-app")]),e._v(" with "),a("code",[e._v("helm template --name=my-app")])])]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Deploy Entando via")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("oc create -f my-app.yaml\n")])])]),a("ul",[a("li",[e._v("If you see this error "),a("code",[e._v('no matches for kind "Deployment" in version "extensions/v1beta1"')]),e._v(", then you'll need to edit my-app.yaml and set "),a("code",[e._v('apiVersion: "apps/v1"')]),e._v(" for the Deployment.")])]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Watch Entando startup")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("oc get pods -n entando --watch\n")])])]),a("ul",[a("li",[e._v("This step is complete when the "),a("code",[e._v("quickstart-server")]),e._v(" pod shows 3/3 running. For example,")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("quickstart-server-deployment-6c89fb49f7-gpmqc   3/3   Running   0     72s\n")])])]),a("ul",[a("li",[e._v("The full pod name will differ but by default will start with "),a("code",[e._v("quickstart-server-deployment")]),e._v(".")])]),e._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[e._v("Check for the Entando ingresses using "),a("code",[e._v("oc describe ingress -n entando")]),e._v(". This is a snippet:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Name:             quickstart-ingress\nNamespace:        entando\nAddress:          \nDefault backend:  default-http-backend:80 (<none>)\nRules:\n  Host                                 Path  Backends\n  ----                                 ----  --------\n  quickstart-entando.192.168.64.10.nip.io  \n                                       /entando-de-app     quickstart-server-service:8080 (<none>)\n                                       /digital-exchange   quickstart-server-service:8083 (<none>)\n                                       /app-builder/       quickstart-server-service:8081 (<none>)\n")])])]),a("p",[e._v("The host path in the configuration above plus "),a("code",[e._v("/app-builder/")]),e._v(" (trailing slash is important) will allow you to log into your environment. For example,\n"),a("code",[e._v("http://quickstart-entando.192.168.64.10.nip.io/app-builder/")])]),e._v(" "),a("h2",{attrs:{id:"appendix-a-troubleshooting-and-common-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-troubleshooting-and-common-errors"}},[e._v("#")]),e._v(" Appendix A - Troubleshooting and Common Errors")]),e._v(" "),a("h3",{attrs:{id:"permission-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permission-errors"}},[e._v("#")]),e._v(" Permission Errors")]),e._v(" "),a("p",[e._v("If you get OpenShift permission errors deploying your Entando application into your OpenShift namespace make sure your user has the "),a("code",[e._v("escalate")]),e._v(" and "),a("code",[e._v("bind")]),e._v(" verbs on Roles in the namespace you're deploying to. Ultimately you need this command to "),a("code",[e._v("oc auth can-i escalate role")]),e._v(" to return "),a("code",[e._v("yes")]),e._v(". That access is only required in the namespace where you are deploying your Entando application. No cluster level access is required.")]),e._v(" "),a("p",[e._v("Check with your cluster administrator if you need help assigning these roles. Generally this requires the creation of a role with those permissions, preferably a ClusterRole, and then depending on how administrators manage security your Entando installer needs to be given that role in the target namespace. So let's assume the clusterRole we create is "),a("code",[e._v("entando-installer")]),e._v(" and the user's name is john, on OpenShift creating the rolebinding would be:\n"),a("code",[e._v("oc policy add-role-to-user entando-installer john -n <your-namespace>")])]),e._v(" "),a("p",[e._v("Before installing, we suggest running "),a("code",[e._v("oc auth can-i escalate role")]),e._v(' with your given user in the targeted namespace. If it says "yes" you should be able to install.')]),e._v(" "),a("h3",{attrs:{id:"forbidden-error-installing-entando-custom-resource-definitions-in-minishift-or-crc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forbidden-error-installing-entando-custom-resource-definitions-in-minishift-or-crc"}},[e._v("#")]),e._v(" Forbidden Error installing Entando Custom Resource Definitions in Minishift or CRC")]),e._v(" "),a("p",[e._v("If you get an error like the one below installing the CRDs in your local instance you need to login using the administrator role.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/opt/ocInstallLocal$ oc create -f dist/crd/\nError from server (Forbidden): error when creating "dist/crd/EntandoAppCRD.yaml": customresourcedefinitions.apiextensions.k8s.io is forbidden: User "developer" cannot create resource "customresourcedefinitions" in API group "apiextensions.k8s.io" at the cluster scope\n')])])]),a("p",[e._v("The administrator credentials are printed when you started your local cluster in a message like this one:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("To access the cluster, first set up your environment by following 'crc oc-env' instructions\nINFO Then you can access it by running 'oc login -u developer -p developer https://api.crc.testing:6443'\nINFO To login as an admin, username is 'kubeadmin' and password is xxxx-xxxx-xxxx-xxxx\n")])])]),a("h3",{attrs:{id:"application-is-not-available-when-accessing-app-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-is-not-available-when-accessing-app-builder"}},[e._v("#")]),e._v(" Application is not available when accessing app builder")]),e._v(" "),a("p",[e._v('If you get the message "Application is not available" when accessing the app-builder make sure to include a trailing slash in the URL. For example,\nhttp://quickstart-entando.192.168.64.10.nip.io/app-builder/')]),e._v(" "),a("h3",{attrs:{id:"network-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-issues"}},[e._v("#")]),e._v(" Network Issues")]),e._v(" "),a("p",[e._v("If you see errors when images are being retrieved (resulting in errors like ErrImagePull or ImagePullBackOff), you may want to start crc using "),a("code",[e._v('crc start -n "8.8.8.8')]),e._v(" or configure the nameserver using "),a("code",[e._v("crc config set nameserver 8.8.8.8")]),e._v(" before running "),a("code",[e._v("crc start")]),e._v(". This will allow the cluster to perform DNS lookups via Google's public DNS server.")]),e._v(" "),a("p",[e._v("If you're on Windows, you should also check out the notes "),a("RouterLink",{attrs:{to:"/v6.3/docs/reference/local-tips-and-tricks.html"}},[e._v("here")]),e._v(" since Minishift and CRC rely on Windows Hyper-V by default. This can result in network issues when the host computer is restarted.")],1),e._v(" "),a("h2",{attrs:{id:"appendix-b-example-values-yaml-file-for-helm-quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-b-example-values-yaml-file-for-helm-quickstart"}},[e._v("#")]),e._v(" Appendix B - Example values.yaml file for Helm Quickstart")]),e._v(" "),a("p",[e._v("The example below includes configuration for deployment on a locally installed instance:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('app:\n  name: quickstart\n  dbms: none\n#externalDatabase:\n#  host: some.db.host\n#  port: 32432\n#  databaseName: sampledb\n#  username:\n#  password:\noperator:\n  supportOpenshift: true\n  env:\n    ENTANDO_DOCKER_IMAGE_VERSION_FALLBACK: 6.0.0\n    #ENTANDO_DOCKER_REGISTRY_OVERRIDE: docker.io # Remove comment if you want to always use a specific docker registry\n    #ENTANDO_DOCKER_IMAGE_ORG_OVERRIDE: entando # Remove the comment if you want to always use a specific docker organization\n    ENTANDO_DEFAULT_ROUTING_SUFFIX: 192.168.64.10.nip.io\n    ENTANDO_POD_READINESS_TIMEOUT_SECONDS: "1000"\n    ENTANDO_POD_COMPLETION_TIMEOUT_SECONDS: "1000"\n    ENTANDO_DISABLE_KEYCLOAK_SSL_REQUIREMENT: "true"\n    ENTANDO_K8S_OPERATOR_IMPOSE_DEFAULT_LIMITS: "false"\n    ENTANDO_K8S_OPERATOR_FORCE_DB_PASSWORD_RESET: "true"\n  tls:\n    caCrt:\n    tlsCrt:\n    tlsKey:\ndeployPDA: false\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);