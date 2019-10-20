export default  ({ redirect }) => {
  let user = JSON.parse(localStorage.getItem('vuex'))['user'];
  
  if (!Object.keys(user).length) {
    console.log('test')
    return redirect('/login')
  }
}
