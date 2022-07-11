import { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const a = faker.internet.avatar();
    const b = faker.internet.userName();

    const suggestions = [...Array(20)].map((_, i) => ({
      // ...faker.internet.avatar(),
      // ...faker.internet.userName(),
      a,
      b,
      id: i,
    }));

    // console.log(suggestions);
    setSuggestions(suggestions);
  }, []);


  return (
    <div className="flex space-x-2 p-6 bg-white mt-8
    border-gray-200 border rounded-sm
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {
        suggestions.map(profile => (
          <Story 
            key={profile.id} 
            img={profile.a} 
            username={profile.b}
          />
        ))
      }
    </div>
  )
}

export default Stories