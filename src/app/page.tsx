"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [screen, setScreen] = useState<number>(0);

  useEffect(() => {}, [screen]);
  return (
    <main className="grid place-items-center w-screen h-screen">
      {screen === 0 && (
        <div className="grid place-items-center gap-3">
          <h1 className="text-4xl">Upload the photo with ingredients</h1>
          <form className="flex gap-2">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              accept="image/*"
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                const input = document.querySelector(
                  "input[type=file]"
                ) as HTMLInputElement;
                const file = input.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setImage(reader.result as string);
                    setScreen(1);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {screen === 1 && (
        <div className="grid place-items-center gap-3">
          <h1 className="text-6xl text-white">Ingredients</h1>
          <Image
            src={image as string}
            width={400}
            height={400} 
            alt="Ingredients" 
            className="w-96 h-96 object-cover"
          />
          <div className="overflow-x-auto">            
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Item</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jaggery</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>salt</td>
                  <td>200 gms</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>tor dal</td>
                  <td>200 gms</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>rice</td>
                  <td>500 gms</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Rajma</td>
                  <td>200 gms</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>atta</td>
                  <td>1 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}
