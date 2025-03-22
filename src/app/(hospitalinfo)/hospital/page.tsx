import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function HospitalPage(){
    const hospitals = getHospitals();
    return(
        <main>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
            
        </main>
    );
}