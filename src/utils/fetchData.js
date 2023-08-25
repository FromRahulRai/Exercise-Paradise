export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '96792ca221msh0bc78cc63485696p1eca13jsnb6d31c15cdcc',
    },
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '96792ca221msh0bc78cc63485696p1eca13jsnb6d31c15cdcc',
    },
  };

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
