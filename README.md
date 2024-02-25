
Setup Ubuntu Environment

```sh 
multipass list

multipass launch --cpus 4 --disk 40G --memory 16G --name my-fullstack-vm 22.04
multipass mount workspace/app my-fullstack-vm:/usr/local/src/dev/app

multipass info my-fullstack-vm

# enter 
multipass shell my-fullstack-vm
 ```
