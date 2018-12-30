---
title: Easy form handling in Gatsby
date: "2018-12-30"
difficulty: easy
---

Ever wanted to add a contact form to your gatsby app but you weren't in a mood to spend too much time on it?
Then use Netlify forms!

## What does Netlify have to offer regarding forms?

Everything.
From handling the form submissions through notifying you about form submissions to preventing spam bots to submit your forms.
And you get all this with minimal work and even for free (up to a number of submissions).

## Use them in your existing app

If you already have a form in your app and you want to use Netlify to handle their submission you just have to add a few html attributes and deploy to netlify.
Consider your basic form would look like something this:

```html
<form name="contact">
  <div>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
  </div>
  <ul>
    <li>
      <input type="submit" value="Send Message"/>
    </li>
  </ul>
</form>
```

To enable Netlify to handle this form you'd modify it like this:

```html
<form 
  name="contact" 
  method="post" 
  data-netlify="true" 
  data-netlify-honeypot="bot-field"
  >
  <input type="hidden" name="bot-field" />
  ...
```

And that's it.
Now if you go to your apps dashboard and click _Forms_ you'll see your contact form and all the recent submissions!

Netlify even includes a default redirection to a success/thank you page after a successful form submission which you can customize if you want.

## Custom success page

First we'll create a new page called `success.js`.

```jsx
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Success = (props) => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main">
      <section>
        <div>
          <header>
            <h1>Success/Thank You Page</h1>
          </header>
          <p>Thank you for contacting us!</p>
          <Link to="/">Go back to homepage</Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success
```

This will give us a new route `/success`.
Then we just need to tell our form where we want it to take us when the from is submitted.
We do this using the `action` html attribute.
Set its value equal to the route of our success page which is `"/success"` in our case.

After this our form will look as follows:

```html
<form 
  action="/success"
  name="contact" 
  method="post" 
  data-netlify="true" 
  data-netlify-honeypot="bot-field"
  >
  <input type="hidden" name="bot-field" />
  <div>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
  </div>
  <ul className="actions">
    <li>
      <input type="submit" value="Send Message" className="special" />
    </li>
  </ul>
</form>
```

## Notifications

This is another great feature of Netlify forms.
You can be notified when your forms get submitted!

To set up such notifications go to the _Forms_ section in your app dashboard follow the instructions.

---

If you'd like to see a Gatsby app using Netlify forms in action go see my [starter app](https://forms-starter.netlify.com/) and also check out the [code](https://github.com/vojoup/netlify-forms-starter)!

I hope you liked this post and I'll see you in the next one 👋!