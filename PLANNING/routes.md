## Routes

B GET   /polls (home)
R POST  /polls (render the created poll page) and redirect to GET /polls/:id

redirect:
get /polls/:id - the urls for the creator of the poll (as well as email w/mailgun)


R GET   /choices/id (the voting page)
E POST  /choices/id (renders the results page)

R GET   /results/id 





get/polls -home page(where you make the poll)
post/polls/:id -creating the polls => Render(another get request) to page with "Here's the link to the results page" and "Here's the link the voting page to share with your friends"
get /show - the urls for the creator of the poll

get/voting/:id (where the created poll will be displayed)
post/voting/:id where voting happens) - Renders the results page

get/results - results page 

## MVD
Show homepage and how to create a poll
Show that creator of a poll receives two links and can share the submission link with friends
Show that multiple people can make poll submissions
Show that the results get updated as people vote and winning choice is based off Borda Count method
