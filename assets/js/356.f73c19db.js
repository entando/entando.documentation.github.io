(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{1461:function(t,e,a){"use strict";a.r(e);var n=a(36),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"profile-and-configuration-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profile-and-configuration-management"}},[t._v("#")]),t._v(" Profile and Configuration Management")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/next/docs/getting-started/entando-cli.html"}},[t._v("Entando CLI")]),t._v(" can define a collection of configuration variables to fully describe an Entando instance. One or more profiles can be created to store configuration settings for a particular instance. A profile with this information is automatically generated for a quickstart application.")],1),t._v(" "),a("p",[t._v("At minimum, a profile configuration must consist of the key-value pairs specifying the application name and namespace. To run the application, the Kubernetes connection must also be provided. Cloud Kubernetes tools typically create a Kube context, which can be linked to an Entando profile.")]),t._v(" "),a("h2",{attrs:{id:"profile-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profile-management"}},[t._v("#")]),t._v(" Profile Management")]),t._v(" "),a("p",[t._v("Common operations associated with profile management are detailed below.")]),t._v(" "),a("p",[t._v("Note: The "),a("code",[t._v("ent profile")]),t._v(" command is available to manage and switch between the configurations of different Entando instances. Refer to "),a("code",[t._v("ent profile first-use-readme")]),t._v(" for additional information.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Command")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent attach-kubeconfig [kubeconfig-file]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Attach to a kubeconfig")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent attach-vm [vm-name]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Attach to a managed virtual machine")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent list-kubectx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Return a list of Kubernetes contexts")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent pro delete [profileName]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Delete a profile")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent pro link [contextName]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Link the current profile to a Kubernetes context")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent pro list")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Print a list of the available profiles")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent pro new [profileName] [EntandoAppName] [namespace]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Create and switch to a new profile")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent pro use [profileName]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Activate the default profile")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('ent set-kubectl-cmd "[command]" [--kubeconfig=[config]]')])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Provide a custom command")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent status")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Return current connection and profile information")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("source ent pro use [profileName]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Activate the current profile")])])])]),t._v(" "),a("p",[a("strong",[t._v("Command details:")])]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("ent pro link")]),t._v(": Provides ent with instructions to connect to the Kubernetes containing the Entando Application. Alias of "),a("code",[t._v("ent attach-kubectx")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("ent pro new")]),t._v(": Sets the minimal profile data and outputs next steps.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("ent pro use")]),t._v(": Initializes the global profile ent should use across shells.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("source ent pro use")]),t._v(': Initializes the local profile ent should use within the current shell. Allows ent instances in different shells to simultaneously use different Kube contexts, kubeconfigs or custom commands. The quickstart script creates a profile named "qs--{vmname}" that is associated with the Entando Application it generates.')])])]),t._v(" "),a("h2",{attrs:{id:"configuration-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-management"}},[t._v("#")]),t._v(" Configuration Management")]),t._v(" "),a("p",[t._v("The output of "),a("code",[t._v("ent config")]),t._v(" is a key-value archive of configuration settings related to the current profile. The following commands and definitions are especially useful.")]),t._v(" "),a("h3",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Command")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent config --edit")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Interactively edit a config archive")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent config --get {key}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Return the value of a config key")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent config --print")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Print the current config archive")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent config --set {key}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Delete a config key")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ent config --set {key} {value}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Set the value of a config key")])])])]),t._v(" "),a("h3",{attrs:{id:"keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[t._v("#")]),t._v(" Keys")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ENTANDO_NAMESPACE")]),t._v(" "),a("td",[t._v("Stores the fallback namespace used by explicit or implicit runs of "),a("code",[t._v("ent kubectl")])])]),t._v(" "),a("tr",[a("td",[t._v("ENTANDO_APPNAME")]),t._v(" "),a("td",[t._v("Stores the Entando Application name related to the current profile")])]),t._v(" "),a("tr",[a("td",[t._v("DESIGNATED_JAVA_HOME")]),t._v(" "),a("td",[t._v("Stores the path of the Java version used internally by ent")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);