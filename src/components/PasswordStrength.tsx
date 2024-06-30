import { Weak,Medium,TooWeak,Strong,EmptyMeasure } from "./PasswordStrenghtComponents.style";
import { Text } from "./Text.style";
export const PasswordStrengthPercentage = (password: string) => {
    // Initial Percentage 
    let percentage: number = 0;
    // Special character regex enter code here
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.\/?~]/;
    const ownWeight : number = 20; 
    // At least one number
    if (/\d/.test(password)) {
        percentage = percentage + ownWeight;
    }
    // At least one lowercase alphabet
    if (/.*[a-z].*/.test(password)) {
        percentage = percentage + ownWeight;
    }
    // At least one uppercase alphabet
    if (/.*[A-Z].*/.test(password)) {
        percentage = percentage + ownWeight;
    }
    // At least one special character
    if (specialChars.test(password)) {
        percentage = percentage + ownWeight;
    }
    // length at least 8 or above 
    if (password.length >= 8) {
        percentage = percentage + ownWeight;
    }
    return percentage;
};

export const PasswordStrengthMainComponent = (percentage:number)=>{
    if(percentage<40 && percentage>=0){
        return (
            <div style={{display:"flex",alignItems:"center",gap:10}}>
                <Text fontSize="28" textAlign="left" color="var(---primary-color-white)">Too Weak</Text>
                <div style={{display:"flex",gap:10,alignItems:"center"}}>
                    <TooWeak/>
                    <EmptyMeasure/>
                    <EmptyMeasure/>
                    <EmptyMeasure/>
                </div>
            </div>
        )
    }
    
    else if(percentage>=40 && percentage<60){
        return (
        <div style={{display:"flex",alignItems:"center",gap:10}}>
            <Text fontSize="28" textAlign="left" color="var(---primary-color-white)">Weak</Text>
            <div style={{display:"flex",gap:10,alignItems:"center"}}>
                <Weak/>
                <Weak/>
                <EmptyMeasure/>
                <EmptyMeasure/>
            </div>
        </div>
        )
    }
    else if(percentage>=60 && percentage<80){
        return (
            <div style={{display:"flex",alignItems:"center",gap:10}}>
                <Text fontSize="28" textAlign="left" color="var(---primary-color-white)">Medium</Text>
                <div style={{display:"flex",gap:10,alignItems:"center"}}>
                    <Medium/>
                    <Medium/>
                    <Medium/>
                    <EmptyMeasure/>
                </div>
            </div>
        )
    }
    else if(percentage>=80 && percentage<=100){
        return(
            <div style={{display:"flex",alignItems:"center",gap:10}}>
                <Text fontSize="28" textAlign="left" color="var(---primary-color-white)">Strong</Text>
                <div style={{display:"flex",gap:10,alignItems:"center"}}>
                    <Strong/>
                    <Strong/>
                    <Strong/>
                    <Strong/>
                </div>
            </div>
        ) 
    }
}