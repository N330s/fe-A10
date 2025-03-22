export default async function getHospital(hid:string){
    //await new Promise((resolve)=>setTimeout(resolve,1000));

    const response = await fetch("https://vaccine-app-backend.vercel.app/api/v1/hospitals/"+hid);

    if(!response.ok){
        throw new Error("failed to fetch hospital");
    }
    const data = await response.json()
    return data
}