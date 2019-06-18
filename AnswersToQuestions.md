## Answers To Questions

### __How long did you spend on assessment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.__ ### 

I spent approximately 8-10 hours on the assessment.  If I had more time, I would probably add the following (in no particular order): 

- I would add a Global Error Handling mechanism to catch any unhandled errors. 

- I would add validation around the Date Input for the Clue Search, such as making sure that the dates have actually been entered before the button is clicked or that the Start date is not after the End date.  I would also add some UX enhancements such as automatically setting the End date when the user selects a Start date. 

- I would add sorting to the search results when the user clicks on the table headers. 

- Even though I added several unit tests, I would  add a few functional end to end tests using the protractor framework for Angular. 

 
If I was building this application for production use, I would also implement some of these things as well: 

* Rather than outputting logs to the console, I would implement some sort of async logging which would output to multiple sources.  You could also integrate a cloud service such as Azure App Insights to track events and metrics from your application to help you better understand how your application is being used.   

* Likewise, I would also implement interceptors to log incoming and outgoing HTTP requests (or manipulate them if necessary).  You can also setup interceptors for many other cross-cutting purposes, such as retrying network calls, profiling, caching, loading overlays, and toaster notifications. 

* I would use an adapter pattern when interacting with Angular's HttpClient instead of working directly with it.  This way if Angular ever changes its HTTP client interface, I would only have to update my application in one place.  A further benefit of using this pattern is that you are able to implement your own custom logic when handling HTTP calls. 

* While it might be a bit of an overkill for this application, for something more complex I would look into implementing a state management layer to act as a single source of truth when mutating the state of the application data. 

### __What part of the application are you most proud of? Please include a snippet of the code in the answer.__ ### 

While I could have done this assessment in half the time using .NET, I chose to implement this application in Angular for a couple of different reasons.  First, I wanted to demonstrate that I would be able to get up to speed quickly if I was hired for this position.  During my interview, this was identified as one of the short term goals for this role.  

Second, I also wanted to demonstrate that I am able to rapidly learn new technologies and frameworks and that my previous experience enables me to design and implement flexible and maintainable applications even when leveraging technologies with which I have limited experience. 

My apologies for the long winded explanation above, as I wanted to provide some context to my actual answer to this question.  I am most proud that I implemented this application while leveraging recommended Angular architectural practices.  When I worked with Angular in the past, I worked on portions of larger applications where the application design was already determined before I started.  I took this assessment as an opportunity to expand my knowledge of Angular application design.  

The application for this assessment is developed in a modular fashion where concerns are separated into appropriate modules.  For example, the Core module contains all the services and components that are used across the entire application, but are loaded only once (the `EnsureModuleLoadedOnceGuard` class ensures that its loaded only once in the application).  The Shared module contains components such as Filter and Paging components which are used across the application and could have several instances.  All the domain specific concepts for the application were also separated into feature-specific modules such as Clues and Categories to cleanly partition the application into focused areas.   Each Feature module implements further separation of concerns as well.  Container components handle interactions with the application's data and pass it through to User Interface components. 

Finally, if I had to pick a specific piece of code, I guess I would point to the usage of the `Array.reduce()` function in the `resolve()` function in the `FilterService` class.  This is by far the most succinct way I found of retrieving values inside object hierarchies since I started working with Javascript/Typescript.  I also like it because it demonstrates the flexibility of the `Array.reduce()` function.  

```
resolve(path: string, obj: any) { 
    return path.split('.').reduce((prev, curr) => { 
    return (prev ? prev[curr] : undefined);}, obj || self); 
} 
```

### __How would you improve the APIs that you just used?__ ### 

The API limits you to a total of a 100 records per page, but does not provide any information about the total number of clues or categories on the server.  This limits the paging functionality that can be implemented to "previous page" and "next page" scenario without providing a way to allow the user to skip multiple pages.  Likewise, even though the http://jservice/io website allows for searching of categories, the API does not expose this functionality.   

I would add the ability to search categories by title, as well as searching for clues by question and answer.  To allow for a better user experience when paging data, I would include paging information, such as total count of records in the response headers of paged API calls, such as Categories.  

### __Please describe yourself using JSON.__ ### 

```
[{
	"id": 1,
	"firstname": "Miran",
	"lastname": "Nevesinjac",
	"nationality": "Canadian",
	"birthdate": "1983-03-02T06:30:00.000Z",
	"category": null,
	"occupation": "Software Developer",
	"address": {
		"id": 369,
		"house": "66",
		"street": "Springbluff Boulevard SW",
		"city": "Calgary",
		"province": {
			"id": 2,
			"code": "AB",
			"name": "Alberta"
		},
		"country": {
			"id": 1,
			"code": "CA",
			"name": "Canada"
		}
	},
	"contactinfo": {
		"phonenumber": "4036306453",
		"email": "m.nevesinjac@gmail.com"
	},
	"interests": [
		"Programming",
		"Playing Music",
		"Snowboarding",
		"Biking"
	],
	"wants": [
		"Health",
		"Happiness",
		"To work at Athabasca University"
	]
}]
```