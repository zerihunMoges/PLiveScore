import express, { response } from 'express'
import bodyParser, { urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import { configs } from './configs'

const fetch = require('node-fetch')
let fixtures

async function todaysMatch() {
  await updateMatch()
}

async function getMatchDetail(id) {
  const matchDetail = await getFixture(id)
}

async function updateMatch() {
  await fetch(
    `https://api-football-beta.p.rapidapi.com/fixtures?league=39&season=2022&date=${new Date()
      .toISOString()
      .slice(0, 10)}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '611c8372d4mshde05757227cb5b5p1643f2jsnd22c7dd860c2',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    }
  )
    .then((res) => res.json())
    .then(async (data: any) => {
      const { paging, response } = data

      fixtures = response
      var today = new Date()
      var tomorrow = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1
      )
      var dif = tomorrow.getTime() - today.getTime()
      await new Promise((r) => setTimeout(r, dif))
      await todaysMatch()
    })
}

async function getFixture(id) {
  const data = await fetch(
    `https://api-football-beta.p.rapidapi.com/fixtures?id=${id}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '611c8372d4mshde05757227cb5b5p1643f2jsnd22c7dd860c2',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    }
  ).json()

  if (data.response) {
    const { id, status, date, event, startXI, formation, substitutes, coach } =
      data.response
    const stoped = new Set(['PST', 'CANC', 'TBD', 'SUSP', 'CANC', 'ABD', 'WO'])
    const inprogress = new Set(['1H', '2H', 'P', 'ET', 'BT', 'HT'])
    if (stoped.has(status.short)) {
      return
    } else if (status.short == 'INT') {
      await new Promise((r) => setTimeout(r, 300000))
      await getMatchDetail(id)
    } else if (status.short == 'NS') {
      const dif = new Date(date).getTime() - new Date().getTime()
      await new Promise((r) => setTimeout(r, dif))
      await getMatchDetail(id)
    } else if (inprogress.has(status.short)) {
      await new Promise((r) => setTimeout(r, 60000))
      await getMatchDetail(id)
    }
  }

  return data
}

if (fixtures == undefined) {
  await todaysMatch()
  fixtures.forEach(async (fixture) => {
    const matchTime = new Date(fixture.date).getTime()
    const hour = 3600000
    if (matchTime - new Date().getTime() <= hour) {
      await getMatchDetail(fixture.id)
    } else {
      await new Promise((r) =>
        setTimeout(r, matchTime - new Date().getTime() - hour)
      )
      await getMatchDetail(fixture.id)
    }
  })
}
