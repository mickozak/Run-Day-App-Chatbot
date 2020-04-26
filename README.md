# Run Day App Chatbot 

The frontend layer made in React.js and the backend layer made in Node.js Backend connects to DialogFlow and MongoDB. Materialize CSS and numerous npm packages were used. Materialize CSS uses the effect of mobile navigation, parallax and scrollspy. Go to the website and ask questions to chatbot according to the following formula.

ChatBot conversation structure (follow the conversation structure):

1.

-> When will the application be available? <-
or
-> When can I install the applications? <-

2.

-> Will I be able to run with others? <-
or
->Will I be able to run with my friends? <-
or
->Is this a social app? <-

3.

-> What should I wear? <-
or
-> What outfit do I have to wear? <-

4. Recommendation

-> What will be the best running clothes? <-
or
-> Recommend me clothes. <-
or
-> Do you recommend anything? <-

ChatBot will present three products. Then chatbot will ask another question.

-> "Yes" <- ChatBot will ask for contact details: name, address, phone number and email. Then thank you and the data will be saved in the MONGODB database
-> "No" <- ChatBot thank you
-> "Info" <- ChatBot will provide contact information

Notes: minimum resolution 360px.

Stack: HTML, CSS, JavaScript, React, Node.js, MongoDB, DialogFlow, Materialize CSS, Heroku

Link: https://enigmatic-anchorage-72672.herokuapp.com/
