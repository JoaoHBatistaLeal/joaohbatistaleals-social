import { useState } from 'react';
import { Lightbulb } from 'lucide-react';

export default function PostField() {
  const [texto, setTexto] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(e.target.value);
  };

  const handleSubmit = () => {
    setTexto('');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg w-250 mx-auto p-5 mt-10 ml-22">
      <div className="flex items-center gap-4">

        <img src="favicon.png" alt="Avatar"className="w-10 h-10 rounded-full flex-shrink-0"/>

        <div className="bg-white flex items-center rounded-full px-4 h-12 flex-1 border border-gray-300 shadow-sm">
          <input type="text" value={texto} onChange={handleChange} placeholder="How are u feelin today?" className="flex-1 text-gray-800 outline-none text-base font-poppins" />
        </div>

        <button onClick={handleSubmit} className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors flex-shrink-0" aria-label="Ideias">
          <Lightbulb className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
