---
title: Easy form handling in Gatsby
date: "2018-12-30"
difficulty: easy
---

Ever wanted to add a contact form to your gatsby app but you weren't in a mood to spend too much time on it?
Then use Netlify forms!

## What does Netlify have to offer regarding forms?

Everything.
From handling the form submissions through notifying you about form submissions to preventing bots from spamming you.
And you get all this with minimal work and even for free (up to a number of submissions).

## Just add some attributes...

If you already have a form in your app just add the two attributes I mention bellow and you're done.
Otherwise just follow along, it won't take long.
Really.

### Let's get to building our new form

As an example I'll be using this form:

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

To tell Netlify to handle this form we'll add 2 attributes - `data-netlify` and `data-netlify-honeypot` - to our form tag.
The first one (`data-netlify`) tells Netlify that you want it to register this form.
The second attribute (`data-netlify-honeypot`) takes care of spam bots.

The hidden input on line 7 is just another tool defending our form against bots.

```html{4,5,7}
<form 
  name="contact" 
  method="post" 
  data-netlify="true" 
  data-netlify-honeypot="bot-field"
  >
  <input type="hidden" name="bot-field" />
  ...
```

And that's all there is to it.
We literally just added only 2 html attributes and we now have a form with all the functionality you'd typically need!
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

```html{2}
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

---

If you'd like to see a Gatsby app using Netlify forms in action go see my [starter app](https://forms-starter.netlify.com/) and also check out the [code](https://github.com/vojoup/netlify-forms-starter)!

I hope you liked this post and I'll see you in the next one 👋!