```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // Solution: Use `router.replace` for client-side transitions in production
    router.replace('/contact'); 
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </div>
  );
}
```
```javascript
// pages/contact.js (Create this file if you dont have it)

export default function Contact(){
  return(
    <div>
      <h1>Contact Page</h1>
    </div>
  )
}
```