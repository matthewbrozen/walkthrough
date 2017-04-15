var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000")


//start testing by uncommenting POST testing

// //POST new record test
// //uncomment and just test once at the beginning of testing because it will change the length of the array on the GET test
// describe("dispense", function(){
// it("should POST one dispense on /dispenses POST", function(done){
//   api.post("/dispenses/")
//   //write new object when testing each time to test posting new
//      .send(
// 		 {"pid":1, "drugId":"test", "status":"test", "practitioner":"test", "product":"test", "reasonGiven":"test", "effectivetimeDate":"2017-3-06", "effectivetimePeriod":"test","note":"test", "dosage":"test", "method":"test", "quantity":"test", "dateWritten":"2017-3-06", "reasonEnded":"test", "dosageInstruction":"test", "asneededBoolean":true, "doseRange":"test", "rateRatio":"test", "rateRange":"test", "maxdoseperPeriod":"test", "dispenseRequest":"test", "validityPeriod":"test", "numberofrepeatsAllowed":"test", "expectedsupplyDuration":"test", "substitution":"test", "reason":"test", "priorPrescription":"test" })
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
// 		expect(res.body.newDispense.pid).to.equal(1);
// 		expect(res.body.newDispense.drugId).to.equal("test");
// 		expect(res.body.newDispense.status).to.equal("test");
// 		expect(res.body.newDispense.practitioner).to.equal("test");
// 		expect(res.body.newDispense.product).to.equal("test");
// 		expect(res.body.newDispense.reasonGiven).to.equal("test");
// 		expect(res.body.newDispense.effectivetimeDate).to.equal("2017-03-06T08:00:00.000Z");
// 		expect(res.body.newDispense.effectivetimePeriod).to.equal("test");
// 		expect(res.body.newDispense.note).to.equal("test");
// 		expect(res.body.newDispense.dosage).to.equal("test");
// 		expect(res.body.newDispense.method).to.equal("test");
// 		expect(res.body.newDispense.quantity).to.equal("test");
// 		expect(res.body.newDispense.dateWritten).to.equal("2017-03-06T08:00:00.000Z");
// 		expect(res.body.newDispense.reasonEnded).to.equal("test");
// 		expect(res.body.newDispense.dosageInstruction).to.equal("test");
// 		expect(res.body.newDispense.asneededBoolean).to.equal(true);
// 		expect(res.body.newDispense.doseRange).to.equal("test");
// 		expect(res.body.newDispense.rateRatio).to.equal("test");
// 		expect(res.body.newDispense.rateRange).to.equal("test");
// 		expect(res.body.newDispense.maxdoseperPeriod).to.equal("test");
// 		expect(res.body.newDispense.dispenseRequest).to.equal("test");
// 		expect(res.body.newDispense.validityPeriod).to.equal("test");
// 		expect(res.body.newDispense.numberofrepeatsAllowed).to.equal("test");
// 		expect(res.body.newDispense.expectedsupplyDuration).to.equal("test");
// 		expect(res.body.newDispense.substitution).to.equal("test");
// 		expect(res.body.newDispense.reason).to.equal("test");
// 		expect(res.body.newDispense.priorPrescription).to.equal("test");
//     done();
//   });
// });
// });

//After POST test then uncomment rest of code, leave DELETE test commented for ongoing testing

//GET all records test
describe("familymemberhistory", function(){
it("should GET all familymemberhistorys on /familymemberhistorys GET", function(done){
	api.get("/familymemberhistorys")
	.end(function(err,res){
		expect(res.status).to.equal(200);
		expect(res.type).to.equal('application/json');
		//test length of array of records must know length first
		expect(res.body.allFamilymemberhistorys.length).to.equal(0);
		done();
	})
})
});

//PUT products test
describe("familymemberhistory", function(){
it("should PUT the familymemberhistory on /familymemberhistorys PUT", function(done){
api.put("/familymemberhistorys/")
	 .send({"relationship":"test", "condition":"test","deceased":"test"})
.end(function(err,res){
	expect(res.status).to.equal(200);
	expect(res.type).to.equal('application/json');
	expect(res.body.criteriaFamilymemberhistorys.length).to.equal(0);
	done();
})
})
});

//PATCH pid test
describe("familymemberhistory", function(){
it("should PATCH the PID on /familymemberhistorys PATCH", function(done){
api.patch("/familymemberhistorys/")
	 .send({"pid":1})
.end(function(err,res){
	expect(res.status).to.equal(200);
	expect(res.type).to.equal('application/json');
	expect(res.body.patientFamilymemberhistorys.length).to.equal(0);
	done();
})
})
});


// //DELETE test
// //change id in url to the id of the record created in post
// //Just test once
// describe("dispense", function(){
// it("should DELETE the record on /dispenses/:id DELETE", function(done){
//   api.delete("/dispenses/58e008a53e2ef712ed62af93")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Dispense successfully deleted');
//     done();
//   })
// })
// });
