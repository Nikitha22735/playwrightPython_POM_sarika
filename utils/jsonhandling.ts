import test from "@playwright/test";
import fs from 'fs'

async function jsonFile(filePath: String){
    let stringData= fs.readFileSync(filePath)
    let data = JSON.parse(stringData)
    return data


}