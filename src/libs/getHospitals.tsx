export default async function getHospitals(){
    await new Promise((resolve)=>setTimeout(resolve,1000));

    const response = await fetch("https://vaccine-app-backend.vercel.app/api/v1/hospitals");

    if(!response.ok){
        throw new Error("failed to fetch hospitals");
    }
    const data = await response.json()
    return data
}