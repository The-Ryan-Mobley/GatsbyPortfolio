import React from "react"
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout"
import "../components/style.css";
import Image from "../components/image";

import SEO from "../components/seo"
import "../components/style.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Bio Page" />
    <Grid container>
      <Grid item xs={12}>
        <h1>About Me</h1>
      </Grid>
      <div className="pageBody">
        <Grid item xs={12}>
          <img src={"images/20190822_141852.jpg"} alt="profile" className="profile-pic"/>
            <p>
            Lorem ipsum dolor amet marfa 90's salvia gluten-free cred snackwave dreamcatcher helvetica chillwave thundercats four dollar toast farm-to-table food truck. Trust fund put a bird on it XOXO, humblebrag bespoke microdosing tofu tumeric pok pok kale chips palo santo. Mustache direct trade squid thundercats, chia quinoa farm-to-table deep v hell of viral. Put a bird on it poke bicycle rights, taxidermy chambray microdosing cardigan disrupt wolf woke palo santo kinfolk blue bottle.

Kickstarter banjo raw denim lo-fi vexillologist. Irony selfies disrupt venmo. Hella succulents franzen af put a bird on it. Pop-up tilde whatever vinyl, try-hard literally kickstarter authentic franzen knausgaard paleo gluten-free artisan schlitz bushwick. Authentic fashion axe trust fund, meditation salvia distillery offal. Salvia hexagon pour-over adaptogen chambray blue bottle. Health goth fam wolf, chambray vegan pitchfork forage try-hard.

Small batch pork belly food truck brooklyn irony migas chillwave, lomo mlkshk twee. Shaman palo santo man bun kogi tattooed cardigan, tilde tacos franzen four loko adaptogen cred shabby chic. Man braid YOLO poke four dollar toast, meggings air plant normcore yr four loko pickled 3 wolf moon meh vice seitan +1. Tumeric flexitarian fam, retro four loko knausgaard post-ironic af. Twee artisan shoreditch sriracha skateboard organic, 3 wolf moon viral disrupt. Fingerstache authentic freegan, beard hexagon stumptown helvetica raw denim.

Chillwave etsy bitters squid celiac slow-carb marfa affogato pour-over cardigan fam. Locavore activated charcoal squid chillwave health goth, pug gluten-free aesthetic fashion axe etsy selvage franzen tousled try-hard 90's. Cornhole hammock butcher palo santo salvia lo-fi activated charcoal narwhal coloring book gentrify pour-over meditation wayfarers tousled lyft. Tousled photo booth 3 wolf moon tattooed. Edison bulb hashtag mustache marfa cornhole, vaporware post-ironic.

Prism cliche cornhole tilde yr blog. Live-edge single-origin coffee shoreditch, fanny pack typewriter selfies neutra skateboard bicycle rights master cleanse ugh franzen four loko. Fingerstache gluten-free four dollar toast swag craft beer, shabby chic vegan fashion axe trust fund stumptown blog truffaut YOLO twee adaptogen. Glossier man bun tacos godard. Beard DIY occupy vexillologist ramps hot chicken snackwave next level shabby chic. Neutra fanny pack polaroid, four dollar toast messenger bag yr DIY hot chicken flannel actually jianbing blog.

Oh. You need a little dummy text for your mockup? How quaint.

I bet you’re still using Bootstrap too…
            </p>
        </Grid>
      </div>
    </Grid>
    
    
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
