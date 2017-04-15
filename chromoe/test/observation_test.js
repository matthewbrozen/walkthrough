var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000")

// //start testing by uncommenting POST testing
//
// // POST new record test
// //uncomment and just test once at the beginning of testing because it will change the length of the array on the GET test
// describe("observation", function(){
// it("should POST one observation on /observations POST", function(done){
//   api.post("/observations/")
//   //write new object when testing each time to test posting new
//      .send({"pid":1,"category":"test", "systolicbloodPressure":1,"diastolicbloodPressure":1,"isSmoker":"test"})
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
// 		expect(res.body.newObservation.pid).to.equal(1);
// 		expect(res.body.newObservation.category).to.equal("test");
// 		expect(res.body.newObservation.systolicbloodPressure).to.equal(1);
// 		expect(res.body.newObservation.diastolicbloodPressure).to.equal(1);
// 		expect(res.body.newObservation.isSmoker).to.equal("test");
//     done();
//   });
// });
// });

//After POST test then uncomment rest of code, leave DELETE test commented for ongoing testing

//GET all test
describe("observation", function(){
it("should GET all observations on /observations GET", function(done){
	api.get("/observations")
	.end(function(err,res){
		expect(res.status).to.equal(200);
		expect(res.type).to.equal('application/json');
		//test length of array of records must know length first
		expect(res.body.allObservations.length).to.equal(0);
		done();
	})
})
});

//PUT substance, reaction and severity test
describe("observation", function(){
it("should PUT the category on /observations PUT", function(done){
  api.put("/observations/")
     .send({"category":"test"})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with matching substance, reaction and severity
    expect(res.body.criteriaObservations.length).to.equal(0);
    done();
  })
})
});

//PATCH pid test
describe("observation", function(){
it("should PATCH the PID on /observations PATCH", function(done){
  api.patch("/observations/")
     .send({"pid":1})
  .end(function(err,res){
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    //find all records with the pid of the patient
    expect(res.body.patientObservations.length).to.equal(0);
    done();
  })
})
});


// // DELETE record test
// // change id in url to the id of the record created in post
// // Just test once
// describe("observation", function(){
// it("should DELETE the record on /observations/:id DELETE", function(done){
//   api.delete("/observations/58e1480e1a60df3592eee34a")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Observation successfully deleted');
//     done();
//   })
// })
// });
