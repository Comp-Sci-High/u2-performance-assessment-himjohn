const prompt = require("prompt-sync")()
async function mealRep(meal) {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal)
  const data = await response.json()
  console.log(data["meals"][0]["strInstructions"])
  return	data
}

    


async function imageGet(image) {
  "https://api.openai.com/v1/images/generations"
        const options = {
            method: "POST",
            headers: {
              Authorization: "Bearer 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",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(image),
          };
          const response = await fetch("https://api.openai.com/v1/images/generations",options);
          const data = await response.json();
          console.log(data)
        };
        
        async function main(){
      let meal= prompt("What Kind Of Meal Would You like To Prepared Today!? : ")
    const mealWait = await mealRep(meal)
      
    const imageWait = await imageGet({
        prompt: meal
      })
    }

    main()