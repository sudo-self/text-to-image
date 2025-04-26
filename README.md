<center>
  <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/sudo-self/text-to-image-worker">
    <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" />
  </a>
</center>
<br />
                
  ```
 curl -X POST https://text-to-image.jessejesse.workers.dev -H "Content-Type: application/json" -d '{"prompt":""}' --output generated-image.png
  ```
  ```
 curl "https://text-to-image.jessejesse.workers.dev?prompt=" --output generated-image.png
  ```
  ```
 wget "https://text-to-image.jessejesse.workers.dev?prompt=" -O generated-image.png
  ```


