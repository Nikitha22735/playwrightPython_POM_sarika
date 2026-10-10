import test from "@playwright/test";
import fs from 'fs'

test('jsonHandling', async()=>{
    let stringData= fs.readFileSync("testData\\creds.json")
    let data = JSON.parse(stringData)
    console.log(data["accoun1"]["loginEmail"])


})

//npm install csv-parse
import {parse} from 'csv-parse/sync'

test('csvHandling', async()=>{
    let stringData= fs.readFileSync("testData\\credentails.csv")
    let data = parse(stringData, {columns:true,skip_empty_lines:true})
    console.log(data[2]["username"])
})

import XLSX from 'xlsx'
test('xlsxHandling', async()=>{
    let workbook = XLSX.readFile('testData\\sample_creds.xlsx')
    let sheet = workbook.Sheets["Sheet2"]
    let data =XLSX.utils.sheet_to_json(sheet)
    console.log(data)
})


test('clI', async()=>{
   let username = process.env.us1
   let password = process.env.pw1
   console.log(username)
   console.log(password)
})

import dotenv from 'dotenv'
test('.env @dh', async()=>{
    dotenv.config({path:process.env.envfile})
   let username = process.env.us2
   let password = process.env.pw2
   console.log(username)
   console.log(password)
})