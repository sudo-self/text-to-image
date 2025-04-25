var index_default = {
  async fetch(request: Request, env: any) {
    let prompt = "The Matrix"; // default fallback

    if (request.method === "GET") {
      const url = new URL(request.url);
      const queryPrompt = url.searchParams.get("prompt");
      if (queryPrompt) prompt = queryPrompt;
    } else if (request.method === "POST") {
      try {
        const body = await request.json();
        if (body.prompt) prompt = body.prompt;
      } catch (e) {
        return new Response("Invalid JSON", { status: 400 });
      }
    }

    // Run the AI model
    try {
      const response = await env.AI.run(
        "@cf/stabilityai/stable-diffusion-xl-base-1.0",
        { prompt }
      );

      return new Response(response, {
        headers: { "content-type": "image/png" }
      });
    } catch (err) {
      return new Response("AI generation error", { status: 500 });
    }
  }
};

export {
  index_default as default
};


