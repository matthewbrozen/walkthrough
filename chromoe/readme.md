# ChromoAPI

### Startup Instructions

#### git clone

#### npm install

#### start mongodb

#### run nodemon on ChromoAPI directory



## ROUTES


| Collection                | URL                                      | RESTful Route       | Description                 |
|---------------------------|------------------------------------------|---------------------|-----------------------------|
| **Patients**              | https://chromoapi.herokuapp.com/patients | GET                 | returns all patient records |
| **Patients**              | https://chromoapi.herokuapp.com/patients | POST w/body         | creates a new patient and records the new patient record |
| **Patients**              | https://chromoapi.herokuapp.com/patients | PUT  w/body         | returns all records with matching gender|
| **Patients**              | https://chromoapi.herokuapp.com/patients | PATCH w/body        | returns all records with matching PID |
| **Patients**              | https://chromoapi.herokuapp.com/patients | DELETE/:id          | deletes record with matching record id and return success message |
|                           |                                          |                     |                             |
| **Allergyintolerances**   | https://chromoapi.herokuapp.com/allergyintolerances | GET                 | returns all allergyintolerance records |
| **Allergyintolerances**   | https://chromoapi.herokuapp.com/allergyintolerances | POST w/body         | creates a new allergyintolerance and records the new allergyintolerance record |
| **Allergyintolerances**   | https://chromoapi.herokuapp.com/allergyintolerances | PUT  w/body         | returns all records with matching substance, severity and reaction|
| **Allergyintolerances**   | https://chromoapi.herokuapp.com/allergyintolerances | PATCH w/body        | returns all records with matching PID |
| **Allergyintolerances**   | https://chromoapi.herokuapp.com/allergyintolerances | DELETE/:id          | deletes record with matching record id and return success message |
|                           |                                          |                     |                             |
| **Conditions**            | https://chromoapi.herokuapp.com/conditions          | GET                 | returns all condition records |
| **Conditions**            | https://chromoapi.herokuapp.com/conditions          | POST w/body         | creates a new condition and records the new condition record |
| **Conditions**            | https://chromoapi.herokuapp.com/conditions          | PUT  w/body         | returns all records with matching name, severity and stage|
| **Conditions**            | https://chromoapi.herokuapp.com/conditions          | PATCH w/body        | returns all records with matching PID |
| **Conditions**            | https://chromoapi.herokuapp.com/conditions          | DELETE/:id          | deletes record with matching record id and return success message |
|                           |                                          |                     |                             |
| **Dispenses**             | https://chromoapi.herokuapp.com/dispenses           | GET                 | returns all dispense records |
| **Dispenses**             | https://chromoapi.herokuapp.com/dispenses           | POST w/body         | creates a new dispense and records the new dispense record |
| **Dispenses**             | https://chromoapi.herokuapp.com/dispenses           | PUT  w/body         | returns all records with matching product |
| **Dispenses**             | https://chromoapi.herokuapp.com/dispenses           | PATCH w/body        | returns all records with matching PID |
| **Dispenses**             | https://chromoapi.herokuapp.com/dispenses           | DELETE/:id          | deletes record with matching record id and return success message |
|                           |                                          |                     |                             |
| **Familymemberhistorys**  | https://chromoapi.herokuapp.com/familymemberhistorys          | GET                 | returns all familymemberhistory records |
| **Familymemberhistorys**  | https://chromoapi.herokuapp.com/familymemberhistorys          | POST w/body         | creates a new familymemberhistory and records the new familymemberhistory record |
| **Familymemberhistorys**  | https://chromoapi.herokuapp.com/familymemberhistorys          | PUT  w/body         | returns all records with matching relationship, deceased and condition|
| **Familymemberhistorys**  | https://chromoapi.herokuapp.com/familymemberhistorys          | PATCH w/body        | returns all records with matching PID |
| **Familymemberhistorys**  | https://chromoapi.herokuapp.com/familymemberhistorys          | DELETE/:id          | deletes record with matching record id and return success message |
|                           |                                          |                     |                             |
| **Immunizations**  | https://chromoapi.herokuapp.com/immunizations          | GET                 | returns all immunization records |
| **Immunizations**  | https://chromoapi.herokuapp.com/immunizations          | POST w/body         | creates a new immunization and records the new immunization record |
| **Immunizations**  | https://chromoapi.herokuapp.com/immunizations          | PUT  w/body         | returns all records with matching category|
| **Immunizations**  | https://chromoapi.herokuapp.com/immunizations          | PATCH w/body        | returns all records with matching PID |
| **Immunizations**  | https://chromoapi.herokuapp.com/immunizations          | DELETE/:id          | deletes record with matching record id and return success message |
|                           |                                          |                     |                             |
| **Observations**  | https://chromoapi.herokuapp.com/observations          | GET                 | returns all observation records |
| **Observations**  | https://chromoapi.herokuapp.com/observations          | POST w/body         | creates a new observation and records the new observation record |
| **Observations**  | https://chromoapi.herokuapp.com/observations          | PUT  w/body         | returns all records with matching category|
| **Observations**  | https://chromoapi.herokuapp.com/observations          | PATCH w/body        | returns all records with matching PID |
| **Observations**  | https://chromoapi.herokuapp.com/observations          | DELETE/:id          | deletes record with matching record id and return success message |
|                           |                                          |                     |                             |
| **Prescriptions**  | https://chromoapi.herokuapp.com/prescriptions          | GET                 | returns all prescription records |
| **Prescriptions**  | https://chromoapi.herokuapp.com/prescriptions          | POST w/body         | creates a new prescription and records the new prescription record |
| **Prescriptions**  | https://chromoapi.herokuapp.com/prescriptions          | PUT  w/body         | returns all records with matching product|
| **Prescriptions**  | https://chromoapi.herokuapp.com/prescriptions          | PATCH w/body        | returns all records with matching PID |
| **Prescriptions**  | https://chromoapi.herokuapp.com/prescriptions          | DELETE/:id          | deletes record with matching record id and return success message |
|                           |                                          |                     |                             |
| **Procedures**  | https://chromoapi.herokuapp.com/procedures          | GET                 | returns all procedure records |
| **Procedures**  | https://chromoapi.herokuapp.com/procedures          | POST w/body         | creates a new procedure and records the new procedure record |
| **Procedures**  | https://chromoapi.herokuapp.com/procedures          | PUT  w/body         | returns all records with matching category|
| **Procedures**  | https://chromoapi.herokuapp.com/procedures          | PATCH w/body        | returns all records with matching PID |
| **Procedures**  | https://chromoapi.herokuapp.com/procedures          | DELETE/:id          | deletes record with matching record id and return success message |




