"use client";
import React from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = React.useState("");
  const [shorturl, setShortUrl] = React.useState("");
  const [generated, setGenerated] = React.useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(result.shortUrl);
        setUrl("");
        setShortUrl("");
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-50 my-16 p-10 rounded-2xl shadow-lg flex flex-col gap-6">
      <h1 className="font-extrabold text-3xl text-purple-700 text-center">
        Generate Your Short URLs
      </h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={url}
          className="px-5 py-3 rounded-xl bg-white text-black placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          placeholder="Enter your URL here..."
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type="text"
          value={shorturl}
          className="px-5 py-3 rounded-xl bg-white text-black placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          placeholder="Enter your custom short URL here..."
          onChange={(e) => setShortUrl(e.target.value)}
        />

        <button
          onClick={generate}
          className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl shadow-lg transition"
        >
          Generate
        </button>
      </div>

      {generated && (
        <div className="mt-6 bg-white p-5 rounded-xl shadow-md flex flex-col gap-3">
          <span className="font-semibold text-purple-700">Your Short Link</span>
          <div className="flex items-center gap-3">
            <Link href={generated} target="_blank" className="flex-1">
              <code className="block bg-gray-100 px-3 py-2 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap">
                {generated}
              </code>
            </Link>
            <button
              onClick={() => {
                navigator.clipboard.writeText(generated);
                alert("Copied to clipboard!");
              }}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorten;