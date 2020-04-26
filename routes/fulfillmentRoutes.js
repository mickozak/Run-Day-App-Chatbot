const {WebhookClient} = require('dialogflow-fulfillment');

const mongoose = require('mongoose');
const Demand = mongoose.model('demand');

const Coupon = mongoose.model('coupon');

module.exports=app=>{
    app.post('/',async(req,res)=>{

        const agent = new WebhookClient({request:req,response:res});

        function snoopy(agent){
            agent.add(`Welcome to my Snoopy fulfillment!`)
        }

        async function learn(agent){
            Demand.findOne({'course': agent.parameters.course}, function(err, course){
                if(course!==null){
                    course.counter++;
                    course.save();
                }else{
                    const demand = new Demand({course: agent.parameters.course});
                    demand.save();
                }
            });
            let responseText = `You want to learn about ${agent.parameters.course}. Here is a link to all of my courses: http://www.udemy.com`;
            agent.add(responseText);

            let coupon = await Coupon.findOne({'course': agent.parameters.course});
            if(coupon!==null){
                responseText=`You want to learn about ${agent.parameters.course}.Here is a link to the course: ${coupon.link}`;
            }
            agent.add(responseText)
        }

        function fallback(agent){
            agent.add('I did not understand');
            agent.add('I am sorry, can you try again?');
        }

        let intentMap = new Map();

        intentMap.set('Snoopy',snoopy)
        intentMap.set('Learn courses',learn)
        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);

    });
}