(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{1645:function(e,t,o){"use strict";o.r(t);var n=o(36),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"build-and-deploy-an-entando-bundle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-and-deploy-an-entando-bundle"}},[e._v("#")]),e._v(" Build and Deploy an Entando Bundle")]),e._v(" "),o("p",[e._v("This page will walk you through building a docker image from your microservice, creating your Entando bundle, checking your bundle into git, and deploying it to the Entando Component Repository.")]),e._v(" "),o("p",[e._v("If you haven't run the generator yet head to the tutorial on running the "),o("RouterLink",{attrs:{to:"/v6.2/tutorials/backend-developers/generate-microservices-and-micro-frontends.html"}},[e._v("Entando Component Generator")]),e._v(" first and you'll be at the starting point for this one.")],1),e._v(" "),o("p",[e._v("You'll need:")]),e._v(" "),o("ul",[o("li",[e._v("Docker")]),e._v(" "),o("li",[e._v("A running Entando instance (see "),o("a",{attrs:{href:"../../docs/getting-started"}},[e._v("Getting Started")]),e._v(" for steps if needed)")]),e._v(" "),o("li",[e._v("A bash shell")]),e._v(" "),o("li",[e._v("git")]),e._v(" "),o("li",[e._v("An empty git repository")])]),e._v(" "),o("h2",{attrs:{id:"build-docker-image-for-microservices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-docker-image-for-microservices"}},[e._v("#")]),e._v(" Build Docker Image for Microservices")]),e._v(" "),o("ol",[o("li",[e._v("In your microservice project on a command line run "),o("code",[e._v("./mvnw -Pprod clean package jib:dockerBuild")])])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")])]),e._v(" "),o("p",[e._v("By default the organization used to generate the docker image is "),o("code",[e._v("entando")]),e._v(", but you can provide a custom value during project initialization, as well as by changing the "),o("code",[e._v("pom.xml")]),e._v(" file or by providing the "),o("code",[e._v("-Djib.to.image=<org>/<name>:<version>")]),e._v(" to the "),o("code",[e._v("jib:dockerBuild")]),e._v(" command.")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")])]),e._v(" "),o("p",[e._v("Output image name is generated using the organization value defined during project initialization. You can override the provided values by altering the "),o("code",[e._v("pom.xml")]),e._v(" file or by customizing the "),o("code",[e._v("-Djib.to.image")]),e._v(" parameter used in the "),o("code",[e._v("./mvnw")]),e._v(" command")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Warning")])]),e._v(" "),o("p",[e._v("If you manually override the target image of the docker build, remember to update the plugin metadata in the bundle accordingly in the bundle steps.")])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("View your image and tag with "),o("code",[e._v("docker images")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docker images\nREPOSITORY               TAG                 IMAGE ID            CREATED             SIZE\nmyusername/example-app   0.0.1-SNAPSHOT      4ec7f05b2b27        33 seconds ago      213MB\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Publish the Docker image to Docker repository (DockerHub or equivalent) "),o("code",[e._v("docker push <name-of-the-image:tag>")]),e._v(", e.g. "),o("code",[e._v("docker push myusername/example-app:0.0.1-SNAPSHOT")]),e._v(". You may need to first login via "),o("code",[e._v("docker login")]),e._v(".")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")])]),e._v(" "),o("p",[e._v("The first time your run this command it will have to push all of the layers. Subsequent runs will be much faster")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docker push myusername/example-app:0.0.1-SNAPSHOT\nThe push refers to repository [docker.io/myusername/example-app]\n545361404af4: Pushed\n...\nf1b5933fe4b5: Pushed\n0.0.1-SNAPSHOT: digest: sha256:804b3b91b83094c45020b4748b344f7199e3a0b027f4f6f54109cbb3b8a1f867 size: 2626\n")])])]),o("h2",{attrs:{id:"build-your-bundle-and-publish-to-git"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-your-bundle-and-publish-to-git"}},[e._v("#")]),e._v(" Build your Bundle and publish to git")]),e._v(" "),o("ol",[o("li",[e._v("In your microservice project populate the bundle with the generated micro frontends, run the "),o("code",[e._v("./buildBundle.sh")]),e._v(" script or use "),o("code",[e._v("npm run populate-bundle")])])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Important")]),e._v("\nThe bundle population with the micro frontends requires some time to be processed. You should be able to follow the progress of the operation on screen.")])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("p",[e._v("The output of your bundle will be in the top level "),o("code",[e._v("bundle")]),e._v(" folder in your microservice")])]),e._v(" "),o("li",[o("p",[e._v("Create a new git repository and name it "),o("code",[e._v("my-bundle")]),e._v(" (or a name of your choice). You'll need the URL for this repo in the next step")])]),e._v(" "),o("li",[o("p",[e._v("Add the /bundle/ folder to the .gitignore file of your microservice project and initialize a new and different git repository for the bundle itself. From the top of your microservices project run these commands.")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('echo bundle >> .gitignore\ncd bundle/\ngit init\ngit add .\ngit commit -m "Init Git repository"\ngit remote add origin https://your/remote/repository.git\ngit push -u origin master\n\n')])])]),o("blockquote",[o("p",[o("strong",[e._v("Important")]),e._v("\nThe file descriptor.yaml should be at the top of your repository")])]),e._v(" "),o("ol",{attrs:{start:"6"}},[o("li",[o("p",[o("code",[e._v("cd")]),e._v(" into your bundle folder (you should already be there from the step above)")])]),e._v(" "),o("li",[o("p",[e._v("Add the files to git "),o("code",[e._v("git add .")])])]),e._v(" "),o("li",[o("p",[e._v("Commit the files to git "),o("code",[e._v('git commit -a -m "Your commit message here"')])])]),e._v(" "),o("li",[o("p",[e._v("Push the files to git "),o("code",[e._v("git push")])])]),e._v(" "),o("li",[o("p",[e._v("Tag your bundle "),o("code",[e._v('git tag -a "v0.0.1" -m "My first tag"')])])]),e._v(" "),o("li",[o("p",[e._v("Push the tags "),o("code",[e._v("git push --tags")])])]),e._v(" "),o("li",[o("p",[e._v("Install the "),o("code",[e._v("entando-bundle-cli")]),e._v(" using "),o("code",[e._v("npm install -g  @entando/entando-bundle-cli@6.2.0")])])]),e._v(" "),o("li",[o("p",[e._v("Generate your bundle")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("    entando-bundle from-git --name=<bundle-name> --namespace=<your namespace> --thumbnail-url=<thumbnail-url> --repository=<your-repository-url> --dry-run > example-bundle.yaml\n")])])]),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("    - In the command above you must set:\n       - <bundle-name> - A name of your choice\n       - <your-namespace> - The namespace where you are going to install your bundle\n       - <thumbnail-url> - Optionally add a URL to a publicly availble image to use for your bundle in the ECR\n       - <your-repository-url> - The git url of your bundle repository\n")])])]),o("ol",{attrs:{start:"13"}},[o("li",[o("p",[e._v("Install your bundle in Kubernetes "),o("code",[e._v("kubectl create -f example-bundle.yaml")])])]),e._v(" "),o("li",[o("p",[e._v("Log into the "),o("code",[e._v("App Builder")])])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("code",[e._v("Component Repository")]),e._v(" in the upper right")])]),e._v(" "),o("li",[o("p",[e._v("See your bundle and select install")])])]),e._v(" "),o("p",[e._v("At this point the Entando platform will download and install your docker image and install the micro frontends into the Entando app. You can add those micro frontends to the page")])])}),[],!1,null,null,null);t.default=a.exports}}]);