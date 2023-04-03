import "./SearchWord.scss";

export const SearchWord = ({ word }) => {
  return (
    <div className="search-word-wrapper">
      <span>{word.trim()}</span>
    </div>
  );
};
