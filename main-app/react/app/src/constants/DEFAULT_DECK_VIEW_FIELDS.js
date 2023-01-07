import ScoreToStars from "../components/score/ScoreToStars";
import ymdFormatted from "../functions/ymdFormatted";

const DEFAULT_DECK_VIEW_FIELDS = [
  {
    name: "Name",
    className: "DeckName",
    key: "name",
    position: "top",
    visualizationFunction: (value) => value,
  },
  /* {
    name: "Author",
    className: "DeckAuthor",
    key: "author",
    position: "top",
    visualizationFunction: (value) => value,
  }, */
  {
    name: "Score",
    className: "DeckScore",
    key: "score",
    position: "top",
    visualizationFunction: (value) => (
      <>
        <ScoreToStars score={value} />
        {value}
      </>
    ),
  },
  {
    name: "Number of Ratings",
    className: "DeckNumRatings",
    position: "middle",
    key: "numRatings",
    visualizationFunction: (value) => value,
  },
  {
    name: "Number of Downloads",
    className: "DeckNumDownloads",
    position: "middle",
    key: "numDownloads",
    visualizationFunction: (value) => value,
  },
  {
    name: "Main Tag",
    className: "DeckMainTag",
    position: "middle",
    key: "mainTag",
    visualizationFunction: (value) => value,
  },
  {
    name: "Other Tags",
    className: "DeckOtherTags",
    position: "middle",
    key: "otherTags",
    visualizationFunction: (value) => value.join(", "),
  },
  {
    name: "Number of Views",
    className: "DeckNumViews",
    position: "extra",
    key: "numViews",
    visualizationFunction: (value) => value,
  },
  {
    name: "Number of Notes",
    className: "DeckNumNotes",
    position: "extra",
    key: "numNotes",
    visualizationFunction: (value) => value,
  },
  {
    name: "File Size",
    className: "DeckFileSize",
    position: "extra",
    key: "fileSize",
    visualizationFunction: (value) => "" + value + " MB",
  },
  {
    name: "Number of Audio Items",
    className: "DeckNumAudio",
    position: "extra",
    key: "numAudioItems",
    visualizationFunction: (value) => value,
  },
  {
    name: "Number of Images",
    className: "DeckNumImages",
    position: "extra",
    key: "numImages",
    visualizationFunction: (value) => value,
  },
  {
    name: "Number of Likes",
    className: "DeckNumLikes",
    position: "extra",
    key: "numLikes",
    visualizationFunction: (value) => value,
  },
  {
    name: "Number of Dislikes",
    className: "DeckNumDislikes",
    position: "extra",
    key: "numDislikes",
    visualizationFunction: (value) => value,
  },
  {
    name: "Earliest Recorded Modification Date",
    className: "DeckEarliestRecorded",
    position: "extra",
    key: "earliestRecorded",
    visualizationFunction: ymdFormatted,
  },
  {
    name: "Latest Modification Date",
    className: "DeckLatest",
    position: "extra",
    key: "latest",
    visualizationFunction: ymdFormatted,
  },
  {
    name: "ID",
    className: "DeckId",
    position: "extra",
    key: "id",
    visualizationFunction: (value) => value,
  },
  {
    name: "Anki ID",
    className: "DeckAnkiId",
    position: "extra",
    key: "ankiId",
    visualizationFunction: (value) => value,
  },
];

export default DEFAULT_DECK_VIEW_FIELDS;
