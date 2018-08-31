
/**
 * Save credentials object as JSON in localStorage
 * @param {*} credentials Array containing [token: '', user_id: '']
 */
const setCredentials = (credentials) => {
    localStorage.setItem('credentials', JSON.stringify(credentials))
  }
  
  /**
   * Return a user credential object stored in local storage
   */
  const getCredentials = () => {
    let json = localStorage.getItem('credentials')
    if (json != null && json.length > 1) {
      return JSON.parse(json)
    } else {
      return {token: '', user_id: ''}
    }
  }
  export default {
    setCredentials,
    getCredentials
  }
  