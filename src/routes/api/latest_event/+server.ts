import event from "../../event";

/** @type {import('./$types').RequestHandler} */
export function GET() {
  return new Response(JSON.stringify(event));
}

