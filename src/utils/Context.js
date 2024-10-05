import { createContext, useState } from "react";
import { AllTest } from "../assests/AllTest";
const Aptitude = AllTest.filter((ele)=>{
    return ele.part === "Aptitude & Reasoning";
})
const coding  = AllTest.filter((ele)=>{
    return ele.part === "Coding Programming"
})
const Technical  = AllTest.filter((ele)=>{
    return ele.part === "Technical Assessment"
})
const foundation  = AllTest.filter((ele)=>{
    return ele.part === "Foundation schools"
})
const role  = AllTest.filter((ele)=>{
    return ele.part === "Domain Specific Roles"
})
const YourTest  = AllTest.filter((ele)=>{
    return ele.part === "Your Tests"
})
var i = 1;
AllTest.map((e)=>{
    return Object.assign(e,{id:i++});
})
const alltestContext = createContext({
    ALLTEST :AllTest,
    aptitude :Aptitude,
    technical:Technical,
    Foundation:foundation,
    newTest:YourTest,
    Role:role,
    Coding:coding,
    breadcrum:"All Tests",
    title:"bdsjgcjsg",
    duration:" ",
    instruction:" ",
    


});
 export default alltestContext;