### Protected routes

| Collection                | URL                                      | RESTful Route       | Description                 |
|---------------------------|------------------------------------------|---------------------|-----------------------------|
| **Researchers**           | https://chromoapi.herokuapp.com/researchers | GET                 | returns all researcher records |
| **Researchers**           | https://chromoapi.herokuapp.com/researchers | GET/:id             | returns one researcher record |
| **Researchers**           | https://chromoapi.herokuapp.com/researchers | POST w/body         | creates a new researcher  and records the new researcher  record |
| **Researchers**           | https://chromoapi.herokuapp.com/researchers | PUT  w/body         | return single records with correct matching email and password |
| **Researchers**           | https://chromoapi.herokuapp.com/researchers | DELETE/:id          | deletes record with matching record id and return success message |
|                           |                                          |                     |                             |
| **Studys**           | https://chromoapi.herokuapp.com/studys| GET                  | returns all study records |
| **Studys**           | https://chromoapi.herokuapp.com/studys | GET/:id             | returns one study record |
| **Studys**           | https://chromoapi.herokuapp.com/studys | POST w/body         | creates a new study  and records the new study  record |
| **Studys**           | https://chromoapi.herokuapp.com/studys | PUT  w/body         | returns all records with matching RID |
| **Studys**           | https://chromoapi.herokuapp.com/studys | PATCH/:id w/body    | updated study pidsAvaialable with pidsBought sent as body |
| **Studys**           | https://chromoapi.herokuapp.com/studys | DELETE/:id          | deletes record with matching record id and return success message |
|                           |                                          |                     |                             |
| **Realpatients**           | https://chromoapi.herokuapp.com/realpatients | GET                 | returns all realpatient records |
| **Realpatients**           | https://chromoapi.herokuapp.com/realpatients | GET/:id             | returns one realpatient record |
| **Realpatients**           | https://chromoapi.herokuapp.com/realpatients | POST w/body         | creates a new realpatient  and records the new realpatient record |
| **Realpatients**           | https://chromoapi.herokuapp.com/realpatients | PUT  w/body         | return single records with correct matching email and password |
| **Realpatients**           | https://chromoapi.herokuapp.com/realpatients | PATCH/:id w/body    | updated realpatient offers with offer sent as body |
| **Realpatients**           | https://chromoapi.herokuapp.com/realpatients | PUT/:id w/body      | updated realpatient revenue with revenue and remove matching offer sent as body |
| **Realpatients**           | https://chromoapi.herokuapp.com/realpatients | DELETE/:id          | deletes record with matching record id and return success message |



