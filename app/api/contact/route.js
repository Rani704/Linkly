export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Contact Form Data:", body);

    // You can later send email or store in DB here

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false });
  }
}