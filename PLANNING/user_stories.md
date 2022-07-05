## User Stories
1. As a user, *I want* to be able to make a **poll** and decide if it will be annonymous or require user name to vote, *because* I want to make a decision.
2. As a user, *I want* to add multiple **choices**, *because* I want to have everyone's input
3. As a user, *I want* to add title and may add a description for each choice, *because* I want everyone to make an informed decision
4. As a user, *I want* to add my email(added to poll table), *because* I want to receive admin and user links to share with poll members and review poll results
5. As a user, *I want* to be able to visit the poll via the invite link, *because* I want to vote on my choices
6. As a user, *I want* to rank my choices from most to least favourite, *because* I want my opinion to influence the results
7. As user who created a poll, *I want* to be able to view the **results** of my poll via the administrative link, *because* I want to know what everyone wants.

-----------------------------------
## Stretch User Stories
1. As a user who created a poll, *I want* my poll to close after a given amount of time, *because* I don't want to wait forever.
2. As a user who created a poll, *I want* to sent an email to all the participants as the poll closes with the results, *because* I want everyone to know what did we end up deciding

-----------------------------------

## User Scenarios
1. Given that I've made a poll, I should recieve two links immediately and by email, one admin link(results) and user link(link to be shared). 
2. Given that I am voting through the link shared by the creator, I should enter my name if required to be able to see the poll and set my choice for each option and I should be able to submit my choices. 
3. Given that I am voting, I should be able to drag and drop my choices in my prefered hierarchy and then sumbit my choices.
4. Given that I created the poll, each time another user submits their choices, I should recieve an email with an administrative link and a link to the results.  

----------------------------------

## Requirements
1. a user can create a poll with multiple choices
2. each choice ("option") can have a title and optional description
3. the creator must enter an email
4. when a poll is finished being created, the user is given two links: an administrative link(???) (which lets them access the results) and a submission link (which the user sends to their friends) *<= NO USER STORY*
5. the links are also sent to the creator via email (using mailgun) *<= NO USER STORY*
6. when a user visits the submission link, they enter their name if required and see a list of the choices for that poll
7. the user can rank the choices (by drag and drop, or some other method) and then submits the poll
8. each time a submission is received, the creator is notified with an email (which includes the administrative link and a link to the results) *<= NO USER STORY*
9. the results are ranked using the Borda Count method: https://en.wikipedia.org/wiki/Borda_count *<= NO USER STORY*
10. note: this app does not follow the typical user authentication process: voters don't need to register or log in and the only way to access the polls or see the results is via links *<= NO USER STORY*

------------------------------------








