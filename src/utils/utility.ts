import { reject } from "q";

/**
 * @namespace utility
 */

namespace utility {
  export function log(msg) {
    console.log(`%c ${msg} `, 'background: #aaf442; color: #000000');
  }

  export function JSONLoader(path) {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            let jsonData = JSON.parse(xhr.responseText);
            resolve(jsonData)
            // if (callback) callback(jsonData);
          }
        }
      };
      xhr.open('GET', path, true);
      xhr.send(null);
    })
   
  }
}

export default utility;
