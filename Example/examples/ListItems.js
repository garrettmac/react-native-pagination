
import faker from 'faker';
console.log(" faker: ",faker);
import _ from 'lodash';
// const ListItems=[{"id":1,"name":"Bernie Sanders"},{"id":2,"name":"Al Frankin"},{"id":3,"name":"Elizabeth Warren"},{"id":4,"name":"Cory Booker"}]

// // fetch('https://jsonplaceholder.typicode.com/posts')
// async function getMoviesFromApi() {
//   try {
//     let response = await fetch('https://facebook.github.io/react-native/movies.json');
//     let responseJson = await response.json();
//     return responseJson.movies;
//   } catch(error) {
//     console.error(error);
//   }
// }
let PersonList = new _.times(15,(i)=>{
  return {
    index:i,
    key:i,
    name:faker.name.findName(),
    avatar:faker.internet.avatar(),
    group:_.sample(["Work","Friend","Acquaintance","Other"]),
    email:faker.internet.email(),
  }
})

// export default {PersonList}
export  {PersonList}
// export {getMoviesFromApi}
