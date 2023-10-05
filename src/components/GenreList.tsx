import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
