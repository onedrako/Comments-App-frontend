Hi, this project is running in vercel on: https://comment-app-gilt.vercel.app/  (maybe the api get on after 7 seconds because heroku free plan get the server off if nobady is using it)

React, typescript, styled components, redux (toolkit), formik, and yup to manage the database queries were used for this project.

To get all files and dependencies:
1) git clone git@github.com:onedrako/Comments-App-frontend.git
2) npm i 
3) add a .env file
4) On .env file add the next env variable
  API_URL=http://localhost:3000/api/v1
  
Make sure backend server is on.

Run dev server with => npm run start
Now app have to be running

To stop the server
ctrl + c
