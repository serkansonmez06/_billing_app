# _billing_app

#React.JS(frontend)- Java-Sprinboot-MySQL(backend)c

npm start Runs the app in the development mode. OPEN - -=> http://localhost:3000 to view it in the browser.

Electricity billing system --- I used Java, MySQL and React.js, bootstrap and material UI

calculates the units consumed within a specified time duration and accordingly calculates the amount of money to be paid for those units
Unlike the conventional billing system, this computerized software does not require a large number of human employees to handle and manage the process of bill generation. Once it is installed on the system, it will automatically calculate the units consumed and the bills from time to time and also provide the meter readings to each customer
•	It features a high-performance speed along with accuracy.
•	It allows for seamless data sharing between the electricity office and customers.
•	It is protected by high-security measures and controls.


-> User login with existing email and password.if User is not exist, User will create account at register window with email and password 

-> Landing page gives information about website and service.

-> E-billing system capture previous read and current read. Calculates with unit price and gives amount of bill with due date. System adds, 14 days to date for due date. Bill details will show information about bill and it is paid or unpaid.

-> User will see only his/her bills whatever under their email address

-> Users can filter their bill by date. Bills are sorted and older bill display first, and new bill will be last.

-> User can go payment window and make (generic payment)., all input fields are required, and card number must be numeric and 16 characters. After filling input field. clicking Authorize this payment and make payment. Unpaid will change to paid in Database and update in frontend as well.


-> Admin Login:

-> Admin has privilege to delete, update, and add new bill to system. When admin attpemt to delete bill in the system, it will ask her/him to confirm it. Then it will delete it from DB. Admin can see all users in user tab, regular user cant see other users' information.

-> Admin can filter data as well by date

-> Contact Us component will display admin email. This email comes from DB.

-> Footer component. Will display social media icons and when user clicks on it it will open in new window.

-> if URL is not exist, 404 not found page wil display.
-> Social media icons are clickable and user can click, and go to social media accout of application in new tab.


<img width="947" alt="billing1" src="https://user-images.githubusercontent.com/73310717/197906417-0dd451e9-0093-445e-8797-5d32a002b7b5.png">
<img width="944" alt="billing9" src="https://user-images.githubusercontent.com/73310717/197906414-a72d1b82-3d34-4dbd-8d6d-8c1190ee3835.png">
<img width="949" alt="billing3" src="https://user-images.githubusercontent.com/73310717/197906403-101add4e-aaa3-420a-bb71-1880aa7afbe2.png">
<img width="947" alt="billing6" src="https://user-images.githubusercontent.com/73310717/197906409-a2bbeb49-a859-43ff-b50e-85035256f4c2.png">
<img width="948" alt="billing5" src="https://user-images.githubusercontent.com/73310717/197906408-f090e620-6ce7-4805-9058-70859b8d9633.png">
<img width="949" alt="billing7" src="https://user-images.githubusercontent.com/73310717/197906412-94a4b4c9-b6e2-4b8c-8cb3-60dc7c1e003e.png">
<img width="950" alt="billing2" src="https://user-images.githubusercontent.com/73310717/197906419-0082c8f7-3c34-4f7e-8455-326d7246ab71.png">
<img width="951" alt="billing8" src="https://user-images.githubusercontent.com/73310717/197906413-9f143428-4836-45e0-b51c-75822fe86b01.png">
<img width="954" alt="billing4" src="https://user-images.githubusercontent.com/73310717/197906406-26fa247f-6ddf-4426-88ff-4a6d635e06a8.png">


