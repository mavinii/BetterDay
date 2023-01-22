<p>
  <h1 align="center">BetterDay</h1>
</p>

## 📚 Student Details:

- Student number: `22931`
- Student name: `Marcos Oliveira`
- Supervisor: [Pramit Dutta](https://www.linkedin.com/in/pramitd/)
- College: [Dorset College](https://dorset.ie/)

<p align="center">
  <img alt="BetterDay" src="./web/preview/preview.png" >
</p>

## 📝 Introduction:

Have you ever had a day or week when it seems that everything does not go the way that you expect? You forgot your car keys, missed the bus, or arrived late for an interview for a new job all while trying to complete everything on your to do list? Nowadays, this happens to everyone because we all seem to be busy all the time. And due to the pressure and strain of this busyness, the simple things in our daily life get forgotten and overtaken by other priorities and distractions. Certainly, we are busier now than decades ago, when no computers, smartphones with social media, or emails constantly interrupted our lives

That is where BetterDay comes in. In order to help people with their daily life, the BetterDay application promises to help the user to solve simple tasks by analysing and understanding the user's daily routine and makes suggestions to help the user to avoid having a similar bad day in the future.

## 🔖 Layout:

To access the layout use [Figma](https://www.figma.com/proto/24iRW0iGFwiTycLkji4Jra/A-badDay?node-id=56%3A38&scaling=scale-down&page-id=0%3A1&starting-point-node-id=56%3A38).

## 💻 How to run this project:

Web Page:
```js
// Using Vite / React:

cd web
npm run dev
```

Mobile App:
```js
// Using Expo:

cd mobile
npx expo start
```

Server Back-end:
```js
// Using Prisma Studio / SQLite;
// Go to localhost:5555 to see the database in real time:

cd server
npm run dev
// and
npx prisma studio
```

## 🚀 Front-end:

- [React](https://reactjs.org) - is a JavaScript library for building user interfaces.
- [React Native](https://reactnative.dev/) - is a JavaScript library for building native mobile apps.
- [VitJS](https://vitejs.dev) - is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [Tailwind](https://tailwindcss.com/) - is a utility-first CSS framework for rapidly building custom user interfaces.
- [PostCSS](https://postcss.org/) - is a tool for transforming CSS with JavaScript.

## 🚀 Back-end:

- [NodeJS](https://nodejs.org/en/) - is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - is a web application framework for Node.js.
- [Typescript](https://www.typescriptlang.org/) - is a typed superset of JavaScript that compiles to plain JavaScript.
- [@types/express](https://www.npmjs.com/package/@types/express) - is a TypeScript definition file for Express.
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) - is a tool that helps develop Node.js applications with TypeScript.
- [cors](https://www.npmjs.com/package/cors) - is a node.js package for protecting the API from other domains to access our API.
- [Prisma](https://www.prisma.io/) - is an `Object-Relational Mapping (ORM)` open-source tool for Node.js and TypeScript. It makes it easy to query databases with TypeScript or JavaScript. 

  Instead of writing a SQL statement like this:
  ```sql
  SELECT * FROM users WHERE id = 1
  ```

  You can write it like this:
  ```js
  prisma({
    select: {
        title: true,
    },
    where: {
        id: 1
    },
    orderBy: {
        createdAt: 'desc'
    }        
  });
  ```

## 🚀 Database:

  - [Node - SQLite3](https://www.npmjs.com/package/sqlite3) using Prisma.


## 🤝 References:

### Web:
- [React Documentation](https://reactjs.org/)
- [React Native Documentation](https://reactnative.dev/docs/environment-setup)
- [Rocketseat Education](https://github.com/rocketseat-education)

### Mobile:
- [Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/)

## ⚠️ Copyright:

Please note, this is my Final Project as a student in `Bachelor of Science in Computing, Year 3`, at `Dorset College`, however, it may contain some part of the code that may be Copyright. All the people were duly referenced in the `"References"` section above.

Please also note that this project is `non-profit` and not intended to be monetized.

---

<strong>Built with 💙 by [@Marcos Oliveira](https://www.linkedin.com/in/pgmarcosoliveira/)</strong>
