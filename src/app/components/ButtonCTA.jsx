import React from 'react'
import {Button} from "@nextui-org/react";

export default function ButtonCTA(props) {

    const styles = {
        hover: {
            backgroundColor: 'purple.700',
        }
    }
  return (
    <div>
        <Button className="bg-black rounded-2xl border-white border-small text-slate-100 text-xl p-6 mt-5 hover:bg-[#9109e9] hover:text-white hover:shadow-lg " style={styles}>{props.text}</Button>
    </div>
  )
}
