---
title: Cadvisor monitoring
slug: boostrap_bernstein/cadvisor.html
project: k8s
tags:
  - monitoring
authors:
  - name: Raph
    title: DevOps
    url: d
    imageUrl: d
---
Configuration de Cadvisor, source pour nous aider à le faire [kubecost.com](https://www.kubecost.com/kubernetes-devops-tools/cadvisor/)



Let's break down the key components of the configuration:

* `apiVersion: apps/v1`: Specifies the API version of the Kubernetes resource being created, in this case, a DaemonSet.
* `kind: DaemonSet`: Defines that this resource is a DaemonSet, which ensures that a copy of the specified Pod runs on each node in the cluster.
* `metadata`: Contains metadata information about the DaemonSet, such as its name, namespace, and labels.
* `selector`: Specifies the labels used to select the nodes where the DaemonSet's Pods will be deployed.
* `template`: Defines the template for creating the Pods.

  * `metadata`: Contains metadata information specific to the Pods created by the DaemonSet.
  * `spec`: Specifies the specification for the Pods.

    * `containers`: Defines the containers to be run within the Pods.

      * `name: cadvisor`: Specifies the name of the container.
      * `image: google/cadvisor:latest`: Specifies the container image to use, in this case, the latest version of the Cadvisor image provided by Google.
      * `volumeMounts`: Mounts volumes from the host into the container.

        * Several volume mounts are specified, such as `/rootfs`, `/var/run`, `/sys`, `/var/lib/docker`, and `/dev/disk`. These mounts allow Cadvisor to access host system information and monitor container resources effectively.
      * `ports`: Specifies the ports to be exposed by the container.

        * In this case, a single port named `http` is defined with the containerPort set to `8080`.
    * `volumes`: Defines the volumes to be mounted into the Pods.

      * Several hostPath volumes are specified, corresponding to the mount paths defined in the `volumeMounts` section. These volumes provide access to the host system directories necessary for Cadvisor to collect resource usage and performance metrics.

This configuration ensures that Cadvisor runs as a DaemonSet on each node in the cluster, allowing it to monitor the resources and containers on each individual node.