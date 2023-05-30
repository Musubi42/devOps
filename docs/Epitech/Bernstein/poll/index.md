---
title: Poll deployment
tags:
  - test
---
# Installation

Docker

K3D

# Create poll

## Create cluster

```
k3d create cluster poll
```

Check if cluster is created

```shell
kubectl get nodes
```

## Create deployment config file

Create a file named `poll.deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: poll-deployment
  namespace: default
  labels:
    app: poll
spec:
  selector:
    matchLabels:
      app: poll
  replicas: 2
  template:
    metadata:
      name: poll-pod
      labels:
        app: poll
    spec:
      containers:
        - name: poll-container
          image: epitechcontent/t-dop-600-poll:k8s
          resources:
            limits:
              memory: 128M
          ports:
            - containerPort: 80
```

Start the deployment

```shell
kubectl apply -f poll.deployment.yaml
```



Check deployment

```shell
kubectl get deployments
```

```shell
kubectl get pods
```