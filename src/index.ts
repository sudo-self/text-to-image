var index_default = {
  async fetch(request: Request, env: any) {

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    let prompt = "The Matrix"; 

    if (request.method === "GET") {
      const url = new URL(request.url);
      const queryPrompt = url.searchParams.get("prompt");
      if (queryPrompt) prompt = queryPrompt;
    } else if (request.method === "POST") {
      try {
        const body = await request.json();
        if (body.prompt) prompt = body.prompt;
      } catch (e) {
        return new Response("Invalid JSON", {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });
      }
    }

    // AI 
    try {
      const response = await env.AI.run(
        "@cf/stabilityai/stable-diffusion-xl-base-1.0",
        { prompt }
      );

      return new Response(response, {
        headers: {
          "Content-Type": "image/png",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (err) {
      return new Response("AI generation error", {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
  }
};

export {
  index_default as default
};



