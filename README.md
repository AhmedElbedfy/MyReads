# MyReads Project

This is my submission for the final assessment project for Udacity's React Fundamentals course.

## Table of Contents

- [Description](#myreads-project)
- [Project Structure](#project-structure)
- [Search Notes](#search-notes)
- [Build Tools](#build-tools)
- [Installation](#installation)
- [To Run Project](#to-run-project)

## Project Structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of the app.
    ├── App.test.js
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    ├── index.js
    └── Pages # page container.
        ├── Components # components container.
        ├── MainPage.js
        └── SearchPage.js
            ├── Books.js
            ├── BookShelf.js
            └── OpenSearchButton.js

```

## Search Notes

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Build Tools

- HTML
- CSS
- JavaScript
- React
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [Create React App](https://github.com/facebookincubator/create-react-app)

## Installation

Make sure Node and npm are installed from the terminal.

```
node -v
npm -v
```

1. Move to the project folder

```
cd <project directory>
```

2. Clone the repo

```
git clone <repo>
```

3. Install npm

```
npm install
```

4. Start the project

| Command | Action |
| :-----: | :----: |


### To Run Project

**(Currently, prod mode allows you to see the results of the API fetch)**:

- cd into your new folder and run in prod mode
- `npm install`
- `npm start to run the development server`
- `npm run build to build production file`

**Note:** The web page can be accessed with `localhost:8080`

5. Open browser at http://localhost:8080/

---

Made with ❤️️ and javascript
