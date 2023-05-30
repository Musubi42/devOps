---
title: Bernstein Bootstrap
slug: bootstrap_bernstein
project: k8s
tags:
  - test
authors:
  - name: Raph
    title: Raph
    url: e
    imageUrl: e
---
# To begin, installation

[Minikube](https://kubernetes.io/fr/docs/tasks/tools/install-minikube/) 

[Docker](https://docs.docker.com/engine/install/debian/)

[kubectl](https://kubernetes.io/fr/docs/tasks/tools/install-kubectl/)

## Start a cluster with minikube[](https://kubernetes.io/fr/docs/tasks/tools/install-kubectl/)

To start a basic cluster, the default conf is at \*\*~/.minikube/machines/minikube/config.json\*\*

```
minikube start
```

We can add options so can adjust our cluster configuration, [minikube docs](https://minikube.sigs.k8s.io/docs/commands/start/)

```
minikube start --disk-size=10G --memory=6 --cpus=3
```

# autre titre

We can start a [minikube dashboard](https://minikube.sigs.k8s.io/docs/commands/dashboard/), ⁣\
As we run minikube in a VM, we have to proxy the port

```
kubectl proxy --address='0.0.0.0' --accept-hosts='^*$'
```

Then we can simply run

```
minikube dashboard
```

``

We can now naviagate to `http:/<VM_IP>:8001/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/#/workloads?namespace=default`

### Get status about minikube cluster

C'est un peu la même chose que la commande, `docker ps` pour lister les containers docker

```
kubectl get nodes
```

# How to create a POD with *minikube*

Create a `deployment.yml` file containing the following

```
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: hellow-world
  labels:
    app: hellow-world
spec:
  replicas: 1
  strategy: {}
  template:
    metadata:
      labels:
        app: hellow-world
    spec:
      containers:
      - image: samber/hello-world-nodejs
        name: hello-world
        ports:
        - containerPort: 8080
        resources: {}
status: {}
```

We can start the pod with :

```
kubectl apply -f deployment.yml
```

Now if we check the dashboard, we can see that the deployment, pod and replica set are running

```
kubectl get deployments
kubectl get pods
```

#### To get more info about pod

```shell
kubectl describe pod <pod_name_frm_get_pod>
```

#### To get logs about a pod

```
kubectl get logs <podname>
```

#### To exec command in a pod

Comme sur Docker

```
kubectl exec -it <podname> <command_to_run>
```