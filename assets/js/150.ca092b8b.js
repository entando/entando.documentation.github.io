(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1470:function(e,n,s){"use strict";s.r(n);var t=s(36),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"check-ingresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-ingresses"}},[e._v("#")]),e._v(" Check Ingresses")]),e._v(" "),t("p",[e._v("The Entando Operator and custom resource controllers manage the ingresses which allow external access to services within an Entando cluster. The following directions show you how to examine these ingresses with two different methods.")]),e._v(" "),t("h2",{attrs:{id:"using-the-openshift-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-openshift-dashboard"}},[e._v("#")]),e._v(" Using the OpenShift Dashboard")]),e._v(" "),t("p",[e._v("In the OpenShift dashboard, ingresses are not exposed directly as pods and deployments. The dashboard provides direct access to the ingress routes under the "),t("code",[e._v("Applications")]),e._v(" → "),t("code",[e._v("Routes")]),e._v(" menu.")]),e._v(" "),t("p",[t("img",{attrs:{src:s(536),alt:"Routes panel"}})]),e._v(" "),t("p",[e._v("To see the ingress resources, choose "),t("code",[e._v("Resources")]),e._v("  → "),t("code",[e._v("Other resources")]),e._v(" from the left navigation menu. From the drop-down, select "),t("code",[e._v("Ingress")]),e._v(" and you should see the ingresses available in that namespace or project.")]),e._v(" "),t("p",[t("img",{attrs:{src:s(537),alt:"Ingress panel"}})]),e._v(" "),t("h2",{attrs:{id:"using-kubectl-from-the-command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-kubectl-from-the-command-line"}},[e._v("#")]),e._v(" Using kubectl from the Command Line")]),e._v(" "),t("ul",[t("li",[e._v("From the command line, use the following command with the namespace of your cluster:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl get ingress -n YOUR-NAMESPACE\n")])])]),t("p",[e._v("Here is an example of the result for the namespace entando:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> kubectl get ingress -n entando\n\nNAME                               CLASS    HOSTS                             ADDRESS         PORTS   AGE\ndefault-sso-in-namespace-ingress   nginx   quickstart.192.168.64.15.nip.io   192.168.64.15   80      19d\nquickstart-ingress                 nginx   quickstart.192.168.64.15.nip.io   192.168.64.15   80      19d\n")])])]),t("ul",[t("li",[e._v("For more details about a specific ingress, use the kubectl "),t("code",[e._v("get")]),e._v(" command, specifying the ingress name you want to check and the "),t("code",[e._v("yaml")]),e._v(" output format.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> kubectl get ingress -n local quickstart-ingress -o yaml\n\napiVersion: extensions/v1\nkind: Ingress\nmetadata:\n  creationTimestamp: "2020-05-13T15:27:08Z"\n  generation: 1\n  labels:\n    EntandoApp: qst\n  managedFields:\n  - apiVersion: extensions/v1beta1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:status:\n        f:loadBalancer:\n          f:ingress: {}\n    manager: nginx-ingress-controller\n    operation: Update\n    time: "2020-05-13T15:27:08Z"\n  name: qst-ingress\n  namespace: local\n  ownerReferences:\n  - apiVersion: entando.org/v1\n    blockOwnerDeletion: true\n    controller: true\n    kind: EntandoApp\n    name: qst\n    uid: aa7053e1-fd8b-419f-bdee-df3018c013fa\n  resourceVersion: "16802097"\n  selfLink: /apis/extensions/v1beta1/namespaces/local/ingresses/qst-ingress\n  uid: e9b6f027-369a-4b84-b4b1-736a6e49f180\nspec:\n  rules:\n  - host: local.192.168.1.9.nip.io\n    http:\n      paths:\n      - backend:\n          serviceName: qst-server-service\n          servicePort: 8080\n        path: /entando-de-app\n        pathType: ImplementationSpecific\n      - backend:\n          serviceName: qst-server-service\n          servicePort: 8083\n        path: /digital-exchange\n        pathType: ImplementationSpecific\n      - backend:\n          serviceName: qst-server-service\n          servicePort: 8081\n        path: /app-builder/\n        pathType: ImplementationSpecific\nstatus:\n  loadBalancer:\n    ingress:\n    - ip: 127.0.0.1\n')])])]),t("p",[t("strong",[e._v("Learn More")])]),e._v(" "),t("ul",[t("li",[e._v("Learn more about "),t("RouterLink",{attrs:{to:"/next/docs/getting-started/concepts-overview.html"}},[e._v("Entando ingresses and architecture")])],1),e._v(" "),t("li",[e._v("For more details about ingress concepts in Kubernetes, please refer to the "),t("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes Ingress documentation"),t("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);n.default=a.exports},536:function(e,n,s){e.exports=s.p+"assets/img/openshift-routes-panel.b4956e8d.png"},537:function(e,n,s){e.exports=s.p+"assets/img/openshift-ingress-resources-panel.56f5bd81.png"}}]);