import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://console.msp360.com/api/build/download?urlParams=R3hRYnM0NlJBeFdYSFp0UXVWd2VYVWtuVW0vUkRZbTlmUnAvYkpreFZQOVBoUm1HZTQ0cTljUG5ZZC9nWEFHQ1ZuVjErdEN5RzBxcUR3NU1SYU5NSXQvcm9ZbXgxR3o5SlQyeGZXUVE4VldQOG1PQW5TQkZXY0d6ZEY4RkNRb2VYcmV4Q2pZTnhrbVE3eGFTZFVvT2xGWDZWSlVDR0xuc3ZNVnA3QUJpQzRVL0oweVg0T2JsQTJZakFEQ1JrZkVYTVVxckZxaktXNFA3NzZJYi9nU1lTdz09/", // Replace this with your actual link
    },
  });
});
