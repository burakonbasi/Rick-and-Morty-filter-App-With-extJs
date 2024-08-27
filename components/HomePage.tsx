"use client"; // Client Component olarak işaretler

import { useState } from 'react';
import Image from 'next/image';

interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

interface HomePageProps {
  characters: Character[];
}

export default function HomePage({ characters }: HomePageProps) {
  const [statusFilter, setStatusFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  const filteredCharacters = characters.filter((character) => {
    return (
      (statusFilter === '' || character.status === statusFilter) &&
      (genderFilter === '' || character.gender === genderFilter)
    );
  });

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-5xl font-extrabold text-white text-center mb-8">Rick and Morty Characters</h1>
      <div className="flex justify-center mb-8 space-x-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded bg-gray-800 text-white border-gray-700 focus:outline-none focus:border-blue-500"
        >
          <option value="">All Statuses</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="p-2 border rounded bg-gray-800 text-white border-gray-700 focus:outline-none focus:border-blue-500"
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCharacters.map((character) => (
          <div
            key={character.id}
            className="p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={character.image}
              alt={character.name}
              width={200}
              height={300}
              className="w-full h-auto rounded mb-4"
            />
            <h2 className="text-2xl font-bold text-white">{character.name}</h2>
            <p className="text-gray-400">Status: {character.status}</p>
            <p className="text-gray-400">Gender: {character.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}