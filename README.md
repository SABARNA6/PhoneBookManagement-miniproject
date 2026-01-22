
## **Project Aim**

**Aim:**
To build and deploy a **Phone Book Management web application** that allows users to **add, edit, delete, and view contacts**, using a modern frontend stack (React + Tailwind CSS + Vite) and Docker for containerization. The project is hosted on **Render** to demonstrate deployment of a containerized web application.

---
Live link :<https://phonebookmanagement-miniproject.onrender.com>

## **Problems Faced(What i Learned with this project deployment)**

1. **Docker Image Issues**

   * Initially, your Dockerfile was not properly structured.
   * Node modules were being copied incorrectly.
   * Port exposure was not aligned with Render requirements.
   * The app inside the container was listening on `127.0.0.1` instead of `0.0.0.0`.

2. **Port Mapping Issues**

   * Vite’s default port (5173) or hardcoded port (3000) did not match Render’s dynamic `$PORT`.
   * Browsers received `ERR_EMPTY_RESPONSE` because Docker/Render could not forward traffic to the wrong port.

3. **Vite Security Restriction**

   * “Blocked request” errors occurred because Render’s host (`phonebookmanagement-miniproject.onrender.com`) was not listed in `server.allowedHosts`.
   * Only localhost requests were initially allowed.

4. **Docker Hub & Image Deployment**

   * Pushing images to Docker Hub required correct tagging (`<username>/<repo>:<tag>`).
   * Private images caused deployment errors in Hugging Face or Render if credentials were not provided.

5. **Render Deployment Configuration**

   * Misunderstanding of the port Render expects (default 10000 / `$PORT` environment variable).
   * Using hardcoded ports broke deployment.
   * Initial Docker CMD did not pass `--host` or the `$PORT` variable.
   * Logs and debugging were needed to check if the app was running inside the container.

6. **General Development Environment Issues**

   * Using Vite + Tailwind + React requires proper configuration for Docker and production deployment.
   * Local development settings (like `5173` port) conflicted with containerized deployment requirements.

---

## **Summary of Key Fixes**

* Use **`--host`** to bind to `0.0.0.0`.
* Use **Render’s `$PORT`** environment variable instead of hardcoding a port.
* Add Render’s host to **`allowedHosts`** in `vite.config.js`.
* Properly structure **Dockerfile** with multi-step copy and npm install.
* Push **public Docker images** correctly for deployment.
* Check logs to verify container health and accessibility.
