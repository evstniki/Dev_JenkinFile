# CI/CD Pipeline Project

This repository demonstrates a fully automated CI/CD pipeline for building, testing, and deploying a web application. The project leverages modern tools like Docker, Jenkins/GitHub Actions, and a cloud provider (AWS/GCP/Azure) for seamless integration and deployment.

---

## Project Overview

### Goal

Automate the build, test, and deployment process of a web application using CI/CD practices.

### Tech Stack

- **CI/CD Tool:** Jenkins / GitHub Actions / GitLab CI/CD
- **Containerization:** Docker
- **Cloud Provider:** AWS / GCP / Azure (or Kubernetes cluster for deployment)
- **Web Framework:** Flask (Python) / Node.js

---

## Setup Instructions

### Prerequisites

1. **Install Docker:**  
   [Docker Installation Guide](https://docs.docker.com/get-docker/)

2. **Cloud Provider Account:**  
   Create an account with AWS, GCP, or Azure and set up the CLI for your preferred cloud provider.

3. **CI/CD Tool:**
   - **For GitHub Actions:** Ensure your repository is connected to GitHub.
   - **For Jenkins:** Install and configure Jenkins on your local machine or a server.

---

### Step 1: Web Application

The repository includes a small web application created using Flask (Python).  
To set up the application:

1. Navigate to the `app` directory:
   ```bash
   cd ci-cd-pipeline-project
   ```
2. Install dependencies directory:
   ```bash
   npm install
   ```
3. Run:
   ```bash
   npm start
   ```

### Step 2: Dockerization

1. Build the Docker image:

   ```bash
   docker build -t node-app .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:3000 node-app
   ```

3. Access the application at http://localhost:3000
