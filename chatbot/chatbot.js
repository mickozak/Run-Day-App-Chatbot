const dialogflow = require('dialogflow');
const structjson = require('./structjson');
const config = require('../config/keys');
const mongoose = require('mongoose');

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const Registration = mongoose.model('registration');

module.exports = {
    textQuery: async function(text, userID, parameters = {}) {
        
        let self = module.exports;
        //let sessionPath = sessionClient.sessionPath(projectId, sessionId + userID);
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: languageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },
    eventQuery: async function(event, parameters = {}) {
        let self = module.exports;
        //let sessionPath = sessionClient.sessionPath(projectId, sessionId + userID);
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters),
                    languageCode: languageCode,
                },
            }
        };
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },
    handleAction: function(responses){
        let self = module.exports;
        let queryResult = responses[0].queryResult;

        switch(queryResult.action){
            
            case 'recommendcourses-yes':
                if(queryResult.allRequiredParamsPresent){
                    self.saveRegistration(queryResult.parameters.fields);
                }
                break;
        }
        return responses;
    },

    saveRegistration: async function(fields){
        const registration = new Registration({
            name: fields.name.stringValue,
            address: fields.address.stringValue,
            phone: fields.phone.stringValue,
            email: fields.email.stringValue,
            dateSent: Date.now()
        });
        try{
            let reg = await registration.save();
            
        } catch (err){
            
        }
    }
}