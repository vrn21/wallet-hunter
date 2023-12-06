 // <div className="flex flex-row justify-center w-[100vw] h-[100vh]">
    //     <h1 className="text-9xl font-bold">Frequently<br/> Asked<br/> Questions</h1>
    
    // </div>

    import * as React from 'react';
    import Accordion from '@mui/material/Accordion';
    import AccordionSummary from '@mui/material/AccordionSummary';
    import AccordionDetails from '@mui/material/AccordionDetails';
    import Typography from '@mui/material/Typography';
    //import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
    import ExpandMoreIcon from './ExpandMoreIcon'
    
    export default function FAQ() {
      return (
        <div className='flex flex-row justify-between w-full h-[100vh] ml-10 pt-[20vh]'>
          <h1 className='text-8xl font-bold pt-5 items-center'>Frequently <br/>Asked<br/> Questions?</h1>
          <div className='flex flex-col w-[500px] mr-[100px] w-7xl rounded-3xl'>
            <div className='flex-row justify-center '>
              <Accordion className=' pt-5 pb-5 pl-5'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className=' text-lg'>What is Airdrop Campaigning?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Airdrop campaigning is a marketing strategy in the cryptocurrency and blockchain space. It involves NFT Airdropping to a specific group of individuals or the wider community as a way to promote a new project, raise awareness, incentivize participation, or reward loyal users. 
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className=' pt-5 pb-5 pl-5'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className=' text-lg' >How are Web3 Socials Different?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Web3 social media platforms promote the values of transparency and authenticity through the use of smart contracts. In Web3 socials, community engagement is prioritized, and the pace of interactions is faster than in Web2.0. The user base tends to consist of individuals with a higher level of Web3 education and awareness.

                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className=' pt-5 pb-5 pl-5'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className=' text-lg'>What types of projects or businesses can benefit from Web3 marketing?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Web3 marketing benefits a range of projects and businesses: Initial Offerings (ICO, IEO, IDO) attract investors, traffic activation enhances Web3 platforms, startups from scratch build presence, boosting trading volume in crypto markets, and scaling decentralized communities fosters engagement and participation. 

                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className=' pt-5 pb-5 pl-5'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className=' text-lg'>Would you create our Marketing Roadmap?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Absolutely! At Wallet Hunter we are extremely Data Driven. Hold on your Seat belts to take a deep dive into Data Backed Marketing Strategies. 

                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
         </div>
        </div>
      );
    }
    