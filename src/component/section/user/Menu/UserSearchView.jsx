import React, { useState } from 'react';
import axios from 'axios';

const JasaSearch = () => {
    const [query, setQuery] = useState('');
    const [jasaList, setJasaList] = useState([]);
    const [error, setError] = useState('');

    const searchJasa = async () => {
        if (!query.trim()) {
            return alert("Masukkan kata kunci pencarian!");
        }

        try {
            const response = await axios.get(`https://backend-production-c259.up.railway.app/jasa/search?q=${query.trim()}`);
            const jasaData = response.data.data;

            if (jasaData.length === 0) {
                setJasaList([]);
                setError("Tidak ada jasa ditemukan.");
            } else {
                setJasaList(jasaData);
                setError('');
            }
        } catch (err) {
            setError("Gagal mengambil data jasa!");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex space-x-2 mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Masukkan kata kunci pencarian"
                    className="border border-gray-300 rounded-md p-2 w-full"
                />
                <button 
                    onClick={searchJasa} 
                    className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
                >
                    Cari
                </button>
            </div>
            
            {error && <p className="text-red-500">{error}</p>}
            <div id="resultContainer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {jasaList.map(jasa => (
                    <div className="card border rounded-lg shadow-lg p-4" key={jasa.id}>
                        <img src={jasa.image_url} alt={jasa.title} className="rounded-md mb-2" />
                        <h3 className="text-lg font-semibold">{jasa.title}</h3>
                        <p className="text-gray-700">{jasa.description}</p>
                        <p className="font-medium"><strong>Kategori:</strong> {jasa.category}</p>
                        <p className="font-medium"><strong>Harga:</strong> Rp {jasa.price.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JasaSearch;