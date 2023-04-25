[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Jobwawesh/my-portfolio-app-backend/graphs/commit-activity)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# Lets Charity APP
Let's Charity is a powerful and user-friendly app designed to connect users with children's homes in need of support. With this app, users can access a comprehensive list of children's homes and view detailed information about each home, including their location, mission, and the children they serve.

Users can also leave reviews for the homes they have visited or supported, helping other users make informed decisions when choosing a home to support. Additionally, users can make donations directly through the app, supporting the children and staff in their ongoing efforts to provide a safe and nurturing environment for those in need.

To ensure that users can engage with the children and staff in a meaningful way, the app also allows users to book visit dates directly through the app. This feature ensures that the homes are prepared for your arrival, and that you can make the most of your visit by spending time with the children, learning about the home's needs, and exploring ways to support their ongoing efforts.

With Let's Charity, users can make a real difference in the lives of children in need, providing them with the love, care, and support they need to thrive. Whether you're looking to make a one-time donation, leave a review, or plan a visit, this app provides a powerful and convenient way to get involved and make a positive impact in your community.

## Screenshot

<img src="images/bookstoreReact.png" width="1000">

## Entity Relationship Diagram(ERD)
This ERD is here to demonstrate the relationship between the model entities.

<img src="images/booksERD.png" width="1000">

## Pre-Requisites
In order to use this repository you will need the following:



- Operating System **(Windows `10+`, Linux `3.8+`, or MacOS X `10.7+`)**
- RAM >= 4GB
- Free Space >= 2GB

## Built With
This application has been built with the following tools:

![React](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=green)

### Backend
![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

- **Ruby `v2.7.4`**
- **Rails `v7.0.4`**
- **SQlite3 `v1.4`**
- **ActiveRecord `v7.0.4`**
- **Puma `v6.1`**
- **Faker `v0.14`**
- **Bcrypt `v3.1.7`**

- **React**
- **npm**
- **Vercel**
- **Javascript**

## Topics Covered
The following are the concepts covered in this practice session

- React
- UseState
- Routing
- Active Record Migrations.
- Active Record Associations.
- Working with a database.
- DB routing.
- Performing CRUD operations.
- Serialization.
- Api creation.
- Deploying

## A deployed FRONTEND live link to this project:
This is the deployed link 
        https://childrens-home-app.vercel.app/

## A deployed API link used in this project:
This is the deployed link 
        https://childrens-home-backend.onrender.com/home_details


## Installation

To use this repo on your machine requires some simple steps

### Alternative One

- Open a terminal / command line interface on your computer
- Clone the repo by using the following:

        git clone https://github.com/phase-5-children-s-home/childrens-home-app

- Be patient as it creates a copy on your local machine for you.
- Change directory to the repo folder:

        cd phase4-childrens-home-app

- (Optional) Open it in ``Visual Studio Code``

        code .

- (Alternate Option) Open it in any editor of your choice.
- Hurray! You are one step closer to being as intelligent as Einstein.

### Alternative Two

- On the top right corner of this page there is a button labelled ``Fork``.
- Click on that button to fork the repo to your own account.
- Take on the process in ``Alternative One`` above.
- Remember to replace your username when cloning.

        git clone https://github.com/your-username-here/childrens-home-app

## Running the application
Running the application is very straight forward. You can use the following steps to run the app.

1. Ensure the ruby gems are setup in your machine
   ##### Make sure you go in the backend directory
     cd backend
    ```{shell}
   bundle install
   ```
2. Perform any pending database migrations  and seeding
   ```{shell}
   rails db:migrate db:seed
   ```
3. Run the application
    ```{shell}
    rails server
    ```
4. Open the application from your browser
    ```
   http://localhost:3000
   ```
   ##### Now go back to the frontend directory to download the dependancies
5. Open the application from your browser
    ```
   cd ..

   cd frontend
   ```
   Then press enter 

6. Download the dependancies
    ```
   npm install
   ```
7. Open the application from your browser
    ```
   npm start
   ```
   
## Application
This application is a simple web API that allows users to:


#### Users
- Register a new account.
- Log in to existing account.
- View all Children's home items.
- Donate to a specific children's home
- Leave a review for a specific children's home
- Book a visiting day to a children's home
- Delete order items

#### Admin
- Perform CRUD opertions to the home list
- Assign another user tothe account

### MODELS
Database schema definitions.

#### USER
| COLUMN        | DATA TYPE | DESCRIPTION                           | 
|---------------|-----------|---------------------------------------|
| id            | Integer   | Unique identifier.                    |
| name          | String    | User's name.                       |
| password_hash | String    | User's password hashed with `BCrypt`. |
| updated_at    | Date      | The date the user was updated.        |
| createdAt     | Date      | The date the user was created.        |


#### BOOKS
| COLUMN      | DATA TYPE                                       | DESCRIPTION                            | 
|-------------|-------------------------------------------------|----------------------------------------|
| id          | Integer                                         | Unique identifier.                     |
| title       | String                                          | The name of the project.               |
| description | String                                          | A short description about the project. |
| price | Integer | The price of the book. |
| author | String | The author of the book. |
| createdAt   | Date                                            | The date the book was created.         |

#### ORDERS
| COLUMN      | DATA TYPE                                       | DESCRIPTION                            | 
|-------------|-------------------------------------------------|----------------------------------------|
| id          | Integer                                         | Unique identifier.                     |
| user_id       | Integer                                          | The user's id |
| book_id | Integer                                         | The book's unique identifier. |
| quantity | Integer | The number of books. |
| total_price | Integer | The accumulative price of the books. |
| createdAt   | Date                                            | The date the ordder was created.     

#### AUTHOR
| COLUMN        | DATA TYPE | DESCRIPTION                           | 
|---------------|-----------|---------------------------------------|
| id            | Integer   | Unique identifier.                    |
| name          | String    | Author's name.                        |
| bio           | String    | Short info about the author.          |
| createdAt     | Date      | The date the author was created.      |

#### CATEGORIES
| COLUMN        | DATA TYPE | DESCRIPTION                           | 
|---------------|-----------|---------------------------------------|
| id            | Integer   | Unique identifier.                    |
| name          | String    | Author's name.                        |
| description   | String    | A short description about tcategory.  |
| createdAt     | Date      | The date the category was created.    |

# Authors
This project was contributed to by:
- [Job Waweru](https://github.com/Jobwawesh/)
- [Kevin Kimutai](https://github.com/kevinkkimutai)
- [Ivan Kainga](https://github.com/KahingaK)
- [Ian Orieko](https://github.com/orgs/phase4-group-project/people/ianrich69420)


# License
The project is licensed under Mozilla Public License Version 2.0