## Data Models


#### Patient Model
| key                         | datatype      |
|-----------------------------|---------------|
| pid                         |   Number            |
| active                      |   Boolean          |
| firstName                   |   String            |
| lastName                    |   String            |
| phone                       |   String            |
| gender                      |   String            |
| birthDate                   |   Date            |
| address                     |   String            |
| zipcode                     |   Number            |
| married                     |   Boolean            |
| numberofChildren            |   Number            |
| preferredCommunication      |   String            |
| careProvider                |   String            |
| hasGenome                   |   Boolean            |
| hasTracker                  |   Boolean            |
| hasEHR                      |   Boolean            |
| patientValue                |   Number            |


#### Allergyintolerance Model
| key                         | datatype      |
|-----------------------------|---------------|
| pid                         |   Number            |
| onset                       |   Date          |
| substance                   |   String            |
| status                      |   String            |
| lastOccurance               |   Date           |
| numberofOccurances          |   Number           |
| reaction                    |   String            |
| certainty                   |   String            |
| description                 |   String             |
| severity                    |   String             |


#### Condition Model
| key                         | datatype      |
|-----------------------------|---------------|
| pid                         |   Number            |
| name                        |   String          |
| encounter                   |   String            |
| asserter                    |   String            |
| dateRecorded                |   Date           |
| clinicalStatus              |   String           |
| verificationStatus          |   String            |
| severity                    |   String            |
| onsetPeriod                 |   String             |
| stage                       |   String             |
| assessment                  |   String             |
| evidence                    |   String             |
| notes                       |   String             |


#### Dispense Model
| key                         | datatype      |
|-----------------------------|---------------|
| pid                         |   Number            |
| drugId                      |   String          |
| status                      |   String            |
| practitioner                |   String            |
| product                     |   Date           |
| reasonGiven                 |   String           |
| effectivetimeDate           |   String            |
| effectivetimePeriod         |   String            |
| note                        |   String             |
| dosage                      |   String             |
| method                      |   String             |
| quantity                    |   String             |
| dateWritten                 |   String             |
| reasonEnded                 |   String             |
| dosageInstruction           |   String             |
| asneededBoolean             |   String             |
| doseRange                   |   String             |
| rateRatio                   |   String             |
| rateRange                   |   String             |
| maxdoseperPeriod            |   String             |
| dispenseRequest             |   String             |
| validityPeriod              |   String             |
| numberofrepeatsAllowed      |   String             |
| expectedsupplyDuration      |   String             |
| substitution                |   String             |
| reason                      |   String             |
| priorPrescription           |   String             |


#### Familymemberhistory Model
| key                         | datatype      |
|-----------------------------|---------------|
| pid                         |   Number            |
| status                      |   String          |
| relationship                |   String            |
| bornDate                    |   String            |
| deceased                    |   Date           |
| deceasedAge                 |   String           |
| condition                   |   String            |
| outcome                     |   String            |
| onsetAge                    |   String             |
| onsetRange                  |   String             |
| onsetPeriod                 |   String             |


#### Immunization Model
| key                         | datatype      |
|-----------------------------|---------------|
| pid                         |   Number            |
| status                      |   String          |
| date               |   Date           |
| vaccineCode                   |   String            |
| reported |  Boolean           |
| performer                 |  String         |
| requester               |   String            |
| category                   |   String            |
| manufacturer                  |   String             |
| lotNumber                 |   String             |
| expirationDate               |   Date            |
| site               |   String             |
| doseQuantity               |   String             |
| note              |   String             |
| reaction              |   String             |
| vaccinationProtocol              |   String             |
| description               |   String             |
| authority              |   String             |
| series              |   String             |
| seriesDoses               |   String             |
| targetDisease               |   String             |
| doseStatus               |   String             |
| doesestatusReason               |   String             |


#### Observation Model
| key                         | datatype      |
|-----------------------------|---------------|
| pid                         |   Number            |
| category                      |   String          |
| systolicbloodPressure               |    Number            |
| diastolicbloodPressure                   |    Number            |
|  isSmoker |  String          |


