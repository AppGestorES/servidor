kubectl get pods

kubectl exec -it mariadb-deployment-69bb4bbb88-vfsjx -- bash

apt-get update
apt-get install -y mariadb-client

mariadb -u root -p appgestordb < /tmp/tablas.sql