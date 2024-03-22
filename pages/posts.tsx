const PostPage = ({ characters }: { characters: any[] }) => {
  return (
    <>
      {characters.map((character) => {
        return <div key={character.id}>{character.name}</div>;
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await res.json();

  return {
    props: { characters: results },
    revalidate: 3600,
  };
}

export default PostPage;
