async function requestURL() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    const data = await response.json()
    console.log(data["meals"][0]["strInstructions"])
    return	data
    }
  
    requestURL()