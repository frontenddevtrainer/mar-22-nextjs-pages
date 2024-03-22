import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const json = await response.json();

  return { props: { characters: json } };
};

export default function Home({
  characters,
}: {
  characters: { info: any; results: any[] };
}) {
  console.log(characters);

  const [counter, setCounter] = useState(0);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {counter}
      {characters.results?.map((character) => {
        return (
          <div
            key={character.id}
            className="p-10"
            onClick={() => {
              setCounter((counter) => counter + 1);
            }}
          >
            {character.name}
          </div>
        );
      })}
    </main>
  );
}
