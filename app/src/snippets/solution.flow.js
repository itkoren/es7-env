//@flow
/*esprima no-validate*/
/*global Promise*/
'use strict';
type Coffee = {
  symbol: string
};

const getCoffee = (): Coffee => {
  return { symbol: '☕' };
};

const tossUserId = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(Math.floor(Math.random() * 10) + 1), 1000); // It takes 1 second to toss a userId
  });
};

const fetchJSON = async (urlOrRequest: string) => {
  let data: any[];

  try {
    // Your Code Here
    // Here belongs the logic of fetch
    // Hint:
    // Use the fetch api and data should already contain the JSON response
    data = await (await fetch(urlOrRequest)).json();
  } catch (ex) {
    console.log('Error while trying to fetch JSON', ex);
    data = [];
  }

  return data;
};

const getData = async () => {
  // Fetch from urls
  const userUrl = 'https://jsonplaceholder.typicode.com/users?id=';
  const albumsUrl = 'https://jsonplaceholder.typicode.com/albums?userId=';
  const photosUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=';

  // but first, coffee (sequentially)
  const coffee: Coffee = getCoffee(); // Get some coffee
  console.log(coffee);

  // Toss a userId to start with (sequentially)
  const userId: number = await tossUserId(); // Toss a userId
  console.log(`Selected User Id is: ${userId}`);

  // Get the user & his albums (parrallel)
  const [users, albums] = await Promise.all([fetchJSON(`${userUrl}${userId}`), fetchJSON(`${albumsUrl}${userId}`)]); // Use the fetchJSON to get the user and his albums
  if (users[0]) {
    console.log(`Name: ${users[0].name}`);
  }

  // Get the photos for all albums (parrallel)
  const photosFetch = [];
  albums.forEach(album => {
    photosFetch.push(fetchJSON(`${photosUrl}${album.id}`));
  });
  const photos : any[] = await Promise.all(photosFetch); // Use the fetchJSON to get the user's albums photos

  // Log Everything
  console.log(`${albums.length} Albums:`); // Should have 10 Albums
  albums.forEach((album, index) => {
    console.log(`\tAlbum #${index + 1}: ${album.title}`);

    const albumPhotos: ?any[] = photos.find(photoArray => {
      return album.id === photoArray[0].albumId;
    });

    if (albumPhotos && albumPhotos !== null) {
      console.log(`\t${albumPhotos.length} Photos:`); // Should have 50 Photos for each Album
      albumPhotos.forEach((photo, index) => {
        console.log(`\t\tPhoto #${index + 1}: ${photo.title}`);
      });
    }
  });
};

getData();
