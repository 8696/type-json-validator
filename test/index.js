const TypeJSON = require('./node.lib.dev');
const typeJSON = new TypeJSON({
  username: String
});
/**
 * @param typeJSONIns {Object}
 * @param jsonData {Object | Array}
 * */
function implementTest(typeJSONIns, jsonData) {
  return new Promise((resolve, reject) => {
    try {
      typeJSONIns.test(jsonData);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}
implementTest(typeJSON, {
  username: '2020'
})
  .then(() => {
    console.log('success')
  })
  .catch(error => {
    console.log(error)
  })
