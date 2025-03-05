import React, { useState } from 'react';

const Notetaking = () => {
  const [notes, setnotes] = useState([]);
  const [newnote, setnewnote] = useState('');
  const [editnote, seteditnote] = useState(null);

  function btnochange(event) {
    setnewnote(event.target.value);
  }

  function addnotes() {
    if (newnote.trim() !== '') {
      if (editnote !== null) {
        const updatednotes = [...notes];
        updatednotes[editnote] = newnote;
        setnotes(updatednotes);
        seteditnote(null);
      } else {
        setnotes((prev) => [...prev, newnote]);
      }
      setnewnote('');
    }
  }

  function deletenotes(index) {
    const updatenotes = notes.filter((_, i) => i !== index);
    setnotes(updatenotes);
    if (editnote === index) {
      setnewnote('');
      seteditnote(null);
    }
  }

  function editnotes(index) {
    setnewnote(notes[index]);
    seteditnote(index);
  }

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl text-center pt-10 font-sans">
        <h1 className="text-3xl sm:text-4xl text-white mb-6">Take Notes</h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="text"
            value={newnote}
            placeholder="Enter your Notes....."
            onChange={btnochange}
            onKeyDown={(event) => event.key === 'Enter' && addnotes()}
            className="w-full sm:w-[70%] lg:w-[50%] text-lg px-4 py-2 border-2 text-white bg-gray-900 border-gray-600 rounded-md"
          />
          <button
            className="text-lg font-bold bg-green-500 hover:bg-green-600 px-5 py-3 rounded-md text-white transition duration-300 ease-in-out"
            onClick={addnotes}
          >
            {editnote === null ? 'Add' : 'Update'}
          </button>
        </div>

        <ol className="mt-6 w-full max-w-3xl">
          {notes.map((task, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between text-lg font-bold py-4 px-4 bg-gray-100 mb-4 border border-gray-300 rounded-md"
            >
              <span className="flex-grow text-center sm:text-left">{task}</span>
              <div className="flex gap-3 mt-2 sm:mt-0">
                <button
                  className="text-sm bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white transition duration-300 ease-in-out"
                  onClick={() => deletenotes(index)}
                >
                  Delete
                </button>
                <button
                  className="text-sm bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white transition duration-300 ease-in-out"
                  onClick={() => editnotes(index)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Notetaking;
