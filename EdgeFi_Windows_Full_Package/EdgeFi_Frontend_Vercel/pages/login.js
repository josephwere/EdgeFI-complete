const api = process.env.NEXT_PUBLIC_API_URL;

const res = await fetch(${api}/users/login, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});
