var request = require('request');
const axios = require('axios');
var api_key = "TVS524kLUADDEEUcZl0PFHtEbVISmZCAGeT6buGi";
var results = "&_fields=school.name,school.school_url,school.city,school.state";
var location = "64075";
var query = "https://api.data.gov/ed/collegescorecard/v1/schools.json?_zip=" + location + "&_distance=100mi&api_key=" + api_key + results;
const url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&_fields=id,school.name,2013.student.size";

module.exports = {
    findData: (req, res) => {
        console.log("In Find Data function");
        console.log("--------request-------");
        console.log(req.body);
        console.log("---------");
        request(query, function(error, response, body) {
            console.log(response);
            console.log("====");
            console.log(body);
            var length = 5;
            if (JSON.parse(body).results.length < 5) {
                length = JSON.parse(body).results.length;
            }
            var collegeResults = JSON.parse(body).results;
            var collegeArr = [];
            for (var i = 0; i < length; i++) {
                console.log("LENGTH", length);
                var collegeObj = {
                    name: collegeResults[i]["school.name"],
                    url: collegeResults[i]["school.school_url"],
                    city: collegeResults[i]["school.city"],
                    state: collegeResults[i]["school.state"],
                };
                collegeArr.push(collegeObj);
            }
            var dataObj = { "colleges": [] };
            dataObj["colleges"] = collegeArr;
            res.json(dataObj);
        })
    }
}

// Function to render College Data for a given location
// function renderUserCollege(data, res) {

//     var location = data.location;

//     if (location != null) {
//         var api_key = "TVS524kLUADDEEUcZl0PFHtEbVISmZCAGeT6buGi";
//         var results = "&_fields=school.name,school.school_url,school.city,school.state";
//         var query = "https://api.data.gov/ed/collegescorecard/v1/schools.json?_zip=" + location + "&_distance=100mi&api_key=" + api_key + results;

//         // API to get College Data
//         request(query, function(error, response, body) {
//             // Display only top 5 colleges
//             var length = 5;
//             if (JSON.parse(body).results.length < 5) {
//                 length = JSON.parse(body).results.length;
//             }
//             var collegeResults = JSON.parse(body).results;
//             var collegeArr = [];
//             for (var i = 0; i < length; i++) {
//                 var collegeObj = {
//                     name: collegeResults[i]["school.name"],
//                     url: collegeResults[i]["school.school_url"],
//                     city: collegeResults[i]["school.city"],
//                     state: collegeResults[i]["school.state"],
//                 };
//                 collegeArr.push(collegeObj);
//             }

//             userObj["college"] = collegeArr;
//             res.render('user', userObj);
//         }); // request
//     } else {
//         res.render('user', userObj);
//     } // location
//