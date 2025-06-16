'use client';
import { useEffect, useState } from "react";


export default function Home() {
   const [message, setMessage] = useState('');

     useEffect(() => {
    fetch('https://supreme-adventure-7659p5j57q72x45g-4000.app.github.dev')
      .then((res) => res.text())
      .then((text) => setMessage(text));
  }, []);


  return (
   <div>{message}</div>
  );
}
