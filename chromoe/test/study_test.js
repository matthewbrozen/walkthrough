var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000")


//start testing by uncommenting POST testing

// POST new record test
//uncomment and just test once at the beginning of testing because it will change the length of the array on the GET test
// describe("studys", function(){
// it("should POST one study on /studys POST", function(done){
//   api.post("/studys/")
//   //write new object when testing each time to test posting new
//      .send({"rid": "1","description": "test","studyName": "test","areaofResearch": "test","budget": 1,"allergyCriteria": [{"substance": "test","reaction": "test","severity": "test"}],"prescriptionCriteria": [{"product": "test","doseMin": "test","doseMax": "test","quantityMin": "test","quantityMax": "test"}],"observationCriteria": [{"category": "test","systolicbloodPressure": 1,"diastolicbloodPressure": 1,"isSmoker": "test"}],"conditionCriteria": [{"category": "test","severity": "test","stage": "test"}],"procedureCriteria": [{"category": "test","dateStart": "2016-03-01","dateEnd": "2016-03-01"}],"immunizationCriteria": [{"category": "test","dateStart": "2016-03-01","dateEnd": "2016-03-01"}],"familymemberhistoryCriteria": [{"relationship": "test","deceased": true,"condition": "test"}],"dispenseCriteria": [{"product": "test","quantityMin": "test","quantityMax": "test","daysStart": "test","daysEnd": "test"}],"patientCriteria": [{"gender": "test","ageStart": 1,"ageEnd": 1,"zipcode":1,"radius": 1}],"pidsBought": [],"pidsAvailable": [1,2,3,4,5]})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
// 		expect(res.body.newStudy.rid).to.equal("1");
// 		expect(res.body.newStudy.description).to.equal("test");
// 		expect(res.body.newStudy.studyName).to.equal("test");
// 		expect(res.body.newStudy.areaofResearch).to.equal("test");
// 		expect(res.body.newStudy.budget).to.equal(1);
// 		expect(res.body.newStudy.allergyCriteria[0].substance).to.equal("test");
// 		expect(res.body.newStudy.allergyCriteria[0].reaction).to.equal("test");
// 		expect(res.body.newStudy.allergyCriteria[0].severity).to.equal("test");
// 		expect(res.body.newStudy.prescriptionCriteria[0].product).to.equal("test");
// 		expect(res.body.newStudy.prescriptionCriteria[0].doseMin).to.equal("test");
// 		expect(res.body.newStudy.prescriptionCriteria[0].doseMax).to.equal("test");
// 		expect(res.body.newStudy.prescriptionCriteria[0].quantityMin).to.equal("test");
// 		expect(res.body.newStudy.prescriptionCriteria[0].quantityMax).to.equal("test");
// 		expect(res.body.newStudy.observationCriteria[0].category).to.equal("test");
// 		expect(res.body.newStudy.observationCriteria[0].systolicbloodPressure).to.equal(1);
// 		expect(res.body.newStudy.observationCriteria[0].diastolicbloodPressure).to.equal(1);
// 		expect(res.body.newStudy.observationCriteria[0].isSmoker).to.equal("test");
// 		expect(res.body.newStudy.conditionCriteria[0].category).to.equal("test");
// 		expect(res.body.newStudy.conditionCriteria[0].severity).to.equal("test");
// 		expect(res.body.newStudy.conditionCriteria[0].stage).to.equal("test");
// 		expect(res.body.newStudy.procedureCriteria[0].category).to.equal("test");
// 		expect(res.body.newStudy.procedureCriteria[0].dateStart).to.equal("2016-03-01T00:00:00.000Z");
// 		expect(res.body.newStudy.procedureCriteria[0].dateEnd).to.equal("2016-03-01T00:00:00.000Z");
// 		expect(res.body.newStudy.immunizationCriteria[0].category).to.equal("test");
// 		expect(res.body.newStudy.immunizationCriteria[0].dateEnd).to.equal("2016-03-01T00:00:00.000Z");
// 		expect(res.body.newStudy.immunizationCriteria[0].dateEnd).to.equal("2016-03-01T00:00:00.000Z");
// 		expect(res.body.newStudy.familymemberhistoryCriteria[0].relationship).to.equal("test");
// 		expect(res.body.newStudy.familymemberhistoryCriteria[0].deceased).to.equal(true);
// 		expect(res.body.newStudy.familymemberhistoryCriteria[0].condition).to.equal("test");
// 		expect(res.body.newStudy.dispenseCriteria[0].product).to.equal("test");
// 		expect(res.body.newStudy.dispenseCriteria[0].quantityMin).to.equal("test");
// 		expect(res.body.newStudy.dispenseCriteria[0].quantityMax).to.equal("test");
// 		expect(res.body.newStudy.dispenseCriteria[0].daysStart).to.equal("test");
// 		expect(res.body.newStudy.dispenseCriteria[0].daysEnd).to.equal("test");
// 		expect(res.body.newStudy.patientCriteria[0].gender).to.equal("test");
// 		expect(res.body.newStudy.patientCriteria[0].ageStart).to.equal(1);
// 		expect(res.body.newStudy.patientCriteria[0].ageEnd).to.equal(1);
// 		expect(res.body.newStudy.patientCriteria[0].zipcode).to.equal(1);
// 		expect(res.body.newStudy.patientCriteria[0].radius).to.equal(1);
// 		expect(res.body.newStudy.pidsAvailable[0]).to.equal(1);
// 		expect(res.body.newStudy.pidsAvailable[1]).to.equal(2);
// 		expect(res.body.newStudy.pidsAvailable[2]).to.equal(3);
// 		expect(res.body.newStudy.pidsAvailable[3]).to.equal(4);
//     done();
//   });
// });
// });





