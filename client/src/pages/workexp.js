import React, { useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import profilePic from "../images/20190822_141852.jpg";
import linkedInLogo from "../images/5a22d420c9a5a7.416105621512231968826.png";
import gitHubLogo from "../images/github.png";
import resumeLogo from "../images/document-icon-36561.png";
import ToTopButton from "../components/toTopButton";
import {PageBodyGrid} from "../components/styledComponents";
import CompanyPiece from "../components/companyPiece";
import CPaTLogo from "../images/CPaT-grey-logo.png";
import invent from "../images/CPat-Invent-01-1024x343.png";
import fms from "../images/A220-fms-page-lesson-player-1024x576.png";
import lms from "../images/Access-V2-01-1024x330.png";
const WorkExp = () => {
    
    const [empList,setEmpList] = useState([]);
    useEffect(()=>{
        setEmpList([
            {
                company: 'CPaT Global LLC',
                companyPage: "https://www.cpat.com/",
                companyNumber: "(832) 585-8601",
                companyLogo: CPaTLogo,
                companyProjects: [
                    {
                        projectName: "Invent",
                        projectLogo: invent,
                        projectDescription: `Taiyaki freegan cray mixtape, post-ironic tousled portland. Unicorn cray marfa tote bag slow-carb hammock, occupy portland cronut biodiesel pug shabby chic fam hoodie. Tacos meggings fixie, green juice aesthetic copper mug authentic tousled. Brunch humblebrag green juice pabst shabby chic. Blue bottle umami woke, forage yuccie green juice subway tile. VHS viral art party, +1 tote bag live-edge squid poutine.
                        Leggings blue bot`,
    
                        accomplishments: [
                            {
                                piece: "FMS Trainer",
                                image: fms,
                                description: "I'm baby green juice austin truffaut meditation, XOXO ethical bushwick authentic. Trust fund cloud bread vaporware asymmetrical unicorn lumbersexual fixie pok pok, deep v artisan taxidermy. Crucifix retro chillwave quinoa kombucha hashtag chambray succulents skateboard neutra cloud bread small batch venmo. Cray fingerstache adaptogen humblebrag post-ironic single-origin coffee drinking vinegar hexagon. Affogato retro polaroid ugh plaid scenester keffiyeh bespoke before they sold out. Street art pabst single-origin coffee umami, echo park cray viral PBR&B hoodie twee letterpress chambray vape vaporware godard."
    
                            },
                            {
                                piece: "AssetUploader",
                                image: "",
                                description:"Leggings blue bottle shoreditch trust fund, literally snackwave try-hard single-origin coffee cliche bespoke scenester keytar. Swag quinoa ramps copper mug banh mi art party, single-origin coffee kitsch vape pug jean shorts gastropub hammock fingerstache. Meditation schlitz tumeric salvia air plant fanny pack craft beer hammock woke raw denim fam wayfarers. Vape dreamcatcher squid try-hard. Cardigan cray iPhone aesthetic tumblr next level plaid drinking vinegar kombucha chillwave sriracha. Health goth mlkshk unicorn man braid farm-to-table tacos, paleo leggings chicharrones tote bag freegan 90's af dreamcatcher"
                            }
    
                        ]
                    },
                    {
                        projectName: "Access LMS",
                        projectLogo: lms,
                        projectDescription: "Tousled cray tbh artisan keffiyeh, vaporware ethical af taxidermy. Cliche air plant cray tote bag, aesthetic small batch franzen enamel pin fam. Twee health goth vinyl truffaut, pok pok hammock put a bird on it lumbersexual 90's. Raw denim mixtape hoodie meditation neutra pop-up, DIY keffiyeh aesthetic. Bespoke unicorn try-hard wolf, kinfolk ugh artisan 3 wolf moon chicharrones everyday carry. Vexillologist pok pok slow-carb master cleanse tofu tumeric. Bushwick single-origin coffee kinfolk celiac chambray vape truffaut four loko brooklyn.",
    
                        accomplishments: [
                            {
                                piece: "Widget Dashboard",
                                image: "",
                                description: "Cold-pressed tilde biodiesel, before they sold out put a bird on it succulents cred quinoa single-origin coffee bespoke. Trust fund pitchfork you probably haven't heard of them roof party, semiotics marfa food truck. Lomo normcore bespoke, man braid jianbing pinterest live-edge master cleanse small batch four loko knausgaard gochujang aesthetic. Disrupt bicycle rights kinfolk poutine unicorn wayfarers swag copper mug. Vaporware lomo skateboard authentic bicycle rights slow-carb. Aesthetic kale chips cloud bread copper mug sriracha bespoke."
    
                            },
                            {
                                piece: "iOS and Windows Apps",
                                image: "",
                                description:"'m baby tousled four loko street art williamsburg next level freegan succulents selvage +1 disrupt vaporware. Woke wolf meditation pickled raw denim, polaroid ramps heirloom slow-carb iPhone kogi iceland drinking vinegar hashtag organic. Four dollar toast chicharrones shoreditch, venmo seitan banjo small batch skateboard locavore meditation blue bottle af mixtape meggings. Master cleanse waistcoat four dollar toast ethical, roof party organic activated charcoal hella. Kinfolk pabst prism skateboard hammock stumptown, venmo forage fam. Squid cliche flannel la croix. Food truck taxidermy authentic, enamel pin wayfarers ramps mumblecore yuccie kickstarter fanny pack."
                            }
    
                        ]
                    }
                    
                ]
    
    
            }
        ])
    },[]);
    return(
    <Layout>
        <SEO title="Work Experience" />
        <div className="pageBody">
        <PageBodyGrid item xs={12}>
            <h1>Work History</h1>
            <div>
                {empList.length ?(
                    empList.map((company, index) => (<CompanyPiece props={company} key={index}/>))
                )
                :
                <></>
                }
            </div>
        </PageBodyGrid>
        </div>
    </Layout>)
}

export default WorkExp;