# EZ Search
Course Search Page

## Overview
* Download 
* Installation
   * Node
   * Express
   * Routes
   * Pug (Template Engine)
* APIs
* Usage

### Download

Find the code in ``` https://github.com/sayefiqb/sayefiqbal_cus1172_final``` repository.
Download the code

![GitHub Logo](/github_images/download1.PNG)


### Installation

#### Node

Install **Node.js** on your machine from ```https://nodejs.org/en/```.

#### Express

Install **Express** using ``` npm install express ```.

#### Routes

For better code design use **Routes**. It helps to register all your routes under a single Routes object. Install Routes using 
``` npm install routes ```.

#### Pug

**Pug** is a template engine used to maintain static template files in your application. At runtime, the template engine replaces variables in a template file with actual values passed as parameters from your javascript files, and transforms the template into an HTML file sent to the client which is rendered in the browser. It also keeps your code clean. **You must keep your name.pug files in a views folder**. Install **Pug** in your machine using npm ``` npm install pug```.


### APIs

The backend consists of several APIs created using Express and Routes. The data for this project is stored in the sampleData.js file which returns a list of course objects. You can use a database instead and return data as model objects to your javascript file and pass it to your template. Howevrer, for simplicity I used a static sample data file. The following routes are registered using Routes

```http://127.0.0.1:3000/courses/qByTitle/:queryTitle/qByName/:queryName/qByInstructor/:queryInstructor```
This api endpoint takes the **course title**, **course name** and **instructor name** as possible parameters and then returns filterd search result. You can pass either one, all or none of the parameters. In case of no parameters passed, the api edpoint will return all the json objects from sample dat afile as results.

```http://127.0.0.1:3000/courses/qByLectureType/:query``` 
This api endpoint returns course json objects based on the type of **lecture** passed as the parameter. The options for this project are lecture, lab and hybrid.

```http://127.0.0.1:3000/courses/qBySchedule/:query```
This api returns course json objects based on the **day** of schedule passed as parameter.

```http://127.0.0.1:3000/courses/qBySeats```
This api endpoint only returns the course json objects which have seats open.


### Usage

##### 1. Run the application using ```node app.js``` while on the root folder \\
   Then open up ```127.0.0.1:3000/home``` on your favourite browser.

![GitHub Logo](/github_images/run.PNG)
 
##### 2. Home page

![GitHub Logo](/github_images/home1.PNG)

##### 3. Search by title

![GitHub Logo](/github_images/search1.PNG)

##### 4. Filtered search

![GitHub Logo](/github_images/filter1.PNG)

##### 5. Dropdown searh 

![GitHub Logo](/github_images/dropdown-search.PNG)

##### 6. Clear screen 

![GitHub Logo](/github_images/clear.PNG)
