var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000");


//start testing by uncommenting POST testing

//POST new record test
// //uncomment and just test once at the beginning of testing because it will change the length of the array on the GET test
// describe("allergyintolerance", function(){
// it("should POST one allergyintolerance on /allergyintolerances POST", function(done){
//   api.post("/allergyintolerances/")
//   //write new object when testing each time to test posting new
//      .send({"pid":1,"onset":"2017-2-06", "substance":"test","status":"test","lastOccurence":"2017-3-06","numberofOccurences":1,"reaction":"test","certainty":"test","description":"test","severity":"test"})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
// 		expect(res.body.newAllergyintolerance.pid).to.equal(1);
// 		expect(res.body.newAllergyintolerance.onset).to.equal("2017-02-06T08:00:00.000Z");
// 		expect(res.body.newAllergyintolerance.substance).to.equal("test");
// 		expect(res.body.newAllergyintolerance.status).to.equal("test");
// 		expect(res.body.newAllergyintolerance.lastOccurence).to.equal("2017-03-06T08:00:00.000Z");
// 		expect(res.body.newAllergyintolerance.numberofOccurences).to.equal(1);
// 		expect(res.body.newAllergyintolerance.reaction).to.equal("test");
// 		expect(res.body.newAllergyintolerance.certainty).to.equal("test");
// 		expect(res.body.newAllergyintolerance.description).to.equal("test");
// 		expect(res.body.newAllergyintolerance.severity).to.equal("test");
//     done();
//   });
// });
// });

//After POST test then uncomment rest of code, leave DELETE test commented for ongoing testing


//GET all test
describe("allergyintolerance", function(){
  it("should GET all allergyintolerances on /allergyintolerances GET", function(done){
    api.get("/allergyintolerances")
    .end(function(err,res){
      expect(res.status).to.equal(200);
      expect(res.type).to.equal('application/json');
      //test length of array of records must know length first
      expect(res.body.allAllergyintolerances.length).to.equal(0);
      done();
    })
  })
});

//PUT substance, reaction and severity test
describe("allergyintolerance", function(){
it("should PUT the substance, reaction and severity on /allergyintolerances PUT", function(done){
  api.put("/allergyintolerances/")
     .send({"substance":"test","reaction":"test", "severity":"test"})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with matching substance, reaction and severity
    expect(res.body.criteriaAllergyintolerance.length).to.equal(0);
    done();
  })
})
});

//PATCH pid test
describe("allergyintolerance", function(){
it("should PATCH the PID on /allergyintolerances PATCH", function(done){
  api.patch("/allergyintolerances/")
     .send({"pid":1})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with the pid of the patient
    expect(res.body.patientAllergyintolerance.length).to.equal(0);
    done();
  })
})
});


// // DELETE record test
// // change id in url to the id of the record created in post
// // Just test once
// describe("allergyintolerance", function(){
// it("should DELETE the record on /allergyintolerances/:id DELETE", function(done){
//   api.delete("/allergyintolerances/58f1837873b39a57b3f53d97")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Allergyintolerance successfully deleted');
//     done();
//   })
// })
// });
