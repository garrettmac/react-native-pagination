
import faker from 'faker';
import _ from 'lodash';

let MockPersonList = new _.times(35,(i)=>{
  return {
    id:i,
    index:i,
    key:i,
    name:faker.name.findName(),
    avatar:faker.internet.avatar(),
    group:_.sample(["Work","Friend","Acquaintance","Other"]),
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



export  {MockPersonList,MockRobotsList}
