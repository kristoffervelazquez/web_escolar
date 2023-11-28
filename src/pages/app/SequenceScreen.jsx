import React, { useEffect, useState } from 'react';
import ShowSequence from '../../shared/components/ShowSequence';
import Subjects from "../../assets/db/subjects.json"
import { useParams } from 'react-router-dom';
const SequenceScreen = () => {
    const { id } = useParams();
    const [sequence, setSequence] = useState('') 
    useEffect(()=>{
        setSequence(Subjects[id-1].sequence)
    },[id])
    console.log(sequence)
    return (

        <>
            <ShowSequence url={sequence} />
        </>
    );
}



export default SequenceScreen