# To Do Application –   
## Assumptions -:  
*	User has one todo list.   
*	He would add, delete, read, search from that list only. 
*	Updating an item in the list means that it has been completed ie its state has been changed.  
*	We have 3 levels of priority. 0 means lowest,1 means middle,2 means highest.  
*	Date filed is the date by which the task is to be completed i.e. deadline of the task.  

## My Approach -:  
*	I have created the application with the assumption that only one list would be there and all the operations would be carried on that list only.  
*	I have created a database table in PostgreSQL.  
*	Database has one table todo. It contains fields like Id, title, priority, date and state.  
*	The Database is connected with our application and all the operations like reading, creating, updating, deleting and searching would then be carried on using API.  

## Database Schema -:  
### Database contains one table names as todo. It has fields like Id, title, priority, date and state.  
*	Id – Id contains unique id of the item that is added in the todo list.  
*	Title – Title contains the title of the task that is to be done.  
*	Priority – Priority contains priority of that task. Range of values in priority are (0,1,2) where 0 being the lowest and 2 being the highest.  
*	Date – Date field contains date of the task it is to be completed before.   
*	State – State contains whether the task is completed or not. 0 means not completed and 1 means completed.  

## Steps to run the application -:  
*	You can use postman or any simple browser to test the application.  
*	Download the project files.  
*	Run “NPM INSTALL” to automatically install the dependencies.  
*	Run “NPM START” to run project.
*	Download the Database and import the database in your system with postgres.  
