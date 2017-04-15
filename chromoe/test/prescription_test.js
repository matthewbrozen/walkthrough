var should    = require("chai").should(),
	expect    = require("chai").expect,
	supertest = require("supertest"),
	api       = supertest("http://localhost:3000")


//start testing by uncommenting POST testing

// //POST new record test
// //uncomment and just test once at the beginning of testing because it will change the length of the array on the GET test
// describe("prescription", function(){
// it("should POST one prescription on /prescriptions POST", function(done){
//   api.post("/prescriptions/")
//   //write new object when testing each time to test posting new
//      .send(
// 			 {"pid": 1,"isBrand": true,"manufacturer": "test","product": "test","form": "test","ingredient": "test","dose": 1,"batch":1,"lotNumber": "test","expirationDate": "2016-03-01","package": "test","content": "test","amount": "test","dateAsserted": "2016-03-01","status":"test","reasonforuseReference": "test","effectivedateTime":"2016-03-01","effectivePeriod": "test","note": "test","supportingInformation": "test","medicationReference": "test","quantitysimpleQuantity": "test","quantityRange": "test","rateRatio": "test","rateRange": "test","maxdoseperPeriod": "test","dateWritten": "2016-03-01","dateEnded": "2016-03-01","reasonEnded": "test","prescriber": "test","encounter": "test","dosageInstruction": "test","asneededBoolean": true,"numberofrepeatsAllowed": "test","quantity": "test","expectedsupplyDuration": "test","substitution": "test","priorPrescription": "test","reason": "test"})
//   .end(function(err,res){
// 		expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
// 		expect(res.body.newPrescription.pid).to.equal(1);
// 		expect(res.body.newPrescription.isBrand).to.equal(true);
// 		expect(res.body.newPrescription.manufacturer).to.equal("test");
// 		expect(res.body.newPrescription.product).to.equal("test");
// 		expect(res.body.newPrescription.form).to.equal("test");
// 		expect(res.body.newPrescription.ingredient).to.equal("test");
// 		expect(res.body.newPrescription.dose).to.equal(1);
// 		expect(res.body.newPrescription.batch).to.equal(1);
// 		expect(res.body.newPrescription.lotNumber).to.equal("test");
// 		expect(res.body.newPrescription.expirationDate).to.equal("2016-03-01T00:00:00.000Z");
// 		expect(res.body.newPrescription.package).to.equal("test");
// 		expect(res.body.newPrescription.content).to.equal("test");
// 		expect(res.body.newPrescription.amount).to.equal("test");
// 		expect(res.body.newPrescription.dateAsserted).to.equal("2016-03-01T00:00:00.000Z");
// 		expect(res.body.newPrescription.status).to.equal("test");
// 		expect(res.body.newPrescription.reasonforuseReference).to.equal("test");
// 		expect(res.body.newPrescription.effectivedateTime).to.equal("2016-03-01T00:00:00.000Z");
// 		expect(res.body.newPrescription.effectivePeriod).to.equal("test");
// 		expect(res.body.newPrescription.note).to.equal("test");
// 		expect(res.body.newPrescription.supportingInformation).to.equal("test");
// 		expect(res.body.newPrescription.medicationReference).to.equal("test");
// 		expect(res.body.newPrescription.quantitysimpleQuantity).to.equal("test");
// 		expect(res.body.newPrescription.quantityRange).to.equal("test");
// 		expect(res.body.newPrescription.rateRatio).to.equal("test");
// 		expect(res.body.newPrescription.rateRange).to.equal("test");
// 		expect(res.body.newPrescription.maxdoseperPeriod).to.equal("test");
// 		expect(res.body.newPrescription.dateWritten).to.equal("2016-03-01T00:00:00.000Z");
// 		expect(res.body.newPrescription.dateEnded).to.equal("2016-03-01T00:00:00.000Z");
// 		expect(res.body.newPrescription.reasonEnded).to.equal("test");
// 		expect(res.body.newPrescription.prescriber).to.equal("test");
// 		expect(res.body.newPrescription.encounter).to.equal("test");
// 		expect(res.body.newPrescription.dosageInstruction).to.equal("test");
// 		expect(res.body.newPrescription.asneededBoolean).to.equal(true);
// 		expect(res.body.newPrescription.numberofrepeatsAllowed).to.equal("test");
// 		expect(res.body.newPrescription.quantity).to.equal("test");
// 		expect(res.body.newPrescription.expectedsupplyDuration).to.equal("test");
// 		expect(res.body.newPrescription.substitution).to.equal("test");
// 		expect(res.body.newPrescription.reason).to.equal("test");
// 		expect(res.body.newPrescription.priorPrescription).to.equal("test");
//     done();
//   });
// });
// });

//After POST test then uncomment rest of code, leave DELETE test commented for ongoing testing

//GET all records test
describe("prescription", function(){
it("should GET all prescriptions on /prescriptions GET", function(done){
	api.get("/prescriptions")
	.end(function(err,res){
		expect(res.status).to.equal(200);
		expect(res.type).to.equal('application/json');
		//test length of array of records must know length first
		expect(res.body.allPrescriptions.length).to.equal(0);
		done();
	})
})
});

//PUT products test
describe("prescription", function(){
it("should PUT the product on /prescriptions PUT", function(done){
api.put("/prescriptions/")
	 .send({"product":"test"})
.end(function(err,res){
	expect(res.status).to.equal(200);
	expect(res.type).to.equal('application/json');
	expect(res.body.criteriaPrescriptions.length).to.equal(0);
	done();
})
})
});

//PATCH pid test
describe("prescription", function(){
it("should PATCH the PID on /prescriptions PATCH", function(done){
api.patch("/prescriptions/")
	 .send({"pid":1})
.end(function(err,res){
	expect(res.status).to.equal(200);
	expect(res.type).to.equal('application/json');
	expect(res.body.patientPrescriptions.length).to.equal(0);
	done();
})
})
});


// DELETE test
// change id in url to the id of the record created in post
// Just test once
// describe("prescription", function(){
// it("should DELETE the record on /prescriptions/:id DELETE", function(done){
//   api.delete("/prescriptions/58e559d2744a23740d699356")
//   .end(function(err,res){
//     expect(res.status).to.equal(200);
//     expect(res.type).to.equal('application/json');
//     expect(res.body.message).to.equal('Prescription successfully deleted');
//     done();
//   })
// })
// });