#### Prescription Model
| key                         | datatype      |
|-----------------------------|---------------|
| pid                         |   Number            |
| isBrand                      |   Boolean         |
| manufacturer                      |   String            |
| product                     |  String          |
| form                 |   String           |
| ingredient          |   String            |
| dose        |   Number          |
| batch                       |   Number             |
| lotNumber                      |   String             |
| expirationDate                    |   Date            |
| package                    |   String             |
| content                 |   String             |
| amount                |   String             |
| dateAsserted         |   Date            |
| status               |   String             |
| reasonforuseReference       |   String             |
| effectivedateTime                  |  Date             |
| effectivePeriod                   |   String             |
| note            |   String             |
| supportingInformation            |   String             |
| medicationReference              |   String             |
| quantitysimpleQuantity      |   String             |
| quantityRange      |   String             |
| rateRatio               |   String             |
| rateRange                      |   String             |
| maxdoseperPeriod          |   String             |
| dateWritten         |   Date            |
| dateEnded         |   Date              |
| reasonEnded          |   String             |
| prescriber         |   String             |
| encounter          |   String             |
| dosageInstruction         |   String             |
| asneededBoolean          |   Boolean             |
| numberofrepeatsAllowed         |   String             |
| quantity        |   String             |
| expectedsupplyDuration          |   String             |
| substitution         |   String             |
| reason          |   String             |
| priorPrescription        |   String             |


#### Procedure Model
| key                         | datatype      |
|-----------------------------|---------------|
| pid                         |   Number            |
| status                      |    String          |
| category                      |   String            |
| encounter                     |  String          |
| effectivedateTime                |   Date           |
| effectivePeriod          |   String            |
| issued        |   Date           |
| performer                      |   String             |
| valueQuantity                      |   String             |
| valueRange                   |    String            |
| valueRatio                    |   String             |
| valueTime                 |   String             |
| comments                |   String             |
| bodySite        |   Date            |
| specimen               |   String             |
| device      |   String             |
| referenceRange                 |  String             |


#### Realpatient Model
| key                         | datatype      |
|-----------------------------|---------------|
| email                        |   String            |
| password                     |    String          |
| active                     |   Boolean            |
| firstName                     |  String          |
| lastName                |  String           |
| phone         |   String            |
| gender        |   Date           |
| birthDate                     |   Date             |
| address                     |   String             |
| zipcode                  |    Number           |
| married                    |   Boolean            |
| numberofChildren                 |   Number           |
| preferredCommunication                |   String             |
| careProvider        |   Date            |
| hasGenome              |   Boolean            |
| hasTracker      |   Boolean            |
| hasEHR                 |  Boolean            |
| patientValue               |  Number             |
| revenue                | [{amount:Number,company:String, studyid:String}]          |
| setting                 |  String             |
| offers                |  [{amount:Number,company:String, studyid:String}]              |


#### Researcher Model
| key                         | datatype      |
|-----------------------------|---------------|
| email                        |   String            |
| password                        |   String            |
| company                       |   String            |


#### Study Model
| key                         | datatype      |
|-----------------------------|---------------|
| rid                        |   String            |
| description                       |   String            |
| studyName                       |   String            |
| areaofResearch                      |   String            |
| budget                       |   String            |
| allergyCriteria                      |   [{substance: String, reaction: String, severity: String}]            |
| prescriptionCriteria                      |   [{product: String, doseMin: String, doseMax: String, quantityMin: String, quantityMax: String}]           |
| observationCriteria                     |   [{category: String, systolicbloodPressure: Number, diastolicbloodPressure: Number, isSmoker: String}]         |
| conditionCriteria                     |   [{category: String, severity: String, stage: String}]            |
| procedureCriteria                    |   [{category: String, dateStart: Date, dateEnd: Date}]            |
| immunizationCriteria                     |   [{category: String, dateStart: Date, dateEnd: Date}]          |
| familymemberhistoryCriteria                     |  [{relationship: String, deceased: Boolean, condition: String}]           |
| dispenseCriteria                     |   [{product: String, quantityMin: String, quantityMax: String, daysStart: String, daysEnd: String  }]            |
| patientCriteria                      |   [{gender: String, ageStart: Number, ageEnd : Number, zipcode: Number, radius: Number}]           |
| pidsBought                      |  [Number]           |
| pidsAvailable                     |   [Number]             |
