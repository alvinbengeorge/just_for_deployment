"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [screen, setScreen] = useState<number>(0);
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
          <div className="overflow-x-auto">
            <h1 className="text-4xl text-center p-2 bg-base-200 rounded-md">Ingredients</h1>
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}
