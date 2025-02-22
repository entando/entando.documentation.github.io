(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{1680:function(t,e,a){"use strict";a.r(e);var s=a(36),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"local-development-tips-and-tricks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-development-tips-and-tricks"}},[t._v("#")]),t._v(" Local Development Tips and Tricks")]),t._v(" "),a("p",[t._v("We've collected a list of tips and tricks for optimizing your local development environment.\nWe invite you to ask questions, collaborate with the community, and share your own favorite\npractices over on the "),a("a",{attrs:{href:"https://forum.entando.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Entando forum"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[t._v("#")]),t._v(" Kubernetes")]),t._v(" "),a("p",[t._v("Per the "),a("RouterLink",{attrs:{to:"/v6.2/docs/getting-started/"}},[t._v("Getting Started")]),t._v(" guide, we've recommended using Multipass as a way to quickly spin up an Ubuntu VM to host a local Kubernetes cluster for test purposes. There are many times when a local environment is useful but most teams utilize a shared Kubernetes cluster managed by an operations team and installed either on premise or with a cloud provider for full integration testing, CI/CD, DevOps, etc.")],1),t._v(" "),a("h2",{attrs:{id:"network-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-issues"}},[t._v("#")]),t._v(" Network issues")]),t._v(" "),a("p",[t._v("A local Entando 6.2 quickstart installation (e.g. what you'll get if you follow the "),a("RouterLink",{attrs:{to:"/v6.2/docs/getting-started/"}},[t._v("Getting Started")]),t._v(" guide) uses a set of local domain names to enable accessing Entando services. Your IP address will vary but they will look something like this:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("quickstart-entando.192.168.99.1.nip.io\nquickstart-kc-entando.192.168.99.1.nip.io\nquickstart-eci-entando.192.168.99.1.nip.io\n")])])]),a("p",[t._v("The base domain configured via the ENTANDO_DEFAULT_ROUTING_SUFFIX (e.g. in your entando.yaml) is based on a fixed IP address and that address is configured during the initial installation. That setting is used to generate ingress routes to map incoming URLs to individual services. In production environments there's generally a dedicated network layer to manage IPs/routing (both on premise and cloud) but those options are often not readily available in a local setup. Here are a couple common issues that can prevent Entando from starting in a local environment:")]),t._v(" "),a("h3",{attrs:{id:"nip-io-isn-t-allowed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nip-io-isn-t-allowed"}},[t._v("#")]),t._v(" "),a("code",[t._v(".nip.io isn't allowed")])]),t._v(" "),a("ul",[a("li",[t._v("This could be because of firewall settings or corporate security policies. The simplest workaround is to manually edit your /etc/hosts file and map the necessary domains to the IP of your local virtual machine.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 192.168.99.1 quickstart-kc-entando.192.168.99.1.nip.io\n 192.168.99.1 quickstart-eci-entando.192.168.99.1.nip.io\n 192.168.99.1 quickstart-entando.192.168.99.1.nip.io\n")])])]),a("ul",[a("li",[t._v("If you add microservices to your installation, you may need to add additional mappings for the new ingresses.")]),t._v(" "),a("li",[t._v("See "),a("a",{attrs:{href:"#option-1-manually-update-your-hosts-file"}},[t._v("this section below")]),t._v(" for detailed steps on Windows.")])]),t._v(" "),a("h3",{attrs:{id:"the-ip-address-changed-after-the-initial-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-ip-address-changed-after-the-initial-install"}},[t._v("#")]),t._v(" "),a("code",[t._v("The IP address changed after the initial install")])]),t._v(" "),a("ul",[a("li",[t._v("The workaround noted above (e.g. update your /etc/hosts file) can also be used here. Simply update the IP address in the first column to use the current IP of your virtual machine.")]),t._v(" "),a("li",[t._v("On Windows this can happen simply because your laptop restarted. See "),a("a",{attrs:{href:"#hyper-v-ip-changes"}},[t._v("Windows Hyper-V IP Changes")]),t._v(" below.")])]),t._v(" "),a("h2",{attrs:{id:"windows-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-development"}},[t._v("#")]),t._v(" Windows development")]),t._v(" "),a("h3",{attrs:{id:"hyper-v-ip-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hyper-v-ip-changes"}},[t._v("#")]),t._v(" Hyper-V IP changes")]),t._v(" "),a("p",[a("strong",[t._v("Q:")]),t._v(" My Entando installation stops working when I restart Windows. How can I fix this?")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" The basic issue is that Windows Hyper-V makes it difficult to set\na static IP for a VM. (See this "),a("a",{attrs:{href:"https://techcommunity.microsoft.com/t5/windows-insider-program/hyper-v-default-switch-ip-address-range-change-ver-1809-build/m-p/261431",target:"_blank",rel:"noopener noreferrer"}},[t._v("forum post"),a("OutboundLink")],1),t._v(" for details.) As discussed "),a("a",{attrs:{href:"#network-issues"}},[t._v("above")]),t._v(", Entando's ingress routes rely on an fixed IP address and will break if the IP address changes after initial installation. Here are a few options to solve this issue, short of modifying your router or network switch settings:")]),t._v(" "),a("h4",{attrs:{id:"option-1-manually-update-your-hosts-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-1-manually-update-your-hosts-file"}},[t._v("#")]),t._v(" Option 1: Manually update your hosts file")]),t._v(" "),a("p",[t._v("The simplest option to re-enable external access to your cluster is to update your hosts file after each Windows restart.")]),t._v(" "),a("p",[t._v("You need two pieces of information for this workaround and you'll need administrator access to do this.")]),t._v(" "),a("ol",[a("li",[t._v("Determine the original IP used for your VM. This is included in the "),a("code",[t._v("ENTANDO_DEFAULT_ROUTING_SUFFIX")]),t._v(" or you can see it included in the ingress names. Run "),a("code",[t._v(" kubectl -n entando get ingress")]),t._v(" and you should see something like this:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("NAME                          CLASS    HOSTS                                           \nquickstart-kc-ingress         <none>   quickstart-kc-entando.192.168.235.100.nip.io  \nquickstart-eci-ingress        <none>   quickstart-eci-entando.192.168.235.100.nip.io  \nquickstart-ingress            <none>   quickstart-entando.192.168.235.100.nip.io    \n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Determine the current IP using "),a("code",[t._v("hostname -I")]),t._v(" in the VM or by running "),a("code",[t._v("multipass list")]),t._v(" from Windows:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ multipass list\nName                    State             IPv4             Image\nprimary                 Running           172.31.118.12   Ubuntu 18.04 LTS\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("As a Windows administrator, edit your hosts file "),a("code",[t._v("(C:\\Windows\\System32\\drivers\\etc\\hosts)")]),t._v(" to map any needed URLs from the old IP to the new IP. This will bypass .nip.io lookups.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("172.31.118.12 quickstart-kc-entando.192.168.235.100.nip.io\n172.31.118.12 quickstart-eci-entando.192.168.235.100.nip.io\n172.31.118.12 quickstart-entando.192.168.235.100.nip.io\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("You should now be able to access your Entando URLs via the new IP. If your Entando installation stalled during startup, it should continue starting up as soon as the external address is functional again.")])]),t._v(" "),a("h4",{attrs:{id:"option-2-add-a-windows-route"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-2-add-a-windows-route"}},[t._v("#")]),t._v(" Option 2: Add a Windows route")]),t._v(" "),a("p",[t._v("This option is a little more involved the first time but it means repairing your network settings can be done very easily later. In this case you'll pick a static IP, configure a Windows route to map it to the Hyper-V interface, and claim the IP in the Ubuntu VM via a netplan entry.")]),t._v(" "),a("p",[t._v("You'll need to run all of these steps before installing Entando the first time but then just steps #1 and #2 after subsequent Windows restarts.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Determine an IP that is unused on your local network. You can use ping or other tools for this but in the following steps we assume that your selected IP is 192.168.99.1.")])]),t._v(" "),a("li",[a("p",[t._v("Determine the interface address to Hyper-V, e.g. 32 below. Use cmd "),a("code",[t._v("route print")]),t._v(" and look for the Interface entry for Hyper-V:")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Interface List\n 32...00 15 5d 86 45 20 ......Hyper-V Virtual Ethernet Adapter\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Using elevated privileges, add a persistent route to map your IP to the Hyper-V interface:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("route -p add [YOUR-IP] mask 255.255.255.255 0.0.0.0 IF [HYPER-V-INTERFACE]\nroute -p add 192.168.99.1 mask 255.255.255.255 0.0.0.0 IF 32\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("Verify the route was added by using "),a("code",[t._v("route print 192.168.99.1")]),t._v(". This command is useful after restart to check if the route needs to be created again.")])]),t._v(" "),a("li",[a("p",[t._v("Next, configure your VM to claim the same address. Shell into the VM using "),a("code",[t._v("winpty multipass shell [YOUR-VM-NAME]")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Change to the root user to make the following steps simpler: "),a("code",[t._v("sudo -i")])])]),t._v(" "),a("li",[a("p",[t._v("Determine your network adapter via "),a("code",[t._v("ip link")]),t._v(", e.g. eth0. You just need the name. It's often second in the list after the loopback adapter.")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ubuntu@primary:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": lo: "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("LOOPBACK,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v(" qdisc noqueue state UNKNOWN mode DEFAULT group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": eth0: "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BROADCAST,MULTICAST,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),t._v(" qdisc mq state UP mode DEFAULT group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    link/ether 00:15:5d:00:1a:0c brd ff:ff:ff:ff:ff:ff\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[a("p",[a("code",[t._v("cd /etc/netplan")])])]),t._v(" "),a("li",[a("p",[t._v("Create a netplan entry starting with 0 so it's loaded first: "),a("code",[t._v("vi 0-entando.yaml")])])])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("renderer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networkd\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ethernets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("YOUR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("NETWORK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ADAPTER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dhcp4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addresses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("YOUR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/24\n")])])]),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("renderer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networkd\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ethernets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eth0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dhcp4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addresses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 192.168.99.1/24\n")])])]),a("ol",{attrs:{start:"10"}},[a("li",[a("p",[t._v("Apply the changes via "),a("code",[t._v("netplan apply")])])]),t._v(" "),a("li",[a("p",[t._v("Verify connectivity via "),a("code",[t._v("ping 192.168.99.1")]),t._v(" from the VM. You should get a response rather than a timeout.")])]),t._v(" "),a("li",[a("p",[t._v("(Optional) Run a python server to verify you can access the VM from the host at "),a("code",[t._v("http://192.168.99.1:8000.")]),t._v(" It may take a minute or so before the server is ready.")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python3 -m http.server 8000\n")])])]),a("ol",{attrs:{start:"13"}},[a("li",[t._v("You should now be able to install Entando using the static IP. If your Entando installation stalled during startup and was previously configured using the static IP, it should continue starting up as soon as the external address is functional again.")])]),t._v(" "),a("h4",{attrs:{id:"option-3-reinstall-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-3-reinstall-entando"}},[t._v("#")]),t._v(" Option 3: Reinstall Entando")]),t._v(" "),a("p",[t._v("We're including this option because it works and requires no additional configuration. If you plan to regularly work with Entando we recommend developing against a centralized and shared Kubernetes instance rather than running a full stack locally. If you need a cluster locally we recommend using option 1 or 2.")]),t._v(" "),a("h3",{attrs:{id:"jhipster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jhipster"}},[t._v("#")]),t._v(" JHipster")]),t._v(" "),a("p",[a("strong",[t._v("Q:")]),t._v(" How can I run JHipster on Windows?")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" JHipster requires a TTY interface for its menus to function correctly. Here are a few options to satisfy that requirement on Windows:")]),t._v(" "),a("ul",[a("li",[t._v("Run "),a("code",[t._v("jhipster")]),t._v(" under cmd or Powershell")]),t._v(" "),a("li",[t._v("Using Git Bash, run "),a("code",[t._v("winpty jhipster.cmd")])]),t._v(" "),a("li",[t._v("Use Ubuntu bash via WSL (1 or 2) or within the Multipass VM")])]),t._v(" "),a("h3",{attrs:{id:"multipass-with-virtualbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multipass-with-virtualbox"}},[t._v("#")]),t._v(" Multipass with VirtualBox")]),t._v(" "),a("p",[t._v("Multipass supports the use of VirtualBox on Windows as an alternative to using Hyper-V, say if you're using Windows Home. See the Multipass documentation on how to configure it to work with VirtualBox.")]),t._v(" "),a("p",[t._v("In order to get Entando working correctly with this setup you will need to add a port forwarding rule so you can access Entando from your host system.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Create your VM within Multipass.")])]),t._v(" "),a("li",[a("p",[t._v("Go to the Oracle VM VirtualBox Manager and edit the "),a("code",[t._v("Network")]),t._v(" settings for the VM.")])]),t._v(" "),a("li",[a("p",[t._v("Go to the "),a("code",[t._v("Advanced")]),t._v(" options and click "),a("code",[t._v("Port Forwarding Rules")])])]),t._v(" "),a("li",[a("p",[t._v("Add a new rule.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Name")]),t._v(": your choice")]),t._v(" "),a("li",[a("code",[t._v("Protocol")]),t._v(": TCP")]),t._v(" "),a("li",[a("code",[t._v("Host IP")]),t._v(": leave this blank")]),t._v(" "),a("li",[a("code",[t._v("Host Port")]),t._v(": 80")]),t._v(" "),a("li",[a("code",[t._v("Guest IP")]),t._v(": leave this blank")]),t._v(" "),a("li",[a("code",[t._v("Guest Port")]),t._v(": 80")]),t._v(" "),a("li",[t._v("Click OK")])])]),t._v(" "),a("li",[a("p",[t._v("At this point any requests to port 80 on your localhost should be forwarded to the VM.")])]),t._v(" "),a("li",[a("p",[t._v("You can now identify the IP of your host and use that to configure the "),a("code",[t._v("ENTANDO_DEFAULT_ROUTING_SUFFIX")]),t._v(" in your yaml file, e.g. "),a("code",[t._v("192.168.64.25.nip.io")]),t._v(". You should not use the non-routable address (e.g. 10.0.2.15) identified from within the guest VM itself, but rather use the IP of the host.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);