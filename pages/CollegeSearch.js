import { useState, useEffect } from 'react';

function CollegeSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchColleges(searchTerm) {
    setLoading(true);
    const res = await fetch(`https://api.data.gov.in/resource/4b67c33f-5646-422e-bd05-085a24e0b9db?format=json&filters=institute_name like '%25${searchTerm}%25'&api-key=YOUR_API_KEY_HERE`);
    const data = await res.json();
    setColleges(data.records);
    setLoading(false);
  }

  useEffect(() => {
    fetchColleges(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {loading && <div>Loading...</div>}
      {!loading && (
        <ul>
          {colleges.map((college) => (
            <li key={college.id}>
              <h2>{college.institute_name}</h2>
              <ul>
                <li>{college.branch_name}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CollegeSearch;
