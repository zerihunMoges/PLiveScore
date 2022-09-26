async function updateSeason() {
  await fetch(
    `https://api-football-beta.p.rapidapi.com/fixtures/rounds?league=39&&season=2022`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c9c24aaae1msh17bea5214a85e53p1cee32jsn7cdd2fca8933',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    }
  ).then(async (res) => await res.json())
}
;[
  'Regular Season - 1',
  'Regular Season - 2',
  'Regular Season - 3',
  'Regular Season - 4',
  'Regular Season - 5',
  'Regular Season - 6',
  'Regular Season - 7',
  'Regular Season - 8',
  'Regular Season - 9',
  'Regular Season - 10',
  'Regular Season - 11',
  'Regular Season - 12',
  'Regular Season - 13',
  'Regular Season - 14',
  'Regular Season - 15',
  'Regular Season - 16',
  'Regular Season - 17',
  'Regular Season - 18',
  'Regular Season - 19',
  'Regular Season - 20',
  'Regular Season - 21',
  'Regular Season - 22',
  'Regular Season - 23',
  'Regular Season - 24',
  'Regular Season - 25',
  'Regular Season - 26',
  'Regular Season - 27',
  'Regular Season - 28',
  'Regular Season - 29',
  'Regular Season - 30',
  'Regular Season - 31',
  'Regular Season - 32',
  'Regular Season - 33',
  'Regular Season - 34',
  'Regular Season - 35',
  'Regular Season - 36',
  'Regular Season - 37',
  'Regular Season - 38'
]
