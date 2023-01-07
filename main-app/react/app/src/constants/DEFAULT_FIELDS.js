const validator = (r) => !!r.value;
const DEFAULT_FIELDS = [
{
    name: 'id',
    label: 'Deck id (OpenWebFlashcards)',
    inputType: 'number',
    validator,
},
{
    name: 'anki_id',
    label: 'Deck id (Anki)',
    inputType: 'number',
    validator,
},
{
    name: 'name',
    label: 'Deck name',
    placeholder: 'Enter deck name',
    validator,
},
{ name: 'numAudio', label: 'Number of audio items', inputType: 'number', validator },
{ name: 'numImages', label: 'Number of images', inputType: 'number', validator },
{ name: 'numDownloads', label: 'Number of downloads', inputType: 'number', validator },
{ name: 'numRatings', label: 'Number of ratings', inputType: 'number', validator },
{ name: 'numLikes', label: 'Number of likes', inputType: 'number', validator },
{ name: 'numDislikes', label: 'Number of dislikes', inputType: 'number', validator },
{ name: 'fileSize', label: 'File size', inputType: 'number', validator },
{ name: 'score', label: 'Score (Number of stars out of 5)', inputType: 'number', validator },
{ name: 'mainTag', label: 'Main tag', validator },
{ name: 'description', label: 'Description', valueEditorType: 'textarea' },
{ name: 'earliestRecorded', label: 'Date of earliest recorded modification', inputType: 'date' },
{ name: 'latest', label: 'Date of latest modification', inputType: 'date' }];
export default DEFAULT_FIELDS;