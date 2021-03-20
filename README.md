# Restaurant List

A restaurant website by using Node.js and MongoDB.
You can view all restaurants, edit individual restaurant, add restaurant, and even delete restaurant by clicking on responding buttons.

## Installation and Execution

1. **Download project by Terminal**

```
git clone https://github.com/Chien-Liang/restaurant_list_mongodb
```

2. **Enter project directory**

```
cd restaurant_list
```

3. **Install packages**

```
npm install
```

4. **Connnect to MongoDB and create default restaurans data**

```
npm run seed
```

> As `Succeed!` appeared in Terminal, data were setup finished, press keyboard `Control(^ or ctrl)`and `c` to end up.

5. **Start App**

```
npm start
```

> Terminal will show `Listening to http://localhost:3000` and `MongoDB Connecting`, and go to `http://localhost:300` to use the app.

## Features

- CRUD restaurants data with database
- Searching restaurants by keywords
- Get detail information by clicking on each restaurant
- Click edit-badge or edit-buttons to edit information
- Click delete-badge or delete-buttons to delete restaurant
- Click Add-button to add new data into database

## prerequisites

- Node.js v15.8
- MongoDB v4.4.3
