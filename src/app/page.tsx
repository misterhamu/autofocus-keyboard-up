"use client";
import React, { useEffect, useRef } from "react";

type Props = {};

export default function Home({}: Props) {
  const buttonRef = useRef<HTMLInputElement | null>(null);
  const sss = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!sss.current) {
      return;
    }
    sss.current.click();
  }, [sss.current]);

  useEffect(() => {
    const input = document.getElementById("ssssss");
    var event1 = new Event('touchstart');
    setTimeout(() => {
      if (input) {
        input.click();
      }
    }, 2000);
    if (input) {
      //   console.log(input);
      //   input.style.background = "red";
      //   input.focus();
      //   window.focus()
    }
  }, []);

  return (
    <div className="flex flex-col gap-12">
      <button
        id="ssssss"
        className="mb-24"
        ref={sss}
        onClick={() => {
            console.log("clickme!!!!!")
          buttonRef.current?.focus();
        }}
      >
        click
      </button>
      <input
        autoFocus
        type="tel"
        id="tel"
        className="border"
        ref={buttonRef}
        onClick={() => {
          console.log("click me");
        }}
      />
    </div>
  );
}