//After POST test then uncomment rest of code, leave DELETE test commented for ongoing testing

//GET all test
describe("studys", function(){
  it("should GET all studys on /studys GET", function(done){
    api.get("/studys")
    .end(function(err,res){
      expect(res.status).to.equal(200);
      expect(res.type).to.equal('application/json');
      //test length of array of records must know length first
      expect(res.body.allStudys.length).to.equal(0);
      done();
    })
  })
});

// GET one test
// Use the _id of the record created in the POST test
// describe("studys", function(){
//   it("should GET one study on /studys/:id GET", function(done){
//     api.get("/studys/58e6c6d6c2027011f3a684c2")
//     .end(function(err,res){
//       expect(res.status).to.equal(200);
//       expect(res.type).to.equal('application/json');
//       //test length of array of records must know length first
//       expect(res.body.selectedStudy._id).to.equal("58e6c6d6c2027011f3a684c2");
//       done();
//     })
//   })
// });

//PUT gender test
describe("studys", function(){
it("should PUT the RID on /studys PUT", function(done){
  api.put("/studys/")
     .send({"rid":"1"})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with matching substance, reaction and severity
    expect(res.body.researcherStudys.length).to.equal(0);
    done();
  })
})
});

// // PATCH pidsbought to update existing study test
// //Use the _id of the record created in the POST test
// describe("studys", function(){
// it("should PATCH the pidsBought on /studys/:id PATCH", function(done){
//   api.patch("/studys/58e6c6d6c2027011f3a684c2")
//      .send({"pidsBought":[1]})
//   .end(function(err,res){
//     //find all records with the pid of the patient
//     expect(res.body.updatedStudy._id).to.equal("58e6c6d6c2027011f3a684c2");
// 		expect(res.body.updatedStudy.pidsBought[0]).to.equal(1);
//     done();
//   })
// })
// });


// DELETE record test
// change id in url to the id of the record created in post
// Just test once
// describe("studys", function(){
// it("should DELETE the record on /studys/:id DELETE", function(done){
//   api.delete("/studys/58e6c6d6c2027011f3a684c2")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Study successfully deleted');
//     done();
//   })
// })
// });
