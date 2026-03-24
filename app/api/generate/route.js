import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("linkly");
  const collection = db.collection("url");
  const { url, shorturl } = body;

  //check if the short url exist
  const shortUrlExist = await collection.findOne({
    shorturl: body.shorturl,
  });

  if (shortUrlExist) {
    return Response.json({
      success: false,
      error: true,
      message: "Short URL already exists",
    });
  }

  await db.collection("url").insertOne({
    url,
    shorturl,
  });

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });
  return Response.json({
    success: true,
    error: false,
    message: "URL Generated Successfully",
    shortUrl: `${process.env.NEXT_PUBLIC_HOST}/${shorturl}`,
  });
}
