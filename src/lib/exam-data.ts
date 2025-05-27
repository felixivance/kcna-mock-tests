export interface Question {
  number: string
  question: string
  options: { [key: string]: string }
  correctAnswer: string
  explanation: string
  domain: string
  competency: string
}

export const examQuestions: Question[] = [
  {
    number: "1",
    question: "What is the fundamental reason Kubernetes uses Pods as the smallest deployable unit, rather than individual containers directly?",
    options: {
      A: "To simplify network configuration for containers",
      B: "To enable co-location and shared resources for containers",
      C: "To enforce stricter security boundaries than containers",
      D: "To provide a unique IP address per container",
      E: "To reduce container image size"
    },
    correctAnswer: "B",
    explanation:
      "Pods allow tightly coupled containers to share resources like network namespace (IP, port space) and storage volumes, facilitating communication and data sharing for helper or sidecar patterns.",
    domain: "Kubernetes Fundamentals",
    competency: "Containers",
  },
  {
    number: "2",
    question: "Which Kubernetes control plane component is responsible for persisting the cluster's desired state and configuration?",
    options: {
      A: "kube-scheduler",
      B: "kube-apiserver",
      C: "etcd",
      D: "kubelet",
      E: "controller-manager"
    },
    correctAnswer: "C",
    explanation:
      "etcd is a distributed key-value store that reliably stores all Kubernetes cluster data, serving as the single source of truth for the cluster's state.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Architecture",
  },
  {
    number: "3",
    question: "A developer needs to expose a web application running in a set of Pods within the cluster using a stable internal IP address. Which Kubernetes resource is most appropriate?",
    "options": {
      A: "Ingress",
      B: "NodePort Service",
      C: "ClusterIP Service",
      D: "ExternalName Service",
      E: "ReplicaSet"
    },
    correctAnswer: "C",
    explanation: "A ClusterIP Service provides a stable internal IP address and DNS name for accessing Pods, only reachable from within the cluster. NodePort exposes on nodes, Ingress is for external HTTP/S.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Resources"
  },
  {
    number: "4",
    question: "What is the primary purpose of the Kubernetes API server in the control plane architecture?",
    "options": {
      A: "To run containerized applications directly",
      B: "To schedule Pods onto available worker nodes",
      C: "To validate and process REST requests for API objects",
      D: "To manage network traffic between Pods",
      E: "To store cluster state in a time-series database"
    },
    correctAnswer: "C",
    explanation: "The kube-apiserver is the frontend of the control plane, exposing the Kubernetes API. It processes and validates API requests, and updates the corresponding objects in etcd.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes API"
  },
  {
    number: "5",
    question: "When a Pod is scheduled, what is the primary factor the kube-scheduler considers from the Pod's specification?",
    "options": {
      A: "Container image version",
      B: "restartPolicy",
      C: "Resource requests and limits",
      D: "serviceAccountName",
      E: "labels"
    },
    correctAnswer: "C",
    explanation: "The kube-scheduler filters nodes based on whether they can satisfy the Pod's resource requests (CPU, memory) and then ranks them based on various priority functions.",
    domain: "Kubernetes Fundamentals",
    competency: "Scheduling"
  },
  {
    number: "6",
    question: "Which component is NOT part of the Kubernetes control plane?",
    "options": {
      A: "kube-apiserver",
      B: "etcd",
      C: "kube-scheduler",
      D: "kube-proxy",
      E: "kube-controller-manager"
    },
    correctAnswer: "D",
    explanation: "kube-proxy runs on every node in the cluster and is responsible for maintaining network rules on nodes, enabling network communication to Pods from network sessions inside or outside of the cluster. It's a node component, not control plane.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Architecture"
  },
  {
    number: "7",
    question: "What core benefit does containerization (e.g., using Docker or containerd) provide for application deployment?",
    "options": {
      A: "Automatic scaling of applications",
      B: "Abstraction of the underlying operating system and kernel",
      C: "Consistent runtime environment across different machines",
      D: "Built-in service discovery and load balancing",
      E: "Secure by default inter-container communication"
    },
    correctAnswer: "C",
    explanation: "Containers bundle an application with its dependencies, ensuring it runs consistently regardless of the host environment, solving \"it works on my machine\" problems.",
    domain: "Kubernetes Fundamentals",
    competency: "Containers"
  },
  {
    number: "8",
    question: "What is the main advantage of using a declarative approach (e.g., YAML manifests) to manage Kubernetes resources?",
    "options": {
      A: "It allows for more complex scripting logic",
      B: "It enables direct manipulation of etcd data",
      C: "It focuses on what desired state, not how to achieve it",
      D: "It provides faster API response times",
      E: "It simplifies single-container Pod deployments only"
    },
    correctAnswer: "C",
    explanation: "Declarative configurations define the desired state, and Kubernetes controllers work to reconcile the current state to this desired state. This is more robust and idempotent than imperative commands.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes API"
  },
  {
    number: "9",
    question: "Why is container orchestration essential for managing microservices at scale?",
    "options": {
      A: "It simplifies writing microservice code",
      B: "It automatically converts monolithic apps to microservices",
      C: "It handles service discovery, scaling, and fault tolerance",
      D: "It provides a centralized logging solution by default",
      E: "It guarantees zero-downtime deployments"
    },
    correctAnswer: "C",
    explanation: "Orchestrators like Kubernetes automate complex tasks like service discovery, load balancing, scaling based on demand, and self-healing, which are crucial for managing a distributed microservices architecture.",
    domain: "Container Orchestration",
    competency: "Container Orchestration Fundamentals"
  },
  {
    number: "10",
    question: "Which part of the Container Runtime Interface (CRI) specification is containerd primarily responsible for implementing?",
    "options": {
      A: "Image distribution and storage",
      B: "Low-level container execution and lifecycle management",
      C: "Network namespace creation and IP address assignment",
      D: "Defining container image format standards",
      E: "Implementing pod-level resource sharing"
    },
    correctAnswer: "B",
    explanation: "containerd is a core container runtime that manages the complete container lifecycle on a single host - image transfer, storage, container execution, supervision, and network attachments.",
    domain: "Container Orchestration",
    competency: "Runtime"
  },
  {
    number: "11",
    question: "In Kubernetes, what is the primary role of Role-Based Access Control (RBAC)?",
    "options": {
      A: "To define network traffic flow between Pods",
      B: "To manage secure storage of sensitive data like passwords",
      C: "To control user and service account access to API resources",
      D: "To assign static IP addresses to Services",
      E: "To encrypt container images at rest"
    },
    correctAnswer: "C",
    explanation: "RBAC regulates access to Kubernetes API resources based on the roles of individual users or service accounts within the cluster, ensuring users only perform actions they are authorized for.",
    domain: "Container Orchestration",
    competency: "Security"
  },
  {
    number: "12",
    question: "What is the function of a NetworkPolicy in Kubernetes?",
    "options": {
      A: "To provide a stable DNS name for a set of Pods",
      B: "To manage external access to services via HTTP/S routing",
      C: "To define how Pods are allowed to communicate with each other",
      D: "To assign IP addresses to newly created Pods",
      E: "To encrypt traffic between services in a mesh"
    },
    correctAnswer: "C",
    explanation: "NetworkPolicy resources specify how groups of Pods are allowed to communicate with each other and other network endpoints, acting as a firewall at the Pod level.",
    domain: "Container Orchestration",
    competency: "Networking"
  },
  {
    number: "13",
    question: "What fundamental problem does a Service Mesh like Istio or Linkerd aim to solve in a microservices architecture?",
    "options": {
      A: "Simplifying container image building",
      B: "Automating infrastructure provisioning",
      C: "Managing and observing inter-service communication",
      D: "Providing persistent storage for stateful applications",
      E: "Abstracting server management"
    },
    correctAnswer: "C",
    explanation: "Service meshes provide a dedicated infrastructure layer for handling service-to-service communication, offering features 1  like traffic management, security (mTLS), and observability (metrics, traces) without requiring changes to application code.",
    domain: "Container Orchestration",
    competency: "Service Mesh"
  },
  {
    number: "14",
    question: "A stateful application requires storage that persists even if its Pod is rescheduled to another Node. Which Kubernetes objects are essential for this?",
    "options": {
      A: "ConfigMap and Secret",
      B: "PersistentVolume (PV) and PersistentVolumeClaim (PVC)",
      C: "EphemeralVolume and HostPath volume",
      D: "Service and EndpointSlice",
      E: "Job and CronJob"
    },
    correctAnswer: "B",
    explanation: "A PersistentVolume (PV) represents a piece of storage, and a PersistentVolumeClaim (PVC) is a request for that storage by a user/Pod. This decoupling allows storage to outlive Pods.",
    domain: "Container Orchestration",
    competency: "Storage"
  },
  {
    number: "15",
    question: "Which security mechanism in Kubernetes is best suited for providing an identity to processes running in Pods to interact with the API server?",
    "options": {
      A: "NetworkPolicy",
      B: "SecurityContext",
      C: "ServiceAccount",
      D: "PodSecurityPolicy (deprecated) / PodSecurityAdmission",
      E: "TLS Certificates for etcd"
    },
    correctAnswer: "C",
    explanation: "ServiceAccounts provide an identity for processes that run in a Pod, which can then be granted permissions to API resources via RBAC Roles and RoleBindings.",
    domain: "Container Orchestration",
    competency: "Security"
  },
  {
    number: "16",
    question: "What is the primary goal of Horizontal Pod Autoscaling (HPA) in Kubernetes?",
    "options": {
      A: "To increase the resource limits of existing Pods",
      B: "To adjust the number of Pod replicas based on metrics",
      C: "To add or remove Nodes from the cluster",
      D: "To automatically update container images",
      E: "To manage storage capacity for stateful sets"
    },
    correctAnswer: "B",
    explanation: "HPA automatically scales the number of Pod replicas in a workload resource (like a Deployment or StatefulSet) up or down based on observed CPU utilization, custom metrics, or external metrics.",
    domain: "Cloud Native Architecture",
    competency: "Autoscaling"
  },
  {
    number: "17",
    question: "How does Serverless (e.g., FaaS like AWS Lambda or Knative Serving) primarily differ from traditional PaaS offerings?",
    "options": {
      A: "Serverless does not use containers",
      B: "Serverless applications cannot be stateful",
      C: "Serverless abstracts away all underlying server management",
      D: "PaaS does not offer auto-scaling capabilities",
      E: "Serverless is only for event-driven functions"
    },
    correctAnswer: "C",
    explanation: "Serverless computing (especially FaaS) aims to abstract away all infrastructure management, including servers, OS, and runtimes, allowing developers to focus solely on writing code that executes in response to events.",
    domain: "Cloud Native Architecture",
    competency: "Serverless"
  },
  {
    number: "18",
    question: "What is the primary role of the Cloud Native Computing Foundation (CNCF) in the Kubernetes ecosystem?",
    "options": {
      A: "To directly employ Kubernetes core developers",
      B: "To sell Kubernetes enterprise support subscriptions",
      C: "To foster and sustain an ecosystem of open source projects",
      D: "To define mandatory cloud provider APIs",
      E: "To own the intellectual property of Linux"
    },
    correctAnswer: "C",
    explanation: "The CNCF hosts and promotes a wide range of open source projects (including Kubernetes, Prometheus, Envoy) to advance cloud native computing, providing governance, support, and community building.",
    domain: "Cloud Native Architecture",
    competency: "Community and Governance"
  },
  {
    number: "19",
    question: "In a typical cloud native environment, which persona is most concerned with ensuring application uptime, performance, and managing incident response?",
    "options": {
      A: "Application Developer",
      B: "Platform Consumer",
      C: "Site Reliability Engineer (SRE) / Platform Operator",
      D: "Business Analyst",
      E: "End User"
    },
    correctAnswer: "C",
    explanation: "SREs and Platform Operators are responsible for the reliability, scalability, and overall operational health of the platform and the applications running on it, including monitoring, alerting, and incident management.",
    domain: "Cloud Native Architecture",
    competency: "Roles and Personas"
  },
  {
    number: "20",
    question: "Why are Open Standards, like those defined by the Open Container Initiative (OCI), critical for the cloud native ecosystem?",
    "options": {
      A: "They guarantee better application performance",
      B: "They enforce specific vendor implementations",
      C: "They promote interoperability and prevent vendor lock-in",
      D: "They reduce the need for security patching",
      E: "They simplify the user interface of cloud platforms"
    },
    correctAnswer: "C",
    explanation: "Open standards (e.g., OCI for container formats/runtimes, CNI for networking, CRI for runtimes) ensure that different tools and platforms can work together seamlessly, giving users choice and preventing vendor lock-in.",
    domain: "Cloud Native Architecture",
    competency: "Open Standards"
  },
  {
    number: "21",
    question: "Which type of telemetry data is most suitable for understanding the sequence of operations and latency across multiple microservices for a single user request?",
    "options": {
      A: "Logs",
      B: "Metrics",
      C: "Traces (Distributed Tracing)",
      D: "Events",
      E: "Alerts"
    },
    correctAnswer: "C",
    explanation: "Distributed tracing captures the end-to-end flow of a request as it propagates through different services, providing insights into latency bottlenecks and dependencies.",
    domain: "Cloud Native Observability",
    competency: "Telemetry & Observability"
  },
  {
    number: "22",
    question: "Prometheus is primarily designed for which type of observability data?",
    "options": {
      A: "Distributed tracing",
      B: "Log aggregation and analysis",
      C: "Time-series metrics collection and alerting",
      D: "Security auditing and compliance reporting",
      E: "Real-time user monitoring (RUM)"
    },
    correctAnswer: "C",
    explanation: "Prometheus excels at collecting, storing, and querying time-series data (metrics) from various targets, and it includes a powerful alerting mechanism based on PromQL.",
    domain: "Cloud Native Observability",
    competency: "Prometheus"
  },
  {
    number: "23",
    question: "In Prometheus, what is an \"exporter\"?",
    "options": {
      A: "A component that sends alerts to notification channels",
      B: "A database that stores long-term metric data",
      C: "A client library for instrumenting application code",
      D: "A piece of software that exposes metrics from third-party systems",
      E: "A dashboard for visualizing metrics"
    },
    correctAnswer: "D",
    explanation: "Exporters are helper services that fetch metrics from systems that don't natively expose them in Prometheus format (e.g., databases, hardware, message queues) and translate them into a format Prometheus can scrape.",
    domain: "Cloud Native Observability",
    competency: "Prometheus"
  },
  {
    number: "24",
    question: "What is a key challenge in cost management specifically related to shared Kubernetes clusters?",
    "options": {
      A: "High cost of Kubernetes control plane components",
      B: "Difficulty in attributing resource usage to specific teams/apps",
      C: "Inability to use reserved instances with Kubernetes",
      D: "Lack of tools for visualizing overall cloud spend",
      E: "Fixed pricing models for all Kubernetes services"
    },
    correctAnswer: "B",
    explanation: "In multi-tet clusters, accurately tracking and attributing resource consumption (CPU, memory, storage, network) to different applications, teams, or cost centers can be complex due to the shared nature of resources.",
    domain: "Cloud Native Observability",
    competency: "Cost Management"
  },
  {
    number: "25",
    question: "Which principle is central to the GitOps methodology for application and infrastructure deployment?",
    "options": {
      A: "Using imperative scripts stored in Git",
      B: "Managing only stateless applications via Git",
      C: "Treating Git as the single source of truth for desired state",
      D: "Requiring manual approval for all Git commits",
      E: "Using Git LFS for storing container images"
    },
    correctAnswer: "C",
    explanation: "GitOps emphasizes a declarative approach where the entire desired state of the system (applications, infrastructure) is described in Git, and an automated process ensures the live environment converges to this state.",
    domain: "Cloud Native Application Delivery",
    competency: "GitOps"
  },
  {
    number: "26",
    question: "In a CI/CD pipeline for a cloud native application, what is the typical output of the \"Continuous Integration\" (CI) phase?",
    "options": {
      A: "A running application in production",
      B: "New Kubernetes cluster provisioned",
      C: "tested and versioned container image/artifact",
      D: "detailed cost analysis report",
      E: "set of user stories for the next sprint"
    },
    correctAnswer: "C",
    explanation: "The CI phase focuses on building the application, running automated tests, and producing a reliable, versioned artifact (often a container image) that is ready for deployment.",
    domain: "Cloud Native Application Delivery",
    competency: "CI/CD"
  },
  {
    number: "27",
    question: "What is the primary benefit of implementing CI/CD pipelines for application delivery?",
    "options": {
      A: "It eliminates the need for testing",
      B: "It reduces infrastructure costs significantly",
      C: "It enables faster, more reliable software releases",
      D: "It automatically writes application code",
      E: "It replaces the need for version control systems"
    },
    correctAnswer: "C",
    explanation: "CI/CD automates the build, test, and deployment processes, leading to increased release velocity, improved code quality through automated testing, and more consistent deployments.",
    domain: "Cloud Native Application Delivery",
    competency: "Application Delivery Fundamentals"
  },
  {
    number: "28",
    question: "What does a ReplicaSet ensure in Kubernetes?",
    "options": {
      A: "That a Pod runs on every node",
      B: "That a certain number of Pod replicas are running",
      C: "That Pods have stable network identifiers",
      D: "That external traffic can reach the Pods",
      E: "That Pods are scheduled according to affinity rules"
    },
    correctAnswer: "B",
    explanation: "A ReplicaSet's primary purpose is to maintain a stable set of replica Pods running at any given time, ensuring the desired number of instances of an application are available. Deployments manage ReplicaSets.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Resources"
  },
  {
    number: "29",
    question: "Which of the following is NOT a core characteristic of cloud native architectures?",
    "options": {
      A: "Microservices",
      B: "Containers",
      C: "Monolithic application design",
      D: "DevOps practices",
      E: "Automation"
    },
    correctAnswer: "C",
    explanation: "Cloud native architectures typically favor microservices, containers, dynamic orchestration (like Kubernetes), and DevOps/Agile practices, moving away from large, tightly coupled monolithic designs.",
    domain: "Cloud Native Architecture",
    competency: "Cloud Native Principles (implied)"
  },
  {
    number: "30",
    question: "What is the main purpose of a ServiceAccount in Kubernetes when interacting with the API server?",
    "options": {
      A: "To define network access policies for Pods",
      B: "To provide an identity for Pods to authenticate to the API",
      C: "To store sensitive credentials for applications",
      D: "To group users for applying permissions",
      E: "To manage DNS records for services"
    },
    correctAnswer: "B",
    explanation: "ServiceAccounts provide an identity for processes running within Pods. This identity can be used to authenticate to the Kubernetes API server, and RBAC rules can grant it specific permissions.",
    domain: "Container Orchestration",
    competency: "Security"
  },
  {
    number: "31",
    question: "If you need to run a batch job that completes and then terminates, which Kubernetes workload resource is most suitable?",
    "options": {
      A: "Deployment",
      B: "StatefulSet",
      C: "DaemonSet",
      D: "Job",
      E: "Service"
    },
    correctAnswer: "D",
    explanation: "A Job creates one or more Pods and ensures that a specified number of them successfully terminate. It's ideal for batch tasks, while CronJob is for scheduled Jobs.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Resources"
  },
  {
    number: "32",
    question: "Which of the following best describes the concept of \"desired state\" in Kubernetes?",
    "options": {
      A: "The current operational status of cluster nodes",
      B: "The configuration specified by the user for their resources",
      C: "The real-time metrics collected by Prometheus",
      D: "The log output generated by running containers",
      E: "The network policies applied to Pods"
    },
    correctAnswer: "B",
    explanation: "Users define the desired state of their applications and infrastructure via Kubernetes API objects (e.g., in YAML files). Kubernetes controllers then continuously work to make the actual state of the cluster match this desired state.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Architecture"
  },
  {
    number: "33",
    question: "Which OCI specification defines the format of a container image?",
    "options": {
      A: "Runtime Specification",
      B: "Image Specification",
      C: "Distribution Specification",
      D: "Network Specification",
      E: "Storage Specification"
    },
    correctAnswer: "B",
    explanation: "The OCI Image Specification defines how to create and package a container image, ensuring interoperability across different container tools and runtimes that adhere to the standard.",
    domain: "Kubernetes Fundamentals",
    competency: "Containers"
  },
  {
    number: "34",
    question: "What is a key difference between kubectl apply -f <filename> and kubectl create -f <filename>?",
    "options": {
      A: "apply is declarative, create is imperative",
      B: "create can update existing resources, apply cannot",
      C: "apply ignores existing resources, create fails if they exist",
      D: "apply stores last-applied-configuration, create does not",
      E: "create is idempotent, apply is not"
    },
    correctAnswer: "D",
    explanation: "kubectl apply records the applied configuration in an annotation on the resource. This allows it to calculate a patch between the previous, current, and new desired state, making it suitable for declarative updates. create will fail if the resource exists.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes API"
  },
  {
    number: "35",
    question: "In the context of container security, what does \"least privilege\" primarily refer to?",
    "options": {
      A: "Running containers with minimal resource requests",
      B: "Granting containers only the permissions they absolutely need",
      C: "Using the smallest possible base container images",
      D: "Limiting network access to containers",
      E: "Encrypting all data within the container"
    },
    correctAnswer: "B",
    explanation: "The principle of least privilege means that containers (and their processes) should run with only the capabilities and permissions essential for their function, reducing the potential impact of a compromise.",
    domain: "Container Orchestration",
    competency: "Security"
  },
  {
    number: "36",
    question: "What is the primary function of kube-proxy when a Service of type ClusterIP is created?",
    "options": {
      A: "It assigns an IP address from the cluster's Pod CIDR.",
      B: "It modifies iptables or IPVS rules on nodes to route traffic.",
      C: "It creates a DNS A record for the Service.",
      D: "It terminates TLS connections for the Service.",
      E: "It exposes the Service on a port on each Node."
    },
    correctAnswer: "B",
    explanation: "kube-proxy watches the API server for new Services and Endpoints. For ClusterIP Services, it configures network rules (e.g., iptables, IPVS) on each node to capture traffic destined for the Service's IP and load balance it to the backend Pods.",
    domain: "Container Orchestration",
    competency: "Networking"
  },
  {
    number: "37",
    question: "What core benefit does a StatefulSet provide over a Deployment for applications like databases?",
    "options": {
      A: "Automatic rolling updates by default",
      B: "Simpler YAML configuration for Pod templates",
      C: "Stable, unique network identifiers and persistent storage",
      D: "Support for hostNetwork: true",
      E: "Higher number of allowed replicas"
    },
    correctAnswer: "C",
    explanation: "StatefulSets are designed for stateful applications, providing stable, persistent identifiers (e.g., my-app-0, my-app-1) and per-instance persistent storage that follows the Pod identity.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Resources"
  },
  {
    number: "38",
    question: "What is the primary role of the \"Controller Manager\" in Kubernetes?",
    "options": {
      A: "Manages user authentication and authorization",
      B: "Exposes the Kubernetes API to external clients",
      C: "Runs various controllers that regulate cluster state",
      D: "Schedules Pods onto appropriate Nodes",
      E: "Stores all cluster configuration data"
    },
    correctAnswer: "C",
    explanation: "The kube-controller-manager runs multiple controller processes (e.g., Node controller, Replication controller, Endpoints controller) that watch for changes and work to drive the actual cluster state towards the desired state.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Architecture"
  },
  {
    number: "39",
    question: "What is a primary characteristic of Vertical Pod Autoscaling (VPA)?",
    "options": {
      A: "It adjusts the number of Pod replicas.",
      B: "It adjusts the CPU and memory requests and limits for Pods.",
      C: "It adds or removes Nodes from the cluster.",
      D: "It automatically selects the optimal storage class.",
      E: "It scales the number of available IP addresses."
    },
    correctAnswer: "B",
    explanation: "VPA recommends or automatically updates the resource requests and limits for containers within Pods to match actual usage, helping to optimize resource allocation. It does not change the number of replicas (that's HPA).",
    domain: "Cloud Native Architecture",
    competency: "Autoscaling"
  },
  {
    number: "40",
    question: "Which statement accurately describes a key aspect of \"observability\" in cloud native systems?",
    "options": {
      A: "It is solely focused on collecting system logs.",
      B: "It primarily relies on manual health checks by operators.",
      C: "It enables understanding a system's internal state from its outputs.",
      D: "It is achieved by using proprietary monitoring tools.",
      E: "It is only relevant for production environments."
    },
    correctAnswer: "C",
    explanation: "Observability is the ability to infer the internal state and behavior of a complex system by examining its outputs (logs, metrics, traces). This allows for better troubleshooting, understanding performance, and proactive issue detection.",
    domain: "Cloud Native Observability",
    competency: "Telemetry & Observability"
  },
  {
    number: "41",
    question: "In Prometheus, what does the up metric typically indicate for a scraped target?",
    "options": {
      A: "The version number of the target application.",
      B: "The number of active user connections to the target.",
      C: "Whether Prometheus was able to successfully scrape the target.",
      D: "The CPU utilization of the target.",
      E: "The total uptime of the target since it started."
    },
    correctAnswer: "C",
    explanation: "The up{job=\"<job_name>\", instance=\"<instance_id>\"} metric is automatically generated by Prometheus. A value of 1 means the scrape was successful; 0 means it failed. This is fundamental for monitoring target health.",
    domain: "Cloud Native Observability",
    competency: "Prometheus"
  },
  {
    number: "42",
    question: "From a FinOps perspective in a Kubernetes environment, why is tagging resources (e.g., with labels) important?",
    "options": {
      A: "It improves the scheduling efficiency of Pods.",
      B: "It enables more accurate cost allocation and showback/chargeback.",
      C: "It automatically secures inter-Pod communication.",
      D: "It increases the performance of PersistentVolumes.",
      E: "It simplifies the process of upgrading Kubernetes."
    },
    correctAnswer: "B",
    explanation: "Labels and annotations applied to Kubernetes resources (Namespaces, Deployments, Pods, etc.) can be used by cost management tools to categorize and attribute costs to different teams, projects, or applications, supporting FinOps practices.",
    domain: "Cloud Native Observability",
    competency: "Cost Management"
  },
  {
    number: "43",
    question: "What is a key advantage of using GitOps for managing Kubernetes deployments compared to traditional CI/CD push-based deployments?",
    "options": {
      A: "GitOps pipelines are significantly faster to execute.",
      B: "GitOps eliminates the need for container registries.",
      C: "GitOps enhances security by reducing direct cluster access for CI.",
      D: "GitOps does not require YAML manifests for resources.",
      E: "GitOps is only suitable for small-scale deployments."
    },
    correctAnswer: "C",
    explanation: "In GitOps, the CI system typically pushes an image to a registry and updates a Git repo. An agent inside the cluster pulls changes from Git, reducing the CI system's need for direct cluster credentials and providing a stronger security posture.",
    domain: "Cloud Native Application Delivery",
    competency: "GitOps"
  },
  {
    number: "44",
    question: "Which of these is a core component of a \"Continuous Delivery\" pipeline but NOT necessarily \"Continuous Deployment\"?",
    "options": {
      A: "Automated building of code into an artifact.",
      B: "Automated execution of unit and integration tests.",
      C: "Automated deployment to a staging/QA environment.",
      D: "Automated deployment to the production environment.",
      E: "Manual approval gate before production deployment."
    },
    correctAnswer: "E",
    explanation: "Continuous Delivery ensures every validated change is releasable to production, often with a manual approval step. Continuous Deployment automates the release to production without manual intervention if all prior stages pass. Both include A, B, C.",
    domain: "Cloud Native Application Delivery",
    competency: "CI/CD"
  },
  {
    number: "45",
    question: "What Kubernetes feature allows you to define constraints on which Nodes your Pods can run, based on Node labels?",
    "options": {
      A: "NetworkPolicy",
      B: "ResourceQuota",
      C: "nodeSelector / nodeAffinity",
      D: "PodDisruptionBudget",
      E: "LimitRange"
    },
    correctAnswer: "C",
    explanation: "nodeSelector provides a simple way to constrain Pods to Nodes with specific labels. nodeAffinity offers more expressive rules, including \"preferred\" and \"required\" constraints.",
    domain: "Kubernetes Fundamentals",
    competency: "Scheduling"
  },
  {
    number: "46",
    question: "Which of these is a primary goal of the CNCF's \"Trail Map\" for cloud native adoption?",
    "options": {
      A: "To mandate specific vendor products for each stage.",
      B: "To provide a prescriptive path for building cloud native apps.",
      C: "To offer a recommended journey and project choices for adopters.",
      D: "To rank cloud providers based on their Kubernetes offerings.",
      E: "To certify individual developers as cloud native experts."
    },
    correctAnswer: "C",
    explanation: "The CNCF Trail Map suggests a path for organizations adopting cloud native technologies, highlighting CNCF projects that can help at different stages (e.g., containerization, CI/CD, orchestration, observability).",
    domain: "Cloud Native Architecture",
    competency: "Community and Governance"
  },
  {
    number: "47",
    question: "What is the primary motivation behind using \"Serverless Functions\" (FaaS)?",
    "options": {
      A: "To achieve higher compute density on physical servers.",
      B: "To run long-lived, stateful batch processing jobs.",
      C: "To execute event-driven code without managing infrastructure.",
      D: "To gain fine-grained control over OS-level configurations.",
      E: "To build complex, monolithic application backends."
    },
    correctAnswer: "C",
    explanation: "Serverless functions are designed for short-lived, event-driven computations where the underlying infrastructure (servers, OS) is completely managed by the platform, allowing developers to focus on code.",
    domain: "Cloud Native Architecture",
    competency: "Serverless"
  },
  {
    number: "48",
    question: "What is the role of an \"Ingress Controller\" in a Kubernetes cluster?",
    "options": {
      A: "It assigns IP addresses to Pods.",
      B: "It manages storage volumes for stateful applications.",
      C: "It implements the rules defined in Ingress resources.",
      D: "It monitors the health of Nodes in the cluster.",
      E: "It encrypts communication between control plane components."
    },
    correctAnswer: "C",
    explanation: "An Ingress resource defines HTTP/S routing rules, but an Ingress Controller (e.g., Nginx, Traefik) is the actual reverse proxy/load balancer that reads these rules and routes external traffic accordingly.",
    domain: "Container Orchestration",
    competency: "Networking"
  },
  {
    number: "49",
    question: "When instrumenting an application for Prometheus, what is the typical way metrics are exposed by the application?",
    "options": {
      A: "Writing metrics directly to Prometheus's storage.",
      B: "Pushing metrics to a Prometheus Pushgateway.",
      C: "Exposing an HTTP endpoint (e.g., /metrics) for scraping.",
      D: "Sending metrics via syslog to a collector.",
      E: "Using SNMP traps to send metric data."
    },
    correctAnswer: "C",
    explanation: "Applications instrumented with Prometheus client libraries typically expose their metrics on an HTTP endpoint (commonly /metrics) in a specific format that Prometheus can then periodically scrape.",
    domain: "Cloud Native Observability",
    competency: "Prometheus"
  },
  {
    number: "50",
    question: "What is the core difference between \"authentication\" and \"authorization\" in Kubernetes security?",
    "options": {
      A: "Authentication is for users, authorization for service accounts.",
      B: "Authentication verifies identity, authorization verifies permissions.",
      C: "Authorization happens before authentication in the API request flow.",
      D: "Authentication uses Roles, authorization uses RoleBindings.",
      E: "Authorization uses client certificates, authentication uses tokens."
    },
    correctAnswer: "B",
    explanation: "Authentication is the process of determining who a user or service is. Authorization is the process of determining what an authenticated user or service is allowed to do (i.e., which API resources they can access and what actions they can perform).",
    domain: "Container Orchestration",
    competency: "Security"
  },
  {
    number: "51",
    question: "What is the smallest and simplest deployable unit object created and managed by Kubernetes?",
    "options": {
      A: "Node",
      B: "Container",
      C: "Pod",
      D: "Deployment",
      E: ""
    },
    correctAnswer: "C",
    explanation: "A Pod represents a single instance of a running process in a cluster and can contain one or more containers. Nodes host Pods.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Resources"
  },
  {
    number: "52",
    question: "Which Kubernetes component is responsible for watching for newly created Pods and assigning them to Nodes?",
    "options": {
      A: "kube-apiserver",
      B: "etcd",
      C: "kube-scheduler",
      D: "kubelet",
      E: ""
    },
    correctAnswer: "C",
    explanation: "The kube-scheduler is the control plane component that decides which Node a Pod should run on based on constraints and availability.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Architecture"
  },
  {
    number: "53",
    question: "What is the primary function of the kubelet component?",
    "options": {
      A: "Storing cluster state",
      B: "Scheduling Pods onto Nodes",
      C: "Managing the container runtime",
      D: "Exposing the Kubernetes API",
      E: ""
    },
    correctAnswer: "C",
    explanation: "The kubelet runs on each Node and ensures that containers described in PodSpecs are running and healthy. It interacts with the container runtime.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Architecture"
  },
  {
    number: "54",
    question: "Which component acts as the central control plane and exposes the Kubernetes API?",
    "options": {
      A: "kube-proxy",
      B: "kube-apiserver",
      C: "etcd",
      D: "controller-manager",
      E: ""
    },
    correctAnswer: "B",
    explanation: "The kube-apiserver validates and configures data for API objects (Pods, Services, etc.) and is the frontend for the control plane.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes API"
  },
  {
    number: "55",
    question: "What is the primary role of etcd in a Kubernetes cluster?",
    "options": {
      A: "Running application containers",
      B: "Scheduling workloads",
      C: "Storing the cluster state",
      D: "Managing network policies",
      E: ""
    },
    correctAnswer: "C",
    explanation: "etcd is a consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data.",
    domain: "Kubernetes 1  Fundamentals",
    competency: "Kubernetes Architecture"
  },
  {
    number: "56",
    question: "Which Kubernetes resource is typically used to manage stateless applications by ensuring a specified number of Pod replicas are running?",
    "options": {
      A: "StatefulSet",
      B: "DaemonSet",
      C: "Deployment",
      D: "Job",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Deployments manage ReplicaSets, providing declarative updates and scaling for stateless applications.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Resources"
  },
  {
    number: "57",
    question: "What type of software package bundles application code with all its dependencies, libraries, and configuration files?",
    "options": {
      A: "Virtual Machine",
      B: "Container",
      C: "Operating System",
      D: "Serverless Function",
      E: ""
    },
    correctAnswer: "B",
    explanation: "Containers package application code and dependencies together, isolating them from the underlying infrastructure.",
    domain: "Kubernetes Fundamentals",
    competency: "Containers"
  },
  {
    number: "58",
    question: "In Kubernetes, what is the process of assigning Pods to Nodes called?",
    "options": {
      A: "Replication",
      B: "Orchestration",
      C: "Scheduling",
      D: "Deployment",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Scheduling is the core function of the kube-scheduler, selecting appropriate Nodes for Pods based on resource requests and other factors.",
    domain: "Kubernetes Fundamentals",
    competency: "Scheduling"
  },
  {
    number: "59",
    question: "What is the main benefit of using container orchestration systems like Kubernetes?",
    "options": {
      A: "Simplifying code writing",
      B: "Automating deployment & scaling",
      C: "Reducing storage costs",
      D: "Improving network latency",
      E: ""
    },
    correctAnswer: "B",
    explanation: "Orchestrators automate the deployment, scaling, management, and networking of containerized applications.",
    domain: "Container Orchestration",
    competency: "Container Orchestration Fundamentals"
  },
  {
    number: "60",
    question: "Which of these is a standard specified by the OCI (Open Container Initiative)?",
    "options": {
      A: "Docker",
      B: "Kubernetes",
      C: "Image Specification",
      D: "Istio",
      E: ""
    },
    correctAnswer: "C",
    explanation: "The OCI defines standards for container image formats (Image Specification) and runtime (Runtime Specification).",
    domain: "Kubernetes Fundamentals",
    competency: "Containers"
  },
  {
    number: "61",
    question: "Which container runtime is most commonly associated with Kubernetes and implements the CRI (Container Runtime Interface)?",
    "options": {
      A: "Docker (dockershim)",
      B: "containerd",
      C: "rkt",
      D: "LXC",
      E: ""
    },
    correctAnswer: "B",
    explanation: "containerd is a widely used container runtime focused on simplicity, robustness, and portability, fully implementing the CRI.",
    domain: "Container Orchestration",
    competency: "Runtime"
  },
  {
    number: "62",
    question: "What Kubernetes object provides a stable IP address and DNS name for accessing a set of Pods?",
    "options": {
      A: "Ingress",
      B: "Service",
      C: "EndpointSlice",
      D: "NetworkPolicy",
      E: ""
    },
    correctAnswer: "B",
    explanation: "A Service defines a logical set of Pods and a policy by which to access them, providing load balancing and service discovery.",
    domain: "Container Orchestration",
    competency: "Networking"
  },
  {
    number: "63",
    question: "How can you securely store sensitive information like passwords or API keys in Kubernetes?",
    "options": {
      A: "ConfigMap",
      B: "Annotation",
      C: "Label",
      D: "Secret",
      E: ""
    },
    correctAnswer: "D",
    explanation: "Secrets are Kubernetes objects specifically designed to hold small amounts of sensitive data.",
    domain: "Container Orchestration",
    competency: "Security"
  },
  {
    number: "64",
    question: "What is the role of a CNI (Container Network Interface) plugin in Kubernetes?",
    "options": {
      A: "Managing storage volumes",
      B: "Providing container networking",
      C: "Scheduling Pods",
      D: "Securing the API server",
      E: ""
    },
    correctAnswer: "B",
    explanation: "CNI plugins are responsible for configuring network interfaces for containers and managing IP address allocation within the cluster.",
    domain: "Container Orchestration",
    competency: "Networking"
  },
  {
    number: "65",
    question: "Which Kubernetes object defines rules about how Pods are allowed to communicate with each other and network endpoints?",
    "options": {
      A: "Service",
      B: "Ingress",
      C: "NetworkPolicy",
      D: "SecurityContext",
      E: ""
    },
    correctAnswer: "C",
    explanation: "NetworkPolicies allow specifying traffic flow rules at the IP address or port level (OSI layer 3 or 4).",
    domain: "Container Orchestration",
    competency: "Networking"
  },
  {
    number: "66",
    question: "What is the primary purpose of a Service Mesh like Istio or Linkerd?",
    "options": {
      A: "Container image building",
      B: "Cluster storage management",
      C: "Managing inter-service comms",
      D: "Node provisioning",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Service meshes add observability, security, and reliability features to communication between microservices (service-to-service).",
    domain: "Container Orchestration",
    competency: "Service Mesh"
  },
  {
    number: "67",
    question: "What Kubernetes object represents a piece of storage in the cluster, provisioned by an administrator or dynamically?",
    "options": {
      A: "PersistentVolumeClaim (PVC)",
      B: "StorageClass",
      C: "PersistentVolume (PV)",
      D: "Volume",
      E: ""
    },
    correctAnswer: "C",
    explanation: "A PersistentVolume (PV) is a piece of storage provisioned for use in the cluster, independent of any individual Pod.",
    domain: "Container Orchestration",
    competency: "Storage"
  },
  {
    number: "68",
    question: "What does a PersistentVolumeClaim (PVC) represent in Kubernetes?",
    "options": {
      A: "A request for storage by a user",
      B: "A type of storage backend",
      C: "A node's local storage",
      D: "A backup of a volume",
      E: ""
    },
    correctAnswer: "A",
    explanation: "A PVC is a request made by a user (or Pod) for storage resources defined by a PV.",
    domain: "Container Orchestration",
    competency: "Storage"
  },
  {
    number: "69",
    question: "What is the function of a StorageClass in Kubernetes?",
    "options": {
      A: "To define types of storage",
      B: "To claim a specific PV",
      C: "To attach storage to a Pod",
      D: "To backup volume data",
      E: ""
    },
    correctAnswer: "A",
    explanation: "StorageClasses allow administrators to define different \"classes\" of storage (e.g., 'fast-ssd', 'cheap-hdd') for dynamic provisioning.",
    domain: "Container Orchestration",
    competency: "Storage"
  },
  {
    number: "70",
    question: "Which mechanism allows Kubernetes to automatically adjust the number of Pods in a Deployment based on CPU utilization or custom metrics?",
    "options": {
      A: "Vertical Pod Autoscaler (VPA)",
      B: "Cluster Autoscaler (CA)",
      C: "Horizontal Pod Autoscaler (HPA)",
      D: "Node Problem Detector (NPD)",
      E: ""
    },
    correctAnswer: "C",
    explanation: "The HPA automatically scales the number of Pod replicas based on observed metrics like CPU or memory usage.",
    domain: "Cloud Native Architecture",
    competency: "Autoscaling"
  },
  {
    number: "71",
    question: "What is the primary goal of the Cluster Autoscaler?",
    "options": {
      A: "Scale Pod replicas",
      B: "Scale cluster Nodes",
      C: "Scale Persistent Volumes",
      D: "Scale Service endpoints",
      E: ""
    },
    correctAnswer: "B",
    explanation: "The Cluster Autoscaler adjusts the number of Nodes in the cluster based on pending Pods that cannot be scheduled due to resource limits.",
    domain: "Cloud Native Architecture",
    competency: "Autoscaling"
  },
  {
    number: "72",
    question: "What term describes an architectural approach where applications are built as small, independent services that run in their own processes?",
    "options": {
      A: "Monolithic",
      B: "Microservices",
      C: "Serverless",
      D: "N-Tier",
      E: ""
    },
    correctAnswer: "B",
    explanation: "Microservices architecture structures an application as a collection of loosely coupled, independently deployable services.",
    domain: "Cloud Native Architecture",
    competency: "Cloud Native Principles"
  },
  {
    number: "73",
    question: "What does \"Serverless\" computing primarily abstract away from the developer?",
    "options": {
      A: "Networking",
      B: "Storage",
      C: "Server Management",
      D: "Operating System choice",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Serverless platforms (like FaaS) manage the underlying infrastructure, allowing developers to focus solely on code execution.",
    domain: "Cloud Native Architecture",
    competency: "Serverless"
  },
  {
    number: "74",
    question: "Which organization hosts Kubernetes and promotes the growth of the cloud native ecosystem?",
    "options": {
      A: "Linux Foundation (LF)",
      B: "Apache Software Foundation (ASF)",
      C: "Cloud Native Computing Foundation (CNCF)",
      D: "Open Source Initiative (OSI)",
      E: ""
    },
    correctAnswer: "C",
    explanation: "The CNCF, part of the Linux Foundation, stewards Kubernetes and many other cloud native projects.",
    domain: "Cloud Native Architecture",
    competency: "Community and Governance"
  },
  {
    number: "75",
    question: "What is the benefit of using open standards in cloud native technologies?",
    "options": {
      A: "Vendor lock-in",
      B: "Increased complexity",
      C: "Interoperability & Portability",
      D: "Reduced security",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Open standards (like OCI, CRI, CNI) ensure that different tools and platforms can work together, preventing vendor lock-in.",
    domain: "Cloud Native Architecture",
    competency: "Open Standards"
  },
  {
    number: "76",
    question: "In a typical cloud native environment, which persona is primarily responsible for designing and building the application?",
    "options": {
      A: "Operator",
      B: "Developer",
      C: "Site Reliability Engineer (SRE)",
      D: "Security Engineer",
      E: ""
    },
    correctAnswer: "B",
    explanation: "Developers focus on writing, building, and testing the application code that runs within the cloud native platform.",
    domain: "Cloud Native Architecture",
    competency: "Roles and Personas"
  },
  {
    number: "77",
    question: "Which persona is typically focused on the reliability, scalability, and maintenance of the underlying Kubernetes platform?",
    "options": {
      A: "End User",
      B: "Application Developer",
      C: "Platform Operator / SRE",
      D: "Data Scientist",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Operators or SREs manage the Kubernetes cluster itself, ensuring it's healthy, scalable, and available for developers.",
    domain: "Cloud Native Architecture",
    competency: "Roles and Personas"
  },
  {
    number: "78",
    question: "What are the three pillars of observability in cloud native systems?",
    "options": {
      A: "Alerts, Dashboards, Reports",
      B: "Logs, Metrics, Traces",
      C: "Monitoring, Logging, Profiling",
      D: "Scaling, Scheduling, Storing",
      E: ""
    },
    correctAnswer: "B",
    explanation: "Logs (events), Metrics (measurements over time), and Traces (request flows) are considered the fundamental pillars of observability.",
    domain: "Cloud Native Observability",
    competency: "Telemetry & Observability"
  },
  {
    number: "79",
    question: "What type of telemetry data records discrete events that happened at a specific time?",
    "options": {
      A: "Metrics",
      B: "Traces",
      C: "Logs",
      D: "Profiles",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Logs provide timestamped records of events, often used for debugging or auditing.",
    domain: "Cloud Native Observability",
    competency: "Telemetry & Observability"
  },
  {
    number: "80",
    question: "What type of telemetry data represents a measurement sampled over time, often aggregated?",
    "options": {
      A: "Metrics",
      B: "Traces",
      C: "Logs",
      D: "Events",
      E: ""
    },
    correctAnswer: "A",
    explanation: "Metrics are numerical values tracked over time (e.g., CPU usage, request count) used for monitoring trends and performance.",
    domain: "Cloud Native Observability",
    competency: "Telemetry & Observability"
  },
  {
    number: "81",
    question: "What type of telemetry data shows the path and duration of a request as it flows through multiple services?",
    "options": {
      A: "Metrics",
      B: "Traces",
      C: "Logs",
      D: "Alerts",
      E: ""
    },
    correctAnswer: "B",
    explanation: "Traces (specifically distributed traces) track a request's journey across different microservices, identifying bottlenecks.",
    domain: "Cloud Native Observability",
    competency: "Telemetry & Observability"
  },
  {
    number: "82",
    question: "Which open-source monitoring system, graduated by the CNCF, is widely used for collecting and querying time-series metrics in Kubernetes?",
    "options": {
      A: "Grafana",
      B: "Jaeger",
      C: "Prometheus",
      D: "Fluentd",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Prometheus is the de facto standard for metrics collection and alerting in the Kubernetes ecosystem.",
    domain: "Cloud Native Observability",
    competency: "Prometheus"
  },
  {
    number: "83",
    question: "How does Prometheus typically gather metrics from applications and infrastructure?",
    "options": {
      A: "Pushing metrics to endpoints",
      B: "Pulling metrics via scraping",
      C: "Reading log files directly",
      D: "Using kernel probes",
      E: ""
    },
    correctAnswer: "B",
    explanation: "Prometheus operates on a pull model, periodically scraping HTTP endpoints exposed by targets (applications, exporters) for metrics.",
    domain: "Cloud Native Observability",
    competency: "Prometheus"
  },
  {
    number: "84",
    question: "What language is used to write queries in Prometheus?",
    "options": {
      A: "SQL",
      B: "PromQL",
      C: "JSONPath",
      D: "YAML",
      E: ""
    },
    correctAnswer: "B",
    explanation: "PromQL (Prometheus Query Language) is the powerful functional query language used to select and aggregate time series data.",
    domain: "Cloud Native Observability",
    competency: "Prometheus"
  },
  {
    number: "85",
    question: "In cloud native cost management, what does \"FinOps\" primarily focus on?",
    "options": {
      A: "Optimizing application code",
      B: "Managing cloud spending",
      C: "Improving network security",
      D: "Automating deployments",
      E: ""
    },
    correctAnswer: "B",
    explanation: "FinOps is a cultural practice and framework that brings financial accountability to the variable spend model of the cloud.",
    domain: "Cloud Native Observability",
    competency: "Cost Management"
  },
  {
    number: "86",
    question: "Why can cost management be challenging in Kubernetes environments?",
    "options": {
      A: "Lack of monitoring tools",
      B: "Shared resources & dynamic workloads",
      C: "Fixed infrastructure costs",
      D: "Infrequent deployments",
      E: ""
    },
    correctAnswer: "B",
    explanation: "The shared nature of cluster resources and the dynamic scaling of workloads make it difficult to attribute costs accurately.",
    domain: "Cloud Native Observability",
    competency: "Cost Management"
  },
  {
    number: "87",
    question: "What is the practice of using Git repositories as the single source of truth for defining and managing infrastructure and applications?",
    "options": {
      A: "CI/CD",
      B: "DevOps",
      C: "GitOps",
      D: "Infrastructure as Code (IaC)",
      E: ""
    },
    correctAnswer: "C",
    explanation: "GitOps leverages Git's features (versioning, history, PRs) to manage infrastructure and application deployment declaratively.",
    domain: "Cloud Native Application Delivery",
    competency: "GitOps"
  },
  {
    number: "88",
    question: "Which core principle differentiates GitOps from general Infrastructure as Code (IaC)?",
    "options": {
      A: "Using code for infra config",
      B: "Automating infrastructure tests",
      C: "Using Git as the source of truth",
      D: "Manual deployment approval",
      E: ""
    },
    correctAnswer: "C",
    explanation: "While IaC uses code, GitOps specifically mandates Git as the declarative source of truth and uses agents to enforce that state.",
    domain: "Cloud Native Application Delivery",
    competency: "GitOps"
  },
  {
    number: "89",
    question: "What does \"CI\" stand for in the context of application delivery?",
    "options": {
      A: "Continuous Integration",
      B: "Cluster Infrastructure",
      C: "Container Interface",
      D: "Cloud Instance",
      E: ""
    },
    correctAnswer: "A",
    explanation: "Continuous Integration involves frequently merging code changes into a central repository, followed by automated builds and tests.",
    domain: "Cloud Native Application Delivery",
    competency: "CI/CD"
  },
  {
    number: "90",
    question: "What does \"CD\" stand for in CI/CD?",
    "options": {
      A: "Container Deployment",
      B: "Continuous Delivery/Deployment",
      C: "Cluster Discovery",
      D: "Centralized Dashboard",
      E: ""
    },
    correctAnswer: "B",
    explanation: "Continuous Delivery ensures code changes can be released quickly, while Continuous Deployment automatically deploys them to production.",
    domain: "Cloud Native Application Delivery",
    competency: "CI/CD"
  },
  {
    number: "91",
    question: "Which stage in a typical CI/CD pipeline for Kubernetes usually involves creating a container image?",
    "options": {
      A: "Testing",
      B: "Building",
      C: "Deployment",
      D: "Monitoring",
      E: ""
    },
    correctAnswer: "B",
    explanation: "The build stage compiles code (if necessary) and packages the application and its dependencies into a container image (e.g., Docker).",
    domain: "Cloud Native Application Delivery",
    competency: "CI/CD"
  },
  {
    number: "92",
    question: "Which tool is commonly used in CI/CD pipelines to automate the build, test, and deployment processes?",
    "options": {
      A: "Kubernetes",
      B: "Docker",
      C: "Jenkins / GitLab CI / GitHub Actions",
      D: "Prometheus",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Tools like Jenkins, GitLab CI, GitHub Actions, Argo CD, Flux etc., orchestrate the steps within a CI/CD pipeline.",
    domain: "Cloud Native Application Delivery",
    competency: "CI/CD"
  },
  {
    number: "93",
    question: "What is the primary goal of Application Delivery in a cloud native context?",
    "options": {
      A: "To secure the cluster",
      B: "To monitor resource usage",
      C: "To reliably deploy & manage apps",
      D: "To provision infrastructure",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Application delivery focuses on the processes and tools used to get applications running reliably and efficiently in the environment.",
    domain: "Cloud Native Application Delivery",
    competency: "Application Delivery Fundamentals"
  },
  {
    number: "94",
    question: "In Kubernetes RBAC (Role-Based Access Control), what defines a set of permissions?",
    "options": {
      A: "Role / ClusterRole",
      B: "ServiceAccount",
      C: "RoleBinding / ClusterRoleBinding",
      D: "User",
      E: ""
    },
    correctAnswer: "A",
    explanation: "A Role (namespace-scoped) or ClusterRole (cluster-scoped) contains rules that represent a set of permissions on resources.",
    domain: "Container Orchestration",
    competency: "Security"
  },
  {
    number: "95",
    question: "What object binds a Role or ClusterRole to a user, group, or ServiceAccount?",
    "options": {
      A: "Secret",
      B: "ConfigMap",
      C: "NetworkPolicy",
      D: "RoleBinding / ClusterRoleBinding",
      E: ""
    },
    correctAnswer: "D",
    explanation: "A RoleBinding (namespace-scoped) or ClusterRoleBinding (cluster-scoped) grants the permissions defined in a Role/ClusterRole to subjects.",
    domain: "Container Orchestration",
    competency: "Security"
  },
  {
    number: "96",
    question: "If you need a Pod to run on every single Node in the cluster (or a subset), which controller is most suitable?",
    "options": {
      A: "Deployment",
      B: "StatefulSet",
      C: "DaemonSet",
      D: "Job",
      E: ""
    },
    correctAnswer: "C",
    explanation: "DaemonSets ensure that all (or some) Nodes run a copy of a Pod, useful for cluster services like log collectors or node monitors.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Resources"
  },
  {
    number: "97",
    question: "What is a primary difference between a Deployment and a StatefulSet?",
    "options": {
      A: "StatefulSets manage Pods",
      B: "Deployments are for databases",
      C: "StatefulSets provide stable IDs",
      D: "Deployments use PVs",
      E: ""
    },
    correctAnswer: "C",
    explanation: "StatefulSets provide guarantees about the ordering and uniqueness of Pods, including stable network identifiers and persistent storage.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Resources"
  },
  {
    number: "98",
    question: "Which Kubernetes API object is used to manage external access to services in a cluster, typically HTTP/S?",
    "options": {
      A: "Service (LoadBalancer type)",
      B: "NodePort Service",
      C: "Ingress",
      D: "ExternalName Service",
      E: ""
    },
    correctAnswer: "C",
    explanation: "Ingress provides HTTP/S routing rules to manage external users' access to services within the cluster based on hostnames or paths.",
    domain: "Container Orchestration",
    competency: "Networking"
  },
  {
    number: "99",
    question: "What design pattern involves running an additional container within a Pod to provide auxiliary functions (like logging or monitoring) to the main application container?",
    "options": {
      A: "Init Container",
      B: "Sidecar Container",
      C: "Ephemeral Container",
      D: "Job Container",
      E: ""
    },
    correctAnswer: "B",
    explanation: "The Sidecar pattern adds helper containers alongside the main application container within the same Pod network/storage namespace.",
    domain: "Kubernetes Fundamentals",
    competency: "Containers"
  },
  {
    number: "100",
    question: "What fundamental concept allows Kubernetes to maintain the desired state declared by the user?",
    "options": {
      A: "Imperative Commands",
      B: "Control Loop / Reconciliation",
      C: "Manual Scaling",
      D: "Direct Node Access",
      E: ""
    },
    correctAnswer: "B",
    explanation: "Kubernetes controllers operate on control loops, constantly comparing the desired state (from API objects) with the actual cluster state.",
    domain: "Kubernetes Fundamentals",
    competency: "Kubernetes Architecture"
  },
  
]

// This function simulates fetching the data from the CSV
// In a real application, you might want to fetch the actual CSV and parse it
export async function fetchExamQuestions(): Promise<Question[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return examQuestions
}
