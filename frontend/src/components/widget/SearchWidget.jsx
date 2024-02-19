import React from 'react';
import { useState, useEffect } from 'react';
const SearchWidget = () => {

    const [countries, setCountries] = useState([]); // For storing countries
  const [selectedCountry, setSelectedCountry] = useState('');
  const [colleges, setColleges] = useState([]); // For storing colleges based on selected country

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }
    useEffect(() => {
        // Fetch countries and initial college data here
        // This is a simplified example; you might be fetching this data from an API
        setCountries(['USA', 'Canada', 'UK']);
        setColleges([
          { name: 'Harvard University', country: 'USA' },
          { name: 'MIT', country: 'USA' },
          { name: 'University of Toronto', country: 'Canada' },
          { name: 'University of Oxford', country: 'UK' },
        ]);
      }, []);
    
      const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
      };
    
      const filteredColleges = colleges.filter(college => college.country === selectedCountry);
    
    return (
        <>
            <div className="widget widget-search">
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="Search" className="searchbox" autoComplete='off' required />
                    <button type="submit" className="searchbutton fa fa-search"></button>
                </form>
                {/* filter by country */}
                <h1>Find Colleges by Country</h1>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>
      <div>
        {selectedCountry && (
          <ul>
            {filteredColleges.map((college, index) => (
              <li key={index}>{college.name}</li>
            ))}
          </ul>
        )}
      </div>
            </div>
        </>
    );
};

export default SearchWidget;