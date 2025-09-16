const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getPackages() {
  const res = await fetch(${apiUrl}/packages);
  const data = await res.json();
  return data;
