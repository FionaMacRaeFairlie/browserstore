import Cookies from 'universal-cookie';
function CookieDemo() {
const cookies = new Cookies();
cookies.set('myCat', 'Frank', { path: '/' });
console.log(cookies.get('myCat')); 
}
export default CookieDemo;