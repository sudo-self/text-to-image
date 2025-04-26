
## POST GET WGET
  ```
 curl -X POST https://text-to-image.jessejesse.workers.dev -H "Content-Type: application/json" -d '{"prompt":""}' --output generated-image.png
  ```
  ```
 curl "https://text-to-image.jessejesse.workers.dev?prompt=" --output generated-image.png
  ```
  ```
 wget "https://text-to-image.jessejesse.workers.dev?prompt=" -O generated-image.png
  ```


