# WEB_AUT_Arturs_Vanadzins_MD2
Testu automatizācijas Otrais mājasdarbs

1. Create a new git repository:
a. Repository name: WEB_AUT_YOURFIRSTNAME_YOURLASTNAME_MD2
b. Visibility: Public
c. Check “Add a README file”
d. Add .gitignore template: Node
e. Create repository
2. Clone your repository.
3. Create a new Cypress project in your locally cloned repository:
a. Follow instructions from lecture or recap file (if needed)
4. Implement the following scenarios:
a. Scenario 1 - Make an Appointment
i. Open https://katalon-demo-cura.herokuapp.com/
ii. Click - Make Appointment
iii. Set username and password fields with the demo account credentials
iv. Click - Login
v. Set the following values:
1. Facility - Seoul CURA Healthcare Center
2. Check - Apply for hospital readmission
3. Select - Medicaid
4. Set Date value by using the widget - 30
5. Set comment - CURA Healthcare Service
6. Click - Book Appointment
vi. Validate that previously set values are correct
b. Scenario 2 - Appointment history empty
i. Open https://katalon-demo-cura.herokuapp.com/
ii. Click - Make Appointment
iii. Set username and password fields with the demo account credentials
iv. Click - Login
v. Click - Menu/Stack/Burger icon
vi. Validate that the sidebar is active
vii. Click - History
viii. Validate that - No appointment - is visible
5. Create the necessary page objects, elements, methods, etc.