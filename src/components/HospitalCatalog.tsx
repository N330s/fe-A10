'use client'
import getHospitals from "@/libs/getHospitals";
import Card from "@/components/Card";
import Link from "next/link";

export default async function HospitalCatalog({hospitalsJson} : {hospitalsJson:Promise<HospitalJson>}) {
    const hospitalJsonReady = await hospitalsJson
    return (
        <div className="m-[20px] flex flex-row flex-wrap justify-around content-around">
            {hospitalJsonReady.data.map((hospital:HospitalItem)=>(
                <Link href={"/hospital/"+hospital.id} key={hospital.id}>
                    <Card hospitalName={hospital.name} imgSrc={hospital.picture}/>
                </Link>
                )
            )}
        </div>
    );
}