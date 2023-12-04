'use client'
import {React,useState} from 'react'
import {CheckboxGroup, Checkbox} from "@nextui-org/react";

export default function Services() {
    const styles = {
        background:"url('/bg4.png')"
    }
    const [selected, setSelected] = useState(["1","2","3","4","5","6","7","8"]);

    function Select() {
        if (selected.length === 0) {
            setSelected(["1"]);
        }
        if (selected.length === 1) {
            setSelected(["1","2"]);
        }
        if (selected.length === 2) {
            setSelected(["1","2","3"]);
        }
        if (selected.length === 3) {
            setSelected(["1","2","3","4"]);
        }
        if (selected.length === 4) {
            setSelected(["1","2","3","4","5"]);
        }
        if (selected.length === 5) {
            setSelected(["1","2","3","4","5","6"]);
        }
        if (selected.length === 6) {
            setSelected(["1","2","3","4","5","6","7"]);
        }
        if (selected.length === 7) {
            setSelected(["1","2","3","4","5","6","7","8"]);
        }    
    }

    function focusOnMe(){
        setTimeout(() => {
            Select();
        }, 100);
    }

    function Focus() {
        setSelected(["1"]);
        setSelected(["1","2"]);
        setSelected(["1","2","3"]);
        setSelected(["1","2","3","4"]);
        setSelected(["1","2","3","4","5"]);
        setSelected(["1","2","3","4","5","6"]);
        setSelected(["1","2","3","4","5","6","7"]);
        setSelected(["1","2","3","4","5","6","7","8"]);
    }

  return (
    <div>


    <div className='w-[100vw] h-[200vh] flex flex-col'style={styles}>
        <div>
            <h1 className='text-9xl font-bold ml-[50px] mt-[30vh]'>Our Services</h1>
            
            <div className='text-xl text-white ml-16 p-4 bg-slate-300 w-[40%] rounded-3xl mt-5'>

            <CheckboxGroup
                label=""
                size='xl'
                value={selected}
                className='font-bold text-white'
                >
                <Checkbox value="1" >Building Web 3.0 Community</Checkbox>
                <Checkbox value="2">Managing Web 3.0 Socials</Checkbox>
                <Checkbox value="3">Marketing Plans</Checkbox>
                <Checkbox value="4">Establishing Wallet Communications</Checkbox>
                <Checkbox value="5">Guidelines for Transitions on Web2.0 Socials</Checkbox>
                <Checkbox value="6">Transitioning Website and Looks to More Web 3.0</Checkbox>
                <Checkbox value="7">AMA Sessions</Checkbox>
                <Checkbox value="8">Collaboration and Partnerships</Checkbox>

                
            </CheckboxGroup>
            </div>
            <div className='ml-[100px] mt-[30vh]'>

                <h2 className='text-8xl font-bold'>Wallet Enrichment</h2>
                <p className='ml-[50px] max-w-[600px] text-3xl pt-4 pl-10 text-slate-400'>A methodical process analyzing on-chain activity, Crafting enhanced profiles through on-chain activity analysis, fostering better personas.</p>
                <ul className='max-w-[600px] text-xl pt-4 ml-[200px] text-slate-400 list-disc'> 
                    <li>NFT Analysis</li>
                    <li>Wallet Activity Monitoring</li>
                    <li>Transaction Volume Analysis</li>
                    <li>Active Blockchain Networks</li>
                    <li>36+ Additional Enrichments</li>

                </ul>
            
            </div>

        <div>

        </div>
        </div>
        </div>
    </div>
  )
}
