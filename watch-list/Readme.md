# WatchList (my-list)

This project enhances an existing OTT platform by adding a new feature called "My List," which allows users to save their favorite movies and TV shows to a personalized list. This backend implementation ensures seamless integration with front-end applications, providing robust APIs for managing the user's list.

## Description

The "My List" feature is designed to provide users with the ability to curate their own list of preferred movies and TV shows. This involves several core functionalities including adding items to the list, removing items, and retrieving all items with efficient pagination. This project uses TypeScript and MongoDB to create a scalable and performant backend service.

### Key Features:
- **Add to My List**: Users can add a movie or TV show to their list using a unique ID. The system ensures there are no duplicates in the user's list.
- **Remove from My List**: Items can be removed from the user's list using their unique ID.
- **List My Items**: This API retrieves all items in the user's list with pagination to manage large datasets effectively.


 ### Dependencies

Ensure you have Node.js installed on your machine. If not, you can download and install it from [Node.js official website](https://nodejs.org/).

### Installing

To get the project up and running locally, follow these steps:

```bash
npm install

npm run dev
```


### Insert temp data

```bash
ts-node src/scripts/insert-to-user.ts

ts-node src/scripts/insert-to-content.ts
```


### Usage

```Javascript
Add To My List:

curl --location --request POST 'localhost:3000/api/watch-list/{userId}/{contentId}'

```

```Javascript
Get My List:

curl --location --request GET 'localhost:3000/api/watch-list/{userId}'

```


```Javascript
Remove From My List:

curl --location --request DELETE 'localhost:3000/api/watch-list/{userId}/{contentId}'

```

### Assumptions:

I have created 2 scheams, one for User and one for Content.

Reason for same schema for TvShow and Movie is that, in the WatchHistory i see there is only contentId which to me seems like we have same schema for all the contents we have.

I have assumed that the basic authentication is there already in place, hence the API's are public.