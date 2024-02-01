# App_Idea_User_Management_System
# User Register System With Name Email Password And Profile Image
# User Login System With Email And Password 

# Project Api 

1)User Register:-http://127.0.0.1:4000/api/register
2)User Login   :-http://127.0.0.1:4000/api/login
3)User Profile :-http://127.0.0.1:4000/api/profile
4)Profile Image Url:-http://127.0.0.1:4000/Your Profile Image name Stored In Public Folder Or Database

# Operations:-
1)Register:- POST REQUEST
Start Register Process With Formdata input LIKE name,email,password,profile_image   in POSTMAN or any other tesring tool 

2)Login:- POST REQUEST
start Login Process With Raw Json Data input Email And Password Then API return The Token responce 
For Authentication Process Of Login User Profile 

3) After Collecting Token From Login Responce
4)User Profile :- GET REQUEST
Start User Profile process with set the authorization token in header then hit get user profile  request  then  it will gives the correct data of the authenticated user other wise it will give the apropriate result 


#Functionality:-
1)Authentication System With JSONWEBTOEKN 
2)Password Encryption security with BCRYPT
3)File Upload System With Multer 
4)Validate Email With Validator
5)Create App Ussing Node and Express 
6)Use Database like MongoDB with Mongoose
7)Nodemon for Continuous Monitoring Of Changes In file 

# Notes:- The DataBase Url and the jwt secret key and the Port are defined in the .env file 
And The Image Url Are Working Fine To cheack Hit Profile Image Url In Browser 









