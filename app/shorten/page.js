"use client"
import React from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, setUrl] = React.useState("");
    const [shorturl, setShortUrl] = React.useState("");
    const [generated, setGenerated] = React.useState("");

const generate = () => {
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
    setUrl("");
    setShortUrl("");
    console.log(result),
    alert(result.message)
})
  .catch((error) => console.error(error));
}

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
        <div className='flex flex-col gap-2'>
            <input type="text"
            value={url}
            className='px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 focus:outline-purple-600'
             placeholder="Enter your URL here..."
             onChange={e => setUrl(e.target.value)} />

            <input type="text"
            value={shorturl}
             className='px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 focus:outline-purple-600'
             placeholder="Enter your custom short URL here..."
             onChange={e => setShortUrl(e.target.value)} />
            <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
        </div>
        {generated && <>
        <span className='font-bold'>Your Link</span>
        <code><Link href={generated} target="_blank" >
          {generated} </Link>
      </code></>}
    </div>
  )
}

export default Shorten