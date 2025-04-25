var index_default = {
  async fetch(request: Request, env: any) {
    let prompt = "cyberpunk cat";

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

    const inputs = { prompt };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png"
      }
    });
  }
};

export {
  index_default as default
};

