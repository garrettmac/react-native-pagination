
import faker from 'faker';
import _ from 'lodash';

let MockPersonList = new _.times(35,(i)=>{
  return {
    id:i,
    index:i,
    key:i,
    name:faker.name.findName(),
    avatar:faker.internet.avatar(),
    group:_.sample(["Family","Friend","Acquaintance","Other"]),
    email:faker.internet.email(),
  }
})


let MockRobotsList = new _.times(15,(i)=>{
  return {
    id:i,
    index:i,
    key:i,
    name:faker.name.findName(),
    avatar:faker.internet.avatar(),
    group:_.sample(['Work','Friend','Acquaintance','Other']),
    email:faker.internet.email(),
  }
})
let MockTweetList = new _.times(15,(i)=>{
  return {
    id:i,
    index:i,
    key:i,
    title:faker.name.jobTitle(),
    city:faker.address.city(),
    type:faker.name.jobType(),
    color:faker.internet.color(),
    description:faker.lorem.sentence(),
    // image:faker.image.business(),
    image:faker.internet.avatar(),
  }
})



export  {MockPersonList,MockRobotsList,MockTweetList}